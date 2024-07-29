import { Link } from 'react-router-dom'
import { HomeIcon, ListIcon } from './icons'
import NotebookIcon from './icons/NotebookIcon'
import DiceIcon from './icons/DiceIcon'
import '../assets/css/navigation.css'

const Navigation = () => {
  return (
    <div className='navigation-items'>
      <Link to='/'>
        <HomeIcon />
        HOME
      </Link>
      <Link to='/links'>
        <ListIcon />
        LINKS
      </Link>
      <Link to='/legal'>
        <NotebookIcon />
        LEGAL
      </Link>
      <Link to='/random'>
        <DiceIcon />
        RANDOMIZER
      </Link>
      <Link to='/links'>
        <NotebookIcon /> NOTEBOOK TO TEST ROUTE
      </Link>
    </div>
  )
}

export default Navigation
