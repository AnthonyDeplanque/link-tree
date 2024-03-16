import './App.css'
import MainComponent from './components/MainComponent'
import ProfilePicture from './components/ProfilePicture'
import { ThemeProvider } from './context/theme/ThemeContextProvider'
function App() {
  return (
    <>
      <ThemeProvider>
        <ProfilePicture />
        <MainComponent />
      </ThemeProvider>
    </>
  )
}
export default App
