import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Star, 
  GitFork, 
  Code2, 
  Terminal,
  Files,
  FolderGit,
  Activity,
  Play,
  Pause,
  RefreshCw,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitBranch
} from 'lucide-react';
import { CommitGraph } from './CommitGraph';
import { TypingAnalytics } from './TypingAnalytics';
import { min } from 'three/tsl';
import { m } from 'framer-motion';

// Mock data - replace with actual GitHub stats
const githubStats = {
  repositories: 24,
  stars: 156,
  forks: 48,
  contributions: 1204,
  topLanguages: ['TypeScript', 'JavaScript', 'Python', 'React'],
  recentActivity: [
    {
      type: 'commit',
      message: 'feat: implement real-time data visualization',
      branch: 'main',
      timestamp: '2 minutes ago'
    },
    {
      type: 'pull',
      message: 'Add authentication system',
      status: 'merged',
      timestamp: '1 hour ago'
    },
    {
      type: 'commit',
      message: 'fix: resolve memory leak in WebGL renderer',
      branch: 'fix/memory-optimization',
      timestamp: '3 hours ago'
    },
    {
      type: 'pull',
      message: 'Feature: Add 3D visualization',
      status: 'open',
      timestamp: '5 hours ago'
    }
  ],
  codeSnippets: [
    {
      language: 'TypeScript',
      code: 'interface Developer {\n  name: string;\n  skills: string[];\n  experience: number;\n}'
    },
    {
      language: 'JavaScript',
      code: 'const createPortfolio = async () => {\n  const skills = await fetchGithubStats();\n  return buildAwesomePortfolio(skills);\n}'
    },
    {
      language: 'Python',
      code: 'def analyze_code(repo):\n    stats = get_complexity_metrics(repo)\n    return optimize_codebase(stats)'
    }
  ]
};

const AnimatedTyping = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(c => c + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span style={{ fontFamily: 'monospace' }}>
      {displayText}
      <span style={{ animation: 'blink 1s infinite' }}>_</span>
    </span>
  );
};

