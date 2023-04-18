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
              <a target="blank" href="https://www.instagram.com/kitenek/">
                <AiOutlineInstagram className="icon" />
              </a>
            </li>
            <li className="social__item">
              <a target="blank" href="#!">
                <FiTwitter className="icon" />
              </a>
            </li>
            <li className="social__item">
              <a target="blank" href="https://github.com/IlliaKit">
                <AiFillGithub className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
