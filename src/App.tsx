import "./assets/App.css"
import MainComponent from './components/MainComponent'
import { ThemeProvider } from './context/theme/ThemeContextProvider'
function App() {
  return (
    <>
      <ThemeProvider>
        <MainComponent />
      </ThemeProvider>
    </>
  )
}
export default App
