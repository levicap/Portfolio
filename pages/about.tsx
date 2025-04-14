import styles from '@/styles/AboutPage.module.css';

import Stacks from './stacks';
import Carrer from './carrer';


// A wrapper component to add gentle oscillating rotation to the model.


const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ahmed Ben Yahia</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer from sfax, Tunisia. I primarily
              work with JavaScript / TypeScript and the React,Next ecosystem.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React, but you&apos;ll
              also find me working with Node.js, MongoDB and Express while
              building the backend for my personal projects.
            </p>
           
          </section>

          <section className={styles.section}>
          <Carrer />
          </section>

         
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Stacks</h2>
            <Stacks />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to read a good dystopian
              novel, listen to calm piano music or just laze around.
            </p>
          </section>
        </div>

        {/* 3D Scene Section */}
      
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
