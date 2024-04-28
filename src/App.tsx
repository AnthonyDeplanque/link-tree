import { BrowserRouter } from "react-router-dom"
import "./assets/App.css"
import MainComponent from './components/MainComponent'
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import { useTheme } from "./context/theme/useTheme"
import { getFirestore } from "firebase/firestore"
import { app } from "./firebase/firebase-app"



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export const firestore = getFirestore(app);

function App() {

  const { isDarkTheme } = useTheme()

  console.log("Eh mais t'es pas sensé regarder la console !")
  console.log("Allez, zou ! Dehors !!!")

  return (
    <>
      <div className={isDarkTheme ? "dark" : "light"}>
        <BrowserRouter>
          <Header />
          <MainComponent />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}
export default App
