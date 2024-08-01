import { Link } from 'react-router-dom'
import '../assets/css/navigation.css'
import { HomeIcon } from './icons'
import DiceIcon from './icons/DiceIcon'

const Navigation = () => {
  return (
    <div className='navigation-items'>
      <Link to='/'>
        <HomeIcon />
        LINKS
      </Link>
      {/* <Link to='/links'>
        <ListIcon />
        LINKS
      </Link> */}
      {/* <Link to='/legal'>
        <NotebookIcon />
        LEGAL
      </Link> */}
      <Link to='/random'>
        <DiceIcon />
        RANDOMIZER
      </Link>
    </div>
  )
}

export default Navigation
