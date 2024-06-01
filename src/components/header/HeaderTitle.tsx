import profilePicture from '../../assets/img/PP-medaillon.png'
import logo from '../../assets/img/logo.png'
import '../../assets/css/header.css'

const HeaderTitle = () => {
  return (
    <div className='profile-picture-component'>
      <img className='profile-picture' src={profilePicture} />
      <img className='header-name' src={logo} />
    </div>
  )
}

export default HeaderTitle
