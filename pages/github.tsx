import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';
import Git from './git';

interface GithubPageProps {
  repos: Repo[];
  user: User;
}

const GithubPage = ({ repos, user }: GithubPageProps) => {
  return (
    <div className={styles.layout}>
    

      

     
        <Git/>
      
    </div>
  );
};



export default GithubPage;
