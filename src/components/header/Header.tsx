import BurgerMenu from "../BurgerMenu";
import HeaderTitle from "./HeaderTitle";
// import ToggleTheme from "./ToggleTheme";

const Header = () => {

  return <div className="header-component">
    <div className="left"><BurgerMenu /></div>
    <div className="middle"><HeaderTitle /></div>
    <div className="right"></div>


    {/* <ToggleTheme /> */}
  </div>
}

export default Header;
