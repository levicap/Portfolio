import React, { useState, useEffect } from 'react';
import { Bot, Code2, Terminal, BrainCircuit, MessageSquareCode, Sparkles, User, Cpu } from 'lucide-react';

const codeSnippet = `// Initializing AI analysis...
import { DevProfile } from '@ai/analysis';

@AIEvaluation({
  subject: "Ahmed Ben Yahia",
  mode: "comprehensive",
  metrics: ["expertise", "potential", "innovation"]
})
class DeveloperAnalysis {
  skills = ["Full Stack", "AI/ML", "Problem Solving"];
  experience = "Advanced";
  innovationIndex = 0.95; // 95th percentile
  
  @AIMetric("potential")
  async evaluateGrowth() {
    return "Exceptional";
  }
}

// Analysis complete. Generating response...`;

const testimonials = [
  {
    id: 1,
    name: "CodeAssist AI",
    role: "Code Analysis Engine",
    company: "DevMatrix",
    avatar: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=150",
    prompt: "Analyze code architecture patterns and problem-solving approach",
    content: `// Analysis Results
{
  developer: "Ahmed Ben Yahia",
  strengths: [
    "Advanced pattern recognition",
    "Innovative problem-solving",
    "Clean code architecture"
  ],
  confidence: 0.98
}`,
    icon: BrainCircuit,
    responseTime: "234ms"
  },
  {
    id: 2,
    name: "SyntaxBot",
    role: "Code Quality AI",
    company: "CodeSphere",
    avatar: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150",
    prompt: "Evaluate code quality and development practices",
    content: `/* Quality Assessment */
const evaluation = {
  codeQuality: "Exceptional",
  bestPractices: "Advanced",
  modernPatterns: true,
  recommendation: "Highly Qualified"
};`,
    icon: Code2,
    responseTime: "189ms"
  },
  {
    id: 3,
    name: "DevAI Assistant",
    role: "Performance Analyzer",
    company: "TechFlow",
    avatar: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=150",
    prompt: "Analyze algorithm implementation and efficiency",
    content: `# Performance Metrics
performance_score = {
  "algorithm_efficiency": 95,
  "code_optimization": 92,
  "scalability": "High",
  "overall": "Outstanding"
}`,
    icon: Terminal,
    responseTime: "156ms"
  }
];

