import { Link } from 'react-router-dom'
import NotebookIcon from '../icons/NotebookIcon'

const Footer = () => {
  return (
    <div className='footer-component'>
      <div className='left'></div>
      <div className='middle'>
        <p>Made with love and a lot of coffee</p>
      </div>
      <div className='right'>
        <Link to='/legal'>
          <NotebookIcon />
        </Link>
      </div>
    </div>
  )
}

export default Footer
