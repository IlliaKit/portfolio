import "./style.css";
const BtnGitHub = ({ link }) => {
  return (
    <a target="_blank" rel="noreferrer" href={link} className="btn-outline">
      <img src={"../img/icons/gitHub-black.svg"} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
