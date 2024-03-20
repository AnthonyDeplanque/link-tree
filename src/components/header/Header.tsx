import ProfilePicture from './ProfilePicture';
import ToggleTheme from './ToggleTheme';

const Header: React.FC = (): JSX.Element => {
  return (
    <div className='header-component'>
      <ProfilePicture />
      <ToggleTheme />
    </div>
  );
};

export default Header;
