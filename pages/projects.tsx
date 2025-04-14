import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import Pr from './projets';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
    

     
      <Pr />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