const TerminalWindow = ({ children, title }: { children: React.ReactNode, title: string }) => {
  const styles = {
    container: {
      backgroundColor: '#1e1e1e',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #2d2d2d'
    },
    header: {
      backgroundColor: '#2d2d2d',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    dots: {
      display: 'flex',
      gap: '4px'
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%'
    },
    title: {
      fontSize: '14px',
      color: '#9CA3AF'
    },
    content: {
      padding: '16px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.dots}>
          <div style={{ ...styles.dot, backgroundColor: '#EF4444' }}></div>
          <div style={{ ...styles.dot, backgroundColor: '#F59E0B' }}></div>
          <div style={{ ...styles.dot, backgroundColor: '#10B981' }}></div>
        </div>
        <span style={styles.title}>{title}</span>
      </div>
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

const GitActivityTerminal = () => {
  const [currentActivity, setCurrentActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % githubStats.recentActivity.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type: string, status?: string) => {
    if (type === 'commit') return <GitCommit style={{ width: '16px', height: '16px', color: '#4CAF50' }} />;
    if (type === 'pull' && status === 'merged') return <GitMerge style={{ width: '16px', height: '16px', color: '#9333EA' }} />;
    return <GitPullRequest style={{ width: '16px', height: '16px', color: '#3B82F6' }} />;
  };

  const styles = {
    container: {
      fontFamily: 'monospace',
      fontSize: '14px'
    },
    commandLine: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#4CAF50'
    },
    activity: {
      paddingLeft: '16px',
      transition: 'opacity 0.5s',
      marginBottom: '12px'
    },
    activityHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    branch: {
      color: '#3B82F6'
    },
    timestamp: {
      color: '#9CA3AF'
    },
    message: {
      paddingLeft: '24px',
      color: '#fff'
    }
  };

  return (
    <TerminalWindow title="Git Activity Log">
      <div style={styles.container}>
        <div style={styles.commandLine}>
          <Terminal style={{ width: '16px', height: '16px' }} />
          <span>git status</span>
        </div>
        {githubStats.recentActivity.map((activity, index) => (
          <div 
            key={index}
            style={{
              ...styles.activity,
              opacity: index === currentActivity ? 1 : 0.4
            }}
          >
            <div style={styles.activityHeader}>
              {getActivityIcon(activity.type, activity.status)}
              <span style={styles.branch}>
                {activity.type === 'commit' ? activity.branch : activity.status}
              </span>
              <span style={styles.timestamp}>•</span>
              <span style={styles.timestamp}>{activity.timestamp}</span>
            </div>
            <div style={styles.message}>{activity.message}</div>
          </div>
        ))}
        <div style={{ ...styles.commandLine, marginTop: '16px' }}>
          <GitBranch style={{ width: '16px', height: '16px' }} />
          <AnimatedTyping text="Fetching latest changes..." />
        </div>
      </div>
    </TerminalWindow>
  );
};

const RepoCard = ({ name, description, stars, forks, language }: {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    container: {
      backgroundColor: '#1e1e1e',
      borderRadius: '6px',
      padding: '16px',
      transition: 'all 0.3s',
      transform: isHovered ? 'translateY(-4px)' : 'none',
      border: `1px solid ${isHovered ? 'rgba(59, 130, 246, 0.3)' : 'transparent'}`
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px'
    },
    icon: {
      width: '20px',
      height: '20px',
      color: isHovered ? '#3B82F6' : '#9CA3AF',
      transition: 'color 0.3s'
    },
    title: {
      color: isHovered ? '#3B82F6' : '#fff',
      fontWeight: 500,
      transition: 'color 0.3s'
    },
    description: {
      color: '#9CA3AF',
      fontSize: '14px',
      marginBottom: '12px'
    },
    stats: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      fontSize: '14px',
      color: '#9CA3AF'
    },
    stat: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  };

  return (
    <div 
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.header}>
        <FolderGit style={styles.icon} />
        <h3 style={styles.title}>{name}</h3>
      </div>
      <p style={styles.description}>{description}</p>
      <div style={styles.stats}>
        <div style={styles.stat}>
          <Star style={{ width: '16px', height: '16px' }} />
          <span>{stars}</span>
        </div>
        <div style={styles.stat}>
          <GitFork style={{ width: '16px', height: '16px' }} />
          <span>{forks}</span>
        </div>
        <div style={styles.stat}>
          <Code2 style={{ width: '16px', height: '16px' }} />
          <span>{language}</span>
        </div>
      </div>
    </div>
  );
};

const CodeCarousel = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % githubStats.codeSnippets.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const styles = {
    controls: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px'
    },
    buttonGroup: {
      display: 'flex',
      gap: '8px'
    },
    button: {
      color: '#9CA3AF',
      cursor: 'pointer',
      transition: 'color 0.3s',
      background: 'none',
      border: 'none',
      padding: 0
    },
    status: {
      fontSize: '12px',
      color: '#9CA3AF'
    },
    code: {
      color: '#4CAF50',
      fontSize: '14px'
    }
  };

  return (
    <TerminalWindow title={`${githubStats.codeSnippets[currentSnippet].language} Preview`}>
      <div style={styles.controls}>
        <div style={styles.buttonGroup}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={styles.button}
          >
            {isPlaying ? <Pause style={{ width: '16px', height: '16px' }} /> : <Play style={{ width: '16px', height: '16px' }} />}
          </button>
          <button
            onClick={() => setCurrentSnippet((prev) => (prev + 1) % githubStats.codeSnippets.length)}
            style={styles.button}
          >
            <RefreshCw style={{ width: '16px', height: '16px' }} />
          </button>
        </div>
        <span style={styles.status}>Auto-cycling code snippets</span>
      </div>
      <pre>
        <code style={styles.code}>
          <AnimatedTyping text={githubStats.codeSnippets[currentSnippet].code} />
        </code>
      </pre>
    </TerminalWindow>
  );
};

