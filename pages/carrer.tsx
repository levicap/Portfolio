import React, { useState } from 'react';
import { 
  GitBranch, 
  TestTube, 
  Box, 
  Rocket, 
  Server, 
  Shield, 
  Monitor, 
  Cpu,
  Code2,
  Container,
  Cloud,
  GitPullRequest
} from 'lucide-react';

function Carrer() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const experiences = [
    {
      company: "Microsoft",
      logo: "https://images.unsplash.com/photo-1642132652075-1c33b6cd956f?auto=format&fit=crop&q=80&w=100&h=100",
      duration: "2020 - Present",
      role: "Senior DevOps Engineer",
      color: "#2ea043",
      stages: [
        {
          name: "Development",
          icon: <Code2 size={20} />,
          achievements: [
            "Implemented GitOps workflow with Azure DevOps",
            "Reduced deployment time by 70%",
            "Automated code review process"
          ]
        },
        {
          name: "Testing",
          icon: <TestTube size={20} />,
          achievements: [
            "Built automated testing pipeline",
            "Achieved 95% test coverage",
            "Implemented security scanning"
          ]
        },
        {
          name: "Deployment",
          icon: <Rocket size={20} />,
          achievements: [
            "Zero-downtime deployment strategy",
            "Multi-region deployment automation",
            "Rollback mechanism implementation"
          ]
        }
      ]
    },
    {
      company: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=100&h=100",
      duration: "2018 - 2020",
      role: "Cloud Infrastructure Engineer",
      color: "#ff9900",
      stages: [
        {
          name: "Infrastructure",
          icon: <Cloud size={20} />,
          achievements: [
            "Kubernetes cluster optimization",
            "Auto-scaling implementation",
            "Infrastructure as Code (IaC)"
          ]
        },
        {
          name: "Monitoring",
          icon: <Monitor size={20} />,
          achievements: [
            "Real-time metrics dashboard",
            "Alert system implementation",
            "Performance optimization"
          ]
        },
        {
          name: "Security",
          icon: <Shield size={20} />,
          achievements: [
            "Security compliance automation",
            "Vulnerability scanning pipeline",
            "Access control implementation"
          ]
        }
      ]
    },
    {
      company: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=100&h=100",
      duration: "2016 - 2018",
      role: "CI/CD Specialist",
      color: "#4285f4",
      stages: [
        {
          name: "Build",
          icon: <Box size={20} />,
          achievements: [
            "Container orchestration",
            "Build process optimization",
            "Artifact management"
          ]
        },
        {
          name: "Integration",
          icon: <GitPullRequest size={20} />,
          achievements: [
            "Continuous Integration pipeline",
            "Code quality gates",
            "Merge automation"
          ]
        },
        {
          name: "Operations",
          icon: <Cpu size={20} />,
          achievements: [
            "Service mesh implementation",
            "Microservices architecture",
            "Load balancing optimization"
          ]
        }
      ]
    }
  ];

  return (
    <div style={{
      backgroundColor: '#24292e',
      minHeight: '100vh',
      color: '#c9d1d9',
      fontFamily: 'Consolas, Monaco, monospace',
      padding: '20px'
    }}>
      {/* Pipeline Header */}
      <div style={{
        backgroundColor: '#161b22',
        padding: '15px 20px',
        borderRadius: '8px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        border: '1px solid #30363d'
      }}>
        <GitBranch size={24} style={{ color: '#58a6ff' }} />
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}> Career Pipeline</span>
      </div>

      {/* Pipeline Stages */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{
            backgroundColor: '#161b22',
            borderRadius: '8px',
            border: '1px solid #30363d',
            overflow: 'hidden'
          }}>
            {/* Company Header */}
            <div style={{
              padding: '15px 20px',
              borderBottom: '1px solid #30363d',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              backgroundColor: '#1c2128'
            }}>
              <img
                src={exp.logo}
                alt={exp.company}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: `2px solid ${exp.color}`
                }}
              />
              <div>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: exp.color }}>
                  {exp.company}
                </div>
                <div style={{ fontSize: '14px', color: '#8b949e' }}>
                  {exp.role} • {exp.duration}
                </div>
              </div>
            </div>

            {/* Pipeline Flow */}
            <div style={{
              display: 'flex',
              padding: '20px',
              position: 'relative',
              gap: '10px'
            }}>
              {exp.stages.map((stage, stageIndex) => (
                <div
                  key={stageIndex}
                  style={{
                    flex: 1,
                    position: 'relative'
                  }}
                >
                  {/* Pipeline Connection Line */}
                  {stageIndex < exp.stages.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: '25px',
                      right: '-5%',
                      width: '110%',
                      height: '2px',
                      backgroundColor: exp.color,
                      zIndex: 0
                    }} />
                  )}

                  {/* Stage Node */}
                  <div
                    onClick={() => setActiveStage(activeStage === stageIndex ? null : stageIndex)}
                    style={{
                      backgroundColor: '#1c2128',
                      border: `1px solid ${exp.color}`,
                      borderRadius: '8px',
                      padding: '15px',
                      cursor: 'pointer',
                      position: 'relative',
                      zIndex: 1,
                      transition: 'all 0.3s ease',
                      transform: activeStage === stageIndex ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: activeStage === stageIndex ? `0 0 15px ${exp.color}40` : 'none'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px'
                    }}>
                      <div style={{
                        backgroundColor: exp.color,
                        padding: '8px',
                        borderRadius: '6px',
                        display: 'flex'
                      }}>
                        {stage.icon}
                      </div>
                      <span style={{ fontWeight: 'bold' }}>{stage.name}</span>
                    </div>

                    <div style={{
                      maxHeight: activeStage === stageIndex ? '200px' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      opacity: activeStage === stageIndex ? 1 : 0
                    }}>
                      {stage.achievements.map((achievement, aIndex) => (
                        <div
                          key={aIndex}
                          style={{
                            fontSize: '13px',
                            padding: '8px',
                            margin: '5px 0',
                            backgroundColor: '#0d1117',
                            borderRadius: '4px',
                            border: '1px solid #30363d'
                          }}
                        >
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrer;