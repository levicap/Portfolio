import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';
import Sql from './contac';

const ContactPage = () => {
  return (
    <div style={{ marginTop: '330px' }}>
      <h1 className={styles.pageTitle}>Contact Me</h1>
    
      
      <Sql /> 
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