function Git() {
  const styles = {
    container: {
       
    
      minHeight: '100vh',
      backgroundColor: '#24292e',
      color: '#fff'
    },
    header: {
      backgroundColor: '#2d2d2d',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      borderBottom: '1px solid #1e1e1e'
    },
    headerTitle: {
      fontSize: '14px',
      fontWeight: 500
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 16px',
      backgroundColor: '#24292e',

    },
    section: {
      marginBottom: '32px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
      marginBottom: '32px',
      backgroundColor: '#24292e',

    },
    statCard: {
      backgroundColor: '#2d2d2d',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid #3d3d3d',
      transition: 'border-color 0.3s'
    },
    statHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px'
    },
    statLabel: {
      color: '#9CA3AF'
    },
    statValue: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 500,
      marginBottom: '16px'
    },
    repoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '16px'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Github style={{ width: '24px', height: '24px' }} />
        <span style={styles.headerTitle}>GitHub Explorer</span>
      </header>

      <div style={styles.content}>
        <div style={styles.section}>
          <GitActivityTerminal />
        </div>

        <div style={styles.section}>
          <CommitGraph />
        </div>

        <div style={styles.section}>
          <TypingAnalytics />
        </div>

        <div style={styles.section}>
          <CodeCarousel />
        </div>

        <div style={styles.grid}>
          <div style={{ ...styles.statCard, borderColor: 'rgba(59, 130, 246, 0.3)' }}>
            <div style={styles.statHeader}>
              <Files style={{ width: '20px', height: '20px', color: '#3B82F6' }} />
              <span style={styles.statLabel}>Repositories</span>
            </div>
            <span style={styles.statValue}>{githubStats.repositories}</span>
          </div>
          <div style={{ ...styles.statCard, borderColor: 'rgba(245, 158, 11, 0.3)' }}>
            <div style={styles.statHeader}>
              <Star style={{ width: '20px', height: '20px', color: '#F59E0B' }} />
              <span style={styles.statLabel}>Stars</span>
            </div>
            <span style={styles.statValue}>{githubStats.stars}</span>
          </div>
          <div style={{ ...styles.statCard, borderColor: 'rgba(16, 185, 129, 0.3)' }}>
            <div style={styles.statHeader}>
              <GitFork style={{ width: '20px', height: '20px', color: '#10B981' }} />
              <span style={styles.statLabel}>Forks</span>
            </div>
            <span style={styles.statValue}>{githubStats.forks}</span>
          </div>
          <div style={{ ...styles.statCard, borderColor: 'rgba(139, 92, 246, 0.3)' }}>
            <div style={styles.statHeader}>
              <Activity style={{ width: '20px', height: '20px', color: '#8B5CF6' }} />
              <span style={styles.statLabel}>Contributions</span>
            </div>
            <span style={styles.statValue}>{githubStats.contributions}</span>
          </div>
        </div>

        <div style={styles.section}>
          <TerminalWindow title="Language Statistics">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Terminal style={{ width: '20px', height: '20px', color: '#4CAF50' }} />
              <h2 style={{ fontSize: '18px', fontWeight: 500 }}>Top Languages</h2>
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '14px' }}>
              {githubStats.topLanguages.map((lang, index) => (
                <div key={lang} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ color: '#4CAF50' }}>→</span>
                  <span style={{ color: '#3B82F6', width: '96px' }}>{lang}</span>
                  <div style={{ flex: 1, height: '8px', backgroundColor: '#1e1e1e', borderRadius: '4px', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        height: '100%',
                        backgroundColor: '#3B82F6',
                        width: `${100 - (index * 20)}%`,
                        opacity: 1 - (index * 0.2),
                        transition: 'all 1s'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </div>

        <h2 style={styles.sectionTitle}>Featured Repositories</h2>
        <div style={styles.repoGrid}>
          <RepoCard 
            name="awesome-project"
            description="A revolutionary project that showcases modern web development practices and cutting-edge technologies."
            stars={42}
            forks={12}
            language="TypeScript"
          />
          <RepoCard 
            name="portfolio-v2"
            description="My personal portfolio website built with React, Next.js, and TailwindCSS."
            stars={28}
            forks={8}
            language="JavaScript"
          />
        </div>
      </div>
    </div>
  );
}

export default Git;