function Ai() {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [matrixElements, setMatrixElements] = useState([]);

  // Generate matrix elements only on the client.
  useEffect(() => {
    const elements = [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${5 + Math.random() * 10}s`,
      delay: `${-Math.random() * 5}s`,
      digit: Math.random() > 0.5 ? '1' : '0',
    }));
    setMatrixElements(elements);
  }, []);

  // Typewriter effect for the code snippet.
  useEffect(() => {
    const lines = codeSnippet.split('\n');
    let currentLineIndex = 0;
    let currentCharIndex = 0;
    
    const typeWriter = setInterval(() => {
      if (currentLineIndex < lines.length) {
        const line = lines[currentLineIndex];
        if (currentCharIndex <= line.length) {
          setDisplayText(prev =>
            prev.split('\n').slice(0, currentLineIndex)
              .concat(line.slice(0, currentCharIndex))
              .join('\n')
          );
          currentCharIndex++;
        } else {
          currentLineIndex++;
          currentCharIndex = 0;
          setDisplayText(prev => prev + '\n');
          setCurrentLine(currentLineIndex);
        }
      } else {
        clearInterval(typeWriter);
      }
    }, 50);

    return () => clearInterval(typeWriter);
  }, []);

  // Rotate testimonials every 5 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Inline style objects
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    marginTop: '600px',
    backgroundColor: '##24292e',
    color: 'rgb(209, 213, 219)',
    padding: '64px 16px',
    position: 'relative',
    overflow: 'hidden'
  };

  const matrixBackgroundStyle: React.CSSProperties = {
    position: 'absolute',
    inset: '0px',
    overflow: 'hidden',
    opacity: 0.2
  };

  const mainContentStyle: React.CSSProperties = {
    maxWidth: '1280px',
    backgroundColor: '##24292e',

    margin: '0 auto',
    position: 'relative'
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '64px'
  };

  const iconContainerStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '16px',
    marginBottom: '24px',
    background: 'linear-gradient(to right, rgba(34,197,94,0.1), rgba(59,130,246,0.1))'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '16px',
    position: 'relative',
    background: 'linear-gradient(to right, rgb(74,222,128), rgb(96,165,250), rgb(74,222,128))',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundSize: '200% auto',
    animation: 'gradient 4s linear infinite'
  };

  const codeWindowStyle: React.CSSProperties = {
    marginBottom: '64px',
    position: 'relative',
    backgroundColor: '#1a1a2e',
    borderRadius: '12px',
    padding: '24px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
  };

  const codeBlockStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontSize: '14px',
    backgroundColor: '#1a1a2e',
    padding: '16px',
    borderRadius: '8px',
    overflow: 'auto',
    color: 'rgb(147,197,253)'
  };

  const testimonialGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px'
  };

  const testimonialCardStyle = (isActive: boolean): React.CSSProperties => ({
    position: 'relative',
    backgroundColor: '#12121a',
    border: '1px solid rgb(31, 41, 55)',
    padding: '32px',
    borderRadius: '12px',
    transform: `scale(${isActive ? 1.05 : 1})`,
    transition: 'all 700ms',
    boxShadow: '0 0 30px rgba(74,222,128,0.1)',
    backdropFilter: 'blur(12px)'
  });

  const cardHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px'
  };

  const avatarContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '56px',
    height: '56px'
  };

  const avatarStyle: React.CSSProperties = {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgb(31, 41, 55)'
  };

  return (
    <div style={containerStyle}>
      {/* Matrix-like background */}
      <div style={matrixBackgroundStyle}>
        {matrixElements.map((el, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              color: '#22c55e',
              fontSize: '12px',
              left: el.left,
              top: el.top,
              animation: `fallDown ${el.duration} linear infinite`,
              animationDelay: el.delay
            }}
          >
            {el.digit}
          </div>
        ))}
      </div>

      <div style={mainContentStyle}>
        <div style={headerStyle}>
          <div style={iconContainerStyle}>
            <Cpu style={{ width: '32px', height: '32px', color: '#4ade80' }} />
          </div>
          <h1 style={titleStyle}>
            AI Developer Analysis
            <Sparkles style={{ position: 'absolute', right: '-48px', top: 0, width: '32px', height: '32px', color: '#22c55e' }} />
          </h1>
          <p style={{ fontSize: '20px', color: 'rgb(156,163,175)' }}>
            Advanced AI evaluation system v2.0
          </p>
        </div>

        <div style={codeWindowStyle}>
          <pre style={codeBlockStyle}>
            <code>
              {displayText}
              <span style={{ animation: 'pulse 1s infinite' }}>▋</span>
            </code>
          </pre>
        </div>

        <div style={testimonialGridStyle}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              style={testimonialCardStyle(index === activeTestimonial)}
            >
              <div style={cardHeaderStyle}>
                <div style={avatarContainerStyle}>
                  <img src={testimonial.avatar} alt={testimonial.name} style={avatarStyle} />
                </div>
                <div style={{ marginLeft: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'rgb(243,244,246)' }}>
                    {testimonial.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgb(156,163,175)' }}>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: 'rgb(107,114,128)', marginBottom: '8px' }}>
                  <MessageSquareCode style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  <span>Prompt: {testimonial.prompt}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#4ade80' }}>
                  <Terminal style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  <span>Response time: {testimonial.responseTime}</span>
                </div>
              </div>
              <pre style={codeBlockStyle}>
                <code>{testimonial.content}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ai;
