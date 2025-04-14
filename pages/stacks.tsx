import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, FileCode2, Terminal, Github, Linkedin, Mail, Folder, ChevronRight, Circle, Globe, ExternalLink } from 'lucide-react';

const stacks = [
  {
    name: 'React.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB',
    experience: '3+ years',
    description: 'Building scalable frontend applications',
    code: 'const [awesome, setAwesome] = useState(true);',
    features: ['Component-Based', 'Virtual DOM', 'JSX Syntax', 'Hooks API']
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    color: '#fff',
    experience: '2+ years',
    description: 'Server-side rendering and static generation',
    code: 'export async function getStaticProps() {...}',
    features: ['SSR/SSG', 'File-based Routing', 'API Routes', 'Image Optimization']
  },
  {
    name: 'Nest.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
    color: '#E0234E',
    experience: '2+ years',
    description: 'Enterprise backend development',
    code: '@Controller("/api") export class AppController {...}',
    features: ['Modular Architecture', 'Dependency Injection', 'TypeScript', 'OpenAPI']
  },
  {
    name: 'Spring Boot',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    color: '#6DB33F',
    experience: '3+ years',
    description: 'Java-based microservices',
    code: '@RestController public class ApiController {...}',
    features: ['Microservices', 'Auto-configuration', 'Security', 'Data JPA']
  },
  {
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    color: '#fff',
    experience: '3+ years',
    description: 'RESTful API development',
    code: 'app.get("/api", (req, res) => {...})',
    features: ['Middleware', 'Routing', 'Template Engines', 'Error Handling']
  }
];

const projects = [/* Previous projects array unchanged */];

function Stacks() {
  const [selectedStack, setSelectedStack] = useState(stacks[0]);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    if (isTyping) {
      const interval = setInterval(() => {
        if (currentIndex < selectedStack.code.length) {
          currentText += selectedStack.code[currentIndex];
          setText(currentText);
          currentIndex++;
        } else {
          setIsTyping(false);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [selectedStack, isTyping]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleStackClick = (stack: typeof stacks[0]) => {
    setSelectedStack(stack);
    setText('');
    setIsTyping(true);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#24292e',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header section */}
     

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
        {/* Hero section */}
    

        {/* Explorer and Editor Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(250px, 1fr) 3fr',
          gap: '1.5rem',
          marginBottom: '4rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
          {/* Explorer */}
          <div style={{ 
            backgroundColor: '#252526',
            borderRadius: '0.5rem',
            padding: '1rem',
            border: '1px solid #404040'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Folder style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem', color: '#60A5FA' }} />
              <h2 style={{ fontSize: '0.875rem', fontWeight: '600' }}>EXPLORER</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {stacks.map((stack) => (
                <motion.div
                  key={stack.name}
                  onClick={() => handleStackClick(stack)}
                  whileHover={{ x: 5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    cursor: 'pointer',
                    backgroundColor: selectedStack.name === stack.name ? '#37373D' : 'transparent',
                    transition: 'all 0.2s',
                    border: `1px solid ${selectedStack.name === stack.name ? stack.color : 'transparent'}`
                  }}
                >
                  <ChevronRight 
                    style={{ 
                      width: '1rem', 
                      height: '1rem', 
                      marginRight: '0.5rem',
                      color: stack.color,
                      transform: selectedStack.name === stack.name ? 'rotate(90deg)' : 'none',
                      transition: 'transform 0.2s'
                    }} 
                  />
                  <img 
                    src={stack.logo} 
                    alt={stack.name} 
                    style={{ 
                      width: '1.25rem', 
                      height: '1.25rem', 
                      marginRight: '0.5rem',
                      filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.2))'
                    }} 
                  />
                  <span style={{ fontSize: '0.875rem', color: stack.color }}>{stack.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Editor */}
          <div style={{ 
            backgroundColor: '#1E1E1E',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            border: '1px solid #404040'
          }}>
            {/* Editor Tabs */}
            <div style={{ 
              backgroundColor: '#2D2D2D',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid #404040'
            }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#1E1E1E',
                padding: '0.25rem 1rem',
                borderRadius: '0.25rem 0.25rem 0 0',
                borderTop: `2px solid ${selectedStack.color}`
              }}>
                <Circle style={{ width: '0.75rem', height: '0.75rem', marginRight: '0.5rem', color: selectedStack.color }} />
                <span style={{ fontSize: '0.875rem', color: selectedStack.color }}>{selectedStack.name}.tsx</span>
              </div>
            </div>
            
            {/* Code Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStack.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{ padding: '1.5rem' }}
              >
                <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                  <motion.img 
                    src={selectedStack.logo} 
                    alt={selectedStack.name} 
                    style={{ 
                      width: '4rem', 
                      height: '4rem', 
                      marginBottom: '1rem',
                      filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))'
                    }}
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    marginBottom: '0.5rem',
                    color: selectedStack.color
                  }}>{selectedStack.name}</h3>
                  <p style={{ color: '#9CA3AF', marginBottom: '1rem' }}>{selectedStack.description}</p>
                  
                  {/* Features Grid */}
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '0.75rem',
                    marginBottom: '1.5rem'
                  }}>
                    {selectedStack.features.map((feature) => (
                      <motion.div
                        key={feature}
                        onHoverStart={() => setHoveredFeature(feature)}
                        onHoverEnd={() => setHoveredFeature(null)}
                        style={{
                          padding: '0.75rem',
                          borderRadius: '0.375rem',
                          backgroundColor: hoveredFeature === feature ? `${selectedStack.color}22` : '#2D2D2D',
                          border: `1px solid ${hoveredFeature === feature ? selectedStack.color : '#404040'}`,
                          transition: 'all 0.2s',
                          cursor: 'default'
                        }}
                      >
                        <span style={{ 
                          fontSize: '0.875rem',
                          color: hoveredFeature === feature ? selectedStack.color : '#9CA3AF'
                        }}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <span style={{ 
                    color: selectedStack.color, 
                    fontSize: '0.875rem',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: `${selectedStack.color}22`,
                    borderRadius: '1rem',
                    display: 'inline-block',
                    border: `1px solid ${selectedStack.color}`
                  }}>{selectedStack.experience}</span>
                </div>
                
                {/* Code Preview */}
                <div style={{ 
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  backgroundColor: '#2D2D2D',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    background: `linear-gradient(90deg, ${selectedStack.color}, transparent)`,
                    opacity: isTyping ? 1 : 0,
                    transition: 'opacity 0.3s'
                  }} />
                  <pre style={{ color: selectedStack.color }}>
                    {text}
                    <span style={{ 
                      opacity: showCursor ? 1 : 0,
                      transition: 'opacity 0.3s',
                      color: selectedStack.color
                    }}>|</span>
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Projects Section */}
        {/* Previous projects section unchanged */}

        {/* Terminal section */}
        <div style={{ 
          backgroundColor: '#2D2D2D',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          border: '1px solid #404040',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <Terminal style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem', color: '#60A5FA' }} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Terminal</h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}
          >
            <p style={{ color: '#4ADE80' }}>$ whoami</p>
            <p style={{ color: '#D1D5DB', marginBottom: '0.5rem' }}>
              Full Stack Developer passionate about creating exceptional web experiences
            </p>
            <p style={{ color: '#4ADE80' }}>$ skills --list</p>
            <p style={{ color: '#D1D5DB' }}>
              Frontend Development, Backend Development, API Design, Database Management, Cloud Services
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Stacks;