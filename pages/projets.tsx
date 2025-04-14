import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Code2, 
  FileJson, 
  Image as ImageIcon, 
  Terminal, 
  ChevronDown, 
  ChevronRight,
  Circle,
  ExternalLink,
  Clock,
  CheckCircle2,
  Globe,
  Layers,
  Database
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  response: {
    status: number;
    data: Record<string, any>;
  };
  stacks: {
    name: string;
    icon: string;
    version: string;
  }[];
  link: string;
  responseTime: string;
  lastTested: string;
}

const projects: Project[] = [
  {
    id: "proj_001",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with real-time inventory management",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
    endpoint: "/api/projects/e-commerce",
    method: "GET",
    responseTime: "42ms",
    lastTested: "2 hours ago",
    response: {
      status: 200,
      data: {
        name: "E-Commerce Platform",
        type: "Full Stack Application",
        features: [
          "Real-time inventory tracking",
          "Secure payment processing",
          "Admin dashboard",
          "Analytics integration"
        ],
        deployment: {
          platform: "AWS",
          region: "us-east-1",
          scaling: "auto"
        },
        performance: {
          loadTime: "1.2s",
          lighthouse: 95
        }
      }
    },
    stacks: [
      { 
        name: "React", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        version: "18.2.0"
      },
      { 
        name: "Node.js", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        version: "18.x"
      },
      { 
        name: "MongoDB", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        version: "6.0"
      }
    ],
    link: "#"
  },
  {
    id: "proj_002",
    title: "Real-time Chat App",
    description: "WebSocket-based chat application with file sharing capabilities",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600",
    endpoint: "/api/projects/chat-app",
    method: "POST",
    responseTime: "38ms",
    lastTested: "1 hour ago",
    response: {
      status: 200,
      data: {
        name: "Real-time Chat Application",
        type: "WebSocket Application",
        features: [
          "Real-time messaging",
          "File sharing",
          "User presence",
          "Message history"
        ],
        architecture: {
          frontend: "React + TypeScript",
          backend: "Node.js + Socket.io",
          database: "Redis"
        },
        metrics: {
          users: "10k+",
          uptime: "99.9%",
          latency: "<100ms"
        }
      }
    },
    stacks: [
      { 
        name: "TypeScript", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        version: "5.0.0"
      },
      { 
        name: "Socket.io", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
        version: "4.x"
      },
      { 
        name: "Redis", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
        version: "7.0"
      }
    ],
    link: "#"
  }
];

