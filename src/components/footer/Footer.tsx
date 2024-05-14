import { Link } from "react-router-dom";
import NotebookIcon from "../icons/NotebookIcon";
import Randomizer from "../randomizer/Randomizer";
import DiceIcon from "../icons/DiceIcon";

const Footer = () => {
  return <div className="footer-component">
    <div className="left">
      <Link to='/random'>
        <DiceIcon />
      </Link>
    </div>
    <div className="middle">
      <p>Made with love and a lot of coffee</p>
    </div>
    <div className="right">
      <Link to="/legal">
        <NotebookIcon />
      </Link>
    </div>
  </div>
}

export default Footer