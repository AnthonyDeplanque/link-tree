

import '../../assets/toggle-theme.css'
import { useTheme } from '../../context/theme/useTheme'
import MoonIcon from '../icons/MoonIcon'
import SunIcon from '../icons/SunIcon'

const ToggleTheme = () => {
  const { isDarkTheme, toggleTheme } = useTheme()

  return <div className="toggle-theme-component">
    {isDarkTheme ? <MoonIcon /> : <SunIcon />}
    <label className="switch">
      <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
      <span className={`slider round ${isDarkTheme ? 'dark-toggle' : 'light-toggle'}`} />
    </label>
  </div>
}


export default ToggleTheme;