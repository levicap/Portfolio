import React, { useState, useEffect } from 'react';
import { Terminal, Mail, Phone, MapPin, Github, Linkedin, Database, Play, RefreshCw, Code, Globe, CheckCircle2, XCircle } from 'lucide-react';

function Sql() {
  const [query, setQuery] = useState('SELECT name, role, location, projects FROM developer WHERE id = 1;');
  const [isExecuting, setIsExecuting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [typingEffect, setTypingEffect] = useState('');
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const executeQuery = () => {
    setIsExecuting(true);
    setShowResults(false);
    setTypingEffect('');
    
    // Simulate SQL query execution with typing effect
    let currentText = '';
    const finalText = 'SELECT * FROM developer_profiles WHERE status = "available" LIMIT 2;';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < finalText.length) {
        currentText += finalText[currentIndex];
        setTypingEffect(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsExecuting(false);
          setShowResults(true);
        }, 500);
      }
    }, 50);
  };

  useEffect(() => {
    executeQuery();
    const profileInterval = setInterval(() => {
      setCurrentProfileIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(profileInterval);
  }, []);

  const profiles = [
    {
      platform: 'GitHub',
      username: 'Ahmed Bne Yahia',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60',
      stats: { 
        role: 'Senior Developer',
        languages: 'TypeScript, Python, Rust',
        projects: '45+ repositories',
        availability: 'Open to opportunities'
      }
    },
    {
      platform: 'LinkedIn',
      username: 'Ahmed Ben Yahia',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60',
      stats: {
        position: 'Tech Lead',
        experience: '8+ years',
        specialization: 'Full Stack',
        availability: 'Available for consulting'
      }
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#24292e',
      minHeight: '100vh',
      color: '#d4d4d4',
      fontFamily: 'Monaco, Consolas, monospace'
    }}>
      {/* VS Code-like header */}
      <div style={{
        backgroundColor: '#323233',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #454545'
      }}>
        <Terminal size={20} style={{ marginRight: '8px' }} />
        <span className="animate-slide-in">developer_profile.sql</span>
      </div>

      {/* Connection Status */}
      <div style={{
        backgroundColor: '#264b73',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '12px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: '#00ff00'
        }}>
          <CheckCircle2 size={14} />
          <span>Connected to DB</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: '#00c8ff'
        }}>
          <Database size={14} />
          <span>developer_profiles</span>
        </div>
      </div>

      {/* SQL Query Interface */}
      <div style={{
        margin: '20px',
        backgroundColor: '#252526',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 0.5s ease-out'
      }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#264b73',
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Database size={20} color="#00c8ff" className="animate-pulse-slow" />
            <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Developer Profile Query</span>
          </div>
          <button 
            onClick={executeQuery}
            className="button-hover"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              color: '#ffffff',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '4px',
              backgroundColor: '#365983'
            }}
          >
            {isExecuting ? (
              <RefreshCw size={18} className="animate-spin" />
            ) : (
              <>
                <Play size={18} fill="#00c8ff" />
                <span>Execute Query</span>
              </>
            )}
          </button>
        </div>

        {/* Query Editor */}
        <div style={{ padding: '20px' }}>
          <div style={{
            backgroundColor: '#1e1e1e',
            padding: '20px',
            borderRadius: '6px',
            marginBottom: '20px',
            border: '1px solid #363636',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, transparent 65%, rgba(0, 200, 255, 0.1) 75%, transparent 85%)',
              backgroundSize: '200% 200%',
              animation: 'gradient 15s ease infinite'
            }} />
            <div className="animate-typewriter" style={{
              color: '#00c8ff',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '14px'
            }}>
              {typingEffect || query}
            </div>
          </div>

          {/* Results Section */}
          {showResults && (
            <div style={{
              backgroundColor: '#1e1e1e',
              padding: '20px',
              borderRadius: '6px',
              animation: 'fadeIn 0.5s ease-in',
              border: '1px solid #363636'
            }}>
              <div style={{
                color: '#00c8ff',
                marginBottom: '16px',
                fontFamily: 'Monaco, Consolas, monospace',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Code size={16} className="animate-pulse-slow" />
                <span>Query executed successfully. Fetched developer profiles:</span>
              </div>

              {/* Profile Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
                padding: '20px 0'
              }}>
                {profiles.map((profile, index) => (
                  <div 
                    key={index}
                    className={`card-hover ${index === currentProfileIndex ? 'animate-glow' : ''}`}
                    style={{
                      backgroundColor: '#2d2d2d',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid #404040',
                      opacity: index === currentProfileIndex ? 1 : 0.7,
                      transform: `scale(${index === currentProfileIndex ? 1 : 0.98})`,
                      transition: 'all 0.5s ease'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: '#264b73',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      color: '#fff',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      zIndex: 1
                    }}>
                      {profile.platform === 'GitHub' ? <Github size={14} /> : <Linkedin size={14} />}
                      {profile.platform}
                    </div>
                    <img 
                      src={profile.image} 
                      alt={profile.platform}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div style={{ padding: '20px' }}>
                      <h3 style={{ 
                        color: '#00c8ff',
                        marginBottom: '12px',
                        fontSize: '18px',
                        borderBottom: '1px solid #404040',
                        paddingBottom: '8px'
                      }}>
                        {profile.username}
                      </h3>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        color: '#d4d4d4',
                        fontSize: '14px'
                      }}>
                        {Object.entries(profile.stats).map(([key, value], statIndex) => (
                          <div 
                            key={key}
                            className="animate-slide-in"
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              padding: '4px 0',
                              borderBottom: '1px dashed #363636',
                              animationDelay: `${statIndex * 0.1}s`
                            }}
                          >
                            <span style={{ color: '#888' }}>{key}:</span>
                            <span style={{ color: '#00c8ff' }}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Actions */}
              <div style={{
                marginTop: '20px',
                padding: '20px',
                backgroundColor: '#2d2d2d',
                borderRadius: '6px',
                border: '1px solid #404040'
              }}>
                <div style={{
                  color: '#00c8ff',
                  marginBottom: '16px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Globe size={16} className="animate-pulse-slow" />
                  <span>Contact Information:</span>
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  {[
                    { icon: <Mail size={16} />, text: 'Email', href: 'mailto:john.doe@example.com' },
                    { icon: <Phone size={16} />, text: 'Call', href: 'tel:+15551234567' },
                    { icon: <Github size={16} />, text: 'View GitHub', href: 'https://github.com/johndoe' },
                    { icon: <Linkedin size={16} />, text: 'Connect on LinkedIn', href: 'https://linkedin.com/in/johndoe' },
                    { icon: <MapPin size={16} />, text: 'San Francisco, CA' }
                  ].map((item, index) => (
                    item.href ? (
                      <a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="button-hover"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 16px',
                          backgroundColor: '#264b73',
                          color: '#ffffff',
                          textDecoration: 'none',
                          borderRadius: '4px',
                          fontSize: '14px',
                          border: '1px solid #365983',
                          animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`
                        }}
                      >
                        {item.icon}
                        {item.text}
                      </a>
                    ) : (
                      <div
                        key={index}
                        className="button-hover"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 16px',
                          backgroundColor: '#264b73',
                          color: '#ffffff',
                          borderRadius: '4px',
                          fontSize: '14px',
                          border: '1px solid #365983',
                          animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`
                        }}
                      >
                        {item.icon}
                        {item.text}
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sql;