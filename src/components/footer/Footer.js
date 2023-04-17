import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src="./img/icons/instagram.svg" alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src="./img/icons/twitter.svg" alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src="./img/icons/gitHub.svg" alt="Link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
