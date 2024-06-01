import '../../assets/css/toggle-theme.css'
import { useTheme } from '../../context/theme/useTheme'
import Toggle from '../generics/Toggle'

const ToggleTheme = () => {
  const { isDarkTheme, toggleTheme } = useTheme()

  return (
    <div className='toggle-theme-component'>
      <Toggle value={isDarkTheme} setValue={toggleTheme} className={`${isDarkTheme ? 'dark' : 'light'}-toggle`} />
    </div>
  )
}

export default ToggleTheme
