import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <AiOutlineInstagram className="icon" />
            </li>
            <li className="social__item">
              <FiTwitter className="icon" />
            </li>
            <li className="social__item">
              <AiFillGithub className="icon" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
