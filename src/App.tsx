import "./assets/App.css"
import MainComponent from './components/MainComponent'
import Header from "./components/header/Header"
import { useTheme } from "./context/theme/useTheme"
function App() {

  const { isDarkTheme } = useTheme()

  return (
    <>
      <div className={isDarkTheme ? "dark" : "light"}>

        <Header />
        <MainComponent />

      </div>
    </>
  )
}
export default App
