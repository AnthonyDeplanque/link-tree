import profilePicture from "../assets/PP-medaillon.png"
import "../assets/profile-picture.css"

const ProfilePicture = () => {
  return (
    <div>
      <img className="profile-picture" src={profilePicture} />
    </div>)
}

export default ProfilePicture