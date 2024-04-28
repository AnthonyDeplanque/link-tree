import { UserData } from "./user-data";
import { CollectionRetrieved, addItemToCollection, getCollection, getItemQuery } from "../../firebase/collections";
import { comparePassword, hashPassword } from "./hash";


export interface LoginCredentials {
  nickname: string,
  password: string,
}

// test function to show users from firestore user collection
export const showUsers = () => {
  getCollection('users').then((collection: CollectionRetrieved<UserData>[]) =>
    collection.forEach((item: CollectionRetrieved<UserData>) => console.log(item))
  )
};

// Action to do when log to server
export const handleLogin = (e: any, loginCredentials: LoginCredentials): Promise<false | CollectionRetrieved<UserData>> => {
  e.preventDefault();
  const { password, nickname } = loginCredentials
  if (!nickname || !password) {
    throw new Error("No credentials !")
  }


  return getItemQuery("users", "nickname", nickname).then((userData) => {
    if (!userData) {
      return false
    }
    return comparePassword(password, userData.data.password).then((match: boolean) => {
      if (match) {
        return userData
      } else {
        return false
      }
    })
  })

}

export const createUser = (e: any, userData: UserData) => {
  e.preventDefault()
  const { nickname, password, email } = userData;
  if (!nickname || !password || !email) {
    throw new Error("Forgot credential")
  }

  const getEmailQueryPromise = getItemQuery("users", "email", email)
  const getNicknameQueryPromise = getItemQuery("users", "nickname", nickname)

  return Promise.all([getEmailQueryPromise, getNicknameQueryPromise]).then(([a, b]) => {
    if (a || b)
      throw new Error("user already exist !")
  }).then(() => {
    const isAdmin = false;
    const userCreationPromise = hashPassword(password).then((hashedPassword: string) => {
      return addItemToCollection("users", { nickname, password: hashedPassword, email, isAdmin })

    });
    const loginPromise = handleLogin(e, { nickname, password }).then(value => value)
    return Promise.all([userCreationPromise, loginPromise]).then(([_, user]) => user)
  })


}
