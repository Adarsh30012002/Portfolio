import styles from './ProjectsStyles.module.css';
import jolly from '../../assets/jolly.png';
import freshBurger from '../../assets/fresh-burger.png';
import Emp from '../../assets/Emp.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={jolly}
          link="https://github.com/Adarsh30012002/Jolly-Audience"
          h3=" Jolly Audience"
          p="Video Smile Extractor"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Adarsh30012002/Predictive-Maintenance-and-Fake-Fire-Alarm-Detection"
          h3="Predictive Maintenance &  False Fire Alarm Detection System"
          p="Prediction"
        />
        <ProjectCard
          src={Emp}
          link="https://github.com/Adarsh30012002/EmployeeManagementSystem"
          h3="Employee Management System"
          p="DBMS Project"
        />
      </div>
    </section>
  );
}

export default Projects;
