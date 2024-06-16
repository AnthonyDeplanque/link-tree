import { useState } from "react"
import { getAccessToken, getUserInfos, getUserInfosById } from "./twitch-integration";

export const AdminMode = () => {
  const [userName, setUserName] = useState<string>();
  const [userInfos, setUserInfos] = useState<any>();


  const displayInfos = (infos: any) => {
    const data = []
    for (const property in infos) {
      data.push({ id: property, value: infos[property] })
    }
    return data;
  }

  const getInfos = (userName: string) => {
    return getAccessToken()
      .then((token) => getUserInfos(userName, token))
      .then((userInfos: any) => getAccessToken().then((token) => getUserInfosById(userInfos.id, token))
        .then(infos => { console.log(infos); setUserInfos(infos) }))
  }



  return <div>
    <label htmlFor="user-name">Name</label><input id="user-name" onChange={e => setUserName(e.target.value)} />

    <button disabled={userName ? false : true} onClick={() => userName && getInfos(userName)}>SEARCH</button>

    {userInfos && <div>
      {displayInfos(userInfos).map(data => <>
        <p><span style={{ fontWeight: "bold", padding: "1rem" }}>{data.id}</span>  - {data.value}</p></>
      )}
    </div>
    }
  </div>
}