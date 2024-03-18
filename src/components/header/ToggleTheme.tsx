

import '../../assets/toggle-theme.css'
import { Moon, Sun } from "lucide-react"
import { useTheme } from '../../context/theme/useTheme'

const ToggleTheme = () => {
  const { isDarkTheme, toggleTheme } = useTheme()

  return <div className="toggle-theme-component">
    {isDarkTheme ? <Moon /> : <Sun />}
    <label className="switch">
      <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
      <span className={`slider round ${isDarkTheme ? 'dark-toggle' : 'light-toggle'}`} />
    </label>
  </div>
}


export default ToggleTheme;