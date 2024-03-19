import { Link } from "react-router-dom";
import NotebookIcon from "../icons/NotebookIcon";

const Footer = () => {
  return <div className="footer-component">
    <div className="footer-left">
    </div>
    <div className="footer-middle">
      <p>Made with love and a lot of coffee</p>
    </div>
    <div className="footer-right">
      <Link to="/legal">
        <NotebookIcon />
      </Link>
    </div>
  </div>
}

export default Footer