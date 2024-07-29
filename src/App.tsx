import { BrowserRouter } from 'react-router-dom'
import './assets/css/App.css'
import MainComponent from './components/MainComponent'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { SelectedGamesContextProvider } from './context/randomizer/SelectedGamesContextProvider'
// import { useTheme } from "./context/theme/useTheme"
function App() {
  // const { isDarkTheme } = useTheme()

  return (
    <div className='main'>
      <SelectedGamesContextProvider>
        <BrowserRouter>
          <Header />
          <MainComponent />
          <Footer />
        </BrowserRouter>
      </SelectedGamesContextProvider>
    </div>
  )
}
export default App
