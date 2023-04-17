import Project from "../components/project/Project";
import { projects } from "../helpers/projectsList";
const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((el) => {
              return (
                <Project
                  key={el.id}
                  title={el.title}
                  img={el.img}
                  skills={el.skills}
                  index={el.id - 1}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
