import styles from '@/styles/AboutPage.module.css';
import { Canvas, useFrame } from '@react-three/fiber';
import Model from './Scene'; // Default export from scene.jsx
import { OrbitControls, Center } from '@react-three/drei';
import { useRef } from 'react';
import Exp from './experience';
import Stacks from './stacks';
import Carrer from './carrer';

// A wrapper component to add gentle oscillating rotation to the model.
function RotatingModel(props) {
  const ref = useRef();

  // useFrame runs on every frame to update the rotation.
  useFrame((state) => {
    // Create an oscillating effect on the Y axis.
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return <Model ref={ref} {...props} />;
}

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
            <div
          className={styles.sceneContainer}
          style={{ width: '100%', height: '500px', marginTop: '2rem' }}
        >
          <Canvas camera={{ position: [20, 0, 10] }}>
            {/* Basic Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />

            {/* Center the Model and apply rotating animation */}
            <Center>
              {/* Adjust the scale prop to display the model bigger; here it's doubled. */}
              <RotatingModel scale={[2, 2, 2]} />
            </Center>

            {/* Optional: Allow orbit controls */}
            <OrbitControls />
          </Canvas>
        </div>
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
