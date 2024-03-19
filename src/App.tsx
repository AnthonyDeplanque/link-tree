import "./assets/App.css"
import MainComponent from './components/MainComponent'
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import { useTheme } from "./context/theme/useTheme"
function App() {

  const { isDarkTheme } = useTheme()


  return (
    <>
      <div className={isDarkTheme ? "dark" : "light"}>

        <Header />
        <MainComponent />
        <Footer />
      </div>
    </>
  )
}
export default App
