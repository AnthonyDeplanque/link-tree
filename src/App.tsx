import { BrowserRouter } from "react-router-dom"
import "./assets/css/App.css"
import MainComponent from './components/MainComponent'
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
// import { useTheme } from "./context/theme/useTheme"
function App() {

  // const { isDarkTheme } = useTheme()

  return (
    <>
      <div className="main">
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
