import { AiFillGithub } from "react-icons/ai";
import "./style.css";
const BtnGitHub = ({ link }) => {
  return (
    <a target="_blank" rel="noreferrer" href={link} className="btn-outline">
      <AiFillGithub className="icon" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