function Pr() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [activeTab, setActiveTab] = useState<'response' | 'preview'>('response');
  const [expandedSection, setExpandedSection] = useState<string | null>('body');

  const getMethodColor = (method: string) => {
    const colors = {
      GET: { color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)' },
      POST: { color: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' },
      PUT: { color: '#eab308', backgroundColor: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.2)' },
      DELETE: { color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }
    };
    return colors[method as keyof typeof colors];
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '##24292e', color: 'white', padding: '2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Postman-like Header */}
        <div style={{ 
          marginBottom: '2rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          backgroundColor: '#2d2d2d',
          padding: '1rem',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #3d3d3d'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginRight: '1rem' }}>
              <Circle style={{ width: '0.75rem', height: '0.75rem', color: '#ef4444' }} />
              <Circle style={{ width: '0.75rem', height: '0.75rem', color: '#eab308' }} />
              <Circle style={{ width: '0.75rem', height: '0.75rem', color: '#22c55e' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe style={{ width: '1.25rem', height: '1.25rem', color: '#FF6C37' }} />
              <h1 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Portfolio API Explorer</h1>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {projects.map((project) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s',
                  backgroundColor: selectedProject.id === project.id ? '#FF6C37' : 'transparent',
                  color: selectedProject.id === project.id ? 'white' : '#9ca3af',
                  border: 'none',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {project.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '1.5rem' }}>
          {/* Request Panel */}
          <div>
            <div style={{
              backgroundColor: '#2d2d2d',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #3d3d3d'
            }}>
              {/* URL Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem',
                borderBottom: '1px solid #3d3d3d',
                backgroundColor: '#252525'
              }}>
                <span style={{
                  padding: '0.375rem 0.75rem',
                  borderRadius: '0.5rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  marginRight: '1rem',
                  ...getMethodColor(selectedProject.method)
                }}>
                  {selectedProject.method}
                </span>
                <div style={{
                  flex: 1,
                  backgroundColor: '#1a1a1a',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 1rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  border: '1px solid #3d3d3d'
                }}>
                  {selectedProject.endpoint}
                </div>
                <motion.button 
                  style={{
                    marginLeft: '1rem',
                    padding: '0.5rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#FF6C37',
                    cursor: 'pointer'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send style={{ width: '1.25rem', height: '1.25rem' }} />
                </motion.button>
              </div>

              {/* Status Bar */}
              <div style={{
                backgroundColor: '#252525',
                padding: '0.5rem 1rem',
                borderBottom: '1px solid #3d3d3d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#22c55e' }} />
                    <span style={{ fontSize: '0.875rem', color: '#22c55e' }}>
                      Status: {selectedProject.response.status} OK
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af' }}>
                    <Clock style={{ width: '1rem', height: '1rem' }} />
                    <span style={{ fontSize: '0.875rem' }}>{selectedProject.responseTime}</span>
                  </div>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                  Last tested: {selectedProject.lastTested}
                </div>
              </div>

              {/* Response Section */}
              <div style={{ padding: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  backgroundColor: '#252525',
                  borderRadius: '0.5rem',
                  padding: '0.25rem'
                }}>
                  <div style={{ display: 'flex', gap: '0.25rem', width: '100%' }}>
                    <button
                      onClick={() => setActiveTab('response')}
                      style={{
                        flex: 1,
                        padding: '0.5rem 1rem',
                        borderRadius: '0.375rem',
                        transition: 'all 0.2s',
                        backgroundColor: activeTab === 'response' ? '#3d3d3d' : 'transparent',
                        color: activeTab === 'response' ? 'white' : '#9ca3af',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <FileJson style={{ width: '1rem', height: '1rem' }} />
                        <span>Response</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveTab('preview')}
                      style={{
                        flex: 1,
                        padding: '0.5rem 1rem',
                        borderRadius: '0.375rem',
                        transition: 'all 0.2s',
                        backgroundColor: activeTab === 'preview' ? '#3d3d3d' : 'transparent',
                        color: activeTab === 'preview' ? 'white' : '#9ca3af',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <ImageIcon style={{ width: '1rem', height: '1rem' }} />
                        <span>Preview</span>
                      </div>
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === 'response' ? (
                    <motion.div
                      key="response"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{
                        backgroundColor: '#1a1a1a',
                        borderRadius: '0.75rem',
                        padding: '1rem',
                        border: '1px solid #3d3d3d'
                      }}
                    >
                      <pre style={{
                        fontFamily: 'monospace',
                        fontSize: '0.875rem',
                        color: '#e6e6e6',
                        overflowX: 'auto'
                      }}>
                        {JSON.stringify(selectedProject.response.data, null, 2)}
                      </pre>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="preview"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{
                        backgroundColor: '#1a1a1a',
                        borderRadius: '0.75rem',
                        padding: '1rem',
                        border: '1px solid #3d3d3d'
                      }}
                    >
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        style={{
                          width: '100%',
                          height: '16rem',
                          objectFit: 'cover',
                          borderRadius: '0.5rem',
                          marginBottom: '1rem'
                        }}
                      />
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                        {selectedProject.title}
                      </h3>
                      <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>
                        {selectedProject.description}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {selectedProject.stacks.map((stack) => (
                          <motion.div
                            key={stack.name}
                            whileHover={{ scale: 1.05 }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: '#252525',
                              padding: '0.75rem',
                              borderRadius: '0.5rem',
                              border: '1px solid #3d3d3d'
                            }}
                          >
                            <img
                              src={stack.icon}
                              alt={stack.name}
                              style={{ width: '1.25rem', height: '1.25rem' }}
                            />
                            <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem' }}>
                              {stack.name}
                            </span>
                            <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
                              v{stack.version}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Documentation Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{
              backgroundColor: '#2d2d2d',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #3d3d3d'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Layers style={{ width: '1.25rem', height: '1.25rem', color: '#FF6C37' }} />
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Documentation</h2>
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.5' }}>
                {selectedProject.description}
              </p>
            </div>

            {/* Collapsible Sections */}
            <div style={{
              backgroundColor: '#2d2d2d',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #3d3d3d'
            }}>
              <div style={{ padding: '1rem', borderBottom: '1px solid #3d3d3d' }}>
                <button
                  onClick={() => setExpandedSection(expandedSection === 'body' ? null : 'body')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <FileJson style={{ width: '1.25rem', height: '1.25rem', color: '#FF6C37' }} />
                    <span style={{ fontWeight: 500 }}>Response Schema</span>
                  </div>
                  {expandedSection === 'body' ? (
                    <ChevronDown style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                  ) : (
                    <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSection === 'body' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ marginTop: '1rem', paddingLeft: '2rem' }}>
                        <pre style={{
                          fontSize: '0.875rem',
                          color: '#9ca3af',
                          overflowX: 'auto',
                          backgroundColor: '#1a1a1a',
                          padding: '1rem',
                          borderRadius: '0.5rem',
                          border: '1px solid #3d3d3d'
                        }}>
                          {JSON.stringify(selectedProject.response.data, null, 2)}
                        </pre>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={{ padding: '1rem', borderBottom: '1px solid #3d3d3d' }}>
                <button
                  onClick={() => setExpandedSection(expandedSection === 'tech' ? null : 'tech')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Database style={{ width: '1.25rem', height: '1.25rem', color: '#FF6C37' }} />
                    <span style={{ fontWeight: 500 }}>Tech Stack</span>
                  </div>
                  {expandedSection === 'tech' ? (
                    <ChevronDown style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                  ) : (
                    <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSection === 'tech' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ marginTop: '1rem', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {selectedProject.stacks.map((stack) => (
                          <div
                            key={stack.name}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: '#1a1a1a',
                              padding: '0.75rem',
                              borderRadius: '0.5rem',
                              border: '1px solid #3d3d3d'
                            }}
                          >
                            <img
                              src={stack.icon}
                              alt={stack.name}
                              style={{ width: '1.5rem', height: '1.5rem' }}
                            />
                            <div style={{ marginLeft: '0.75rem' }}>
                              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                                {stack.name}
                              </span>
                              <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
                                v{stack.version}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={{ padding: '1rem' }}>
                <button
                  onClick={() => setExpandedSection(expandedSection === 'preview' ? null : 'preview')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <ImageIcon style={{ width: '1.25rem', height: '1.25rem', color: '#FF6C37' }} />
                    <span style={{ fontWeight: 500 }}>Preview</span>
                  </div>
                  {expandedSection === 'preview' ? (
                    <ChevronDown style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                  ) : (
                    <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSection === 'preview' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ marginTop: '1rem', paddingLeft: '2rem' }}>
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          style={{
                            width: '100%',
                            borderRadius: '0.5rem',
                            border: '1px solid #3d3d3d'
                          }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* View Project Button */}
            <motion.a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                backgroundColor: '#FF6C37',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                transition: 'background-color 0.2s',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Project <ExternalLink style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pr;