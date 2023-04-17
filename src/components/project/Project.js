import { NavLink } from "react-router-dom";
const Project = ({ title, img, skills, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">
          {title} {skills}
        </h3>
      </li>
    </NavLink>
  );
};

export default Project;
