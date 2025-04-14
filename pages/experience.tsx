import React, { useState } from 'react';
import { Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const experiences = [
  {
    company: "Tessact",
    logo: <Building2 style={{ width: '1.5rem', height: '1.5rem', backgroundColor: 'transparent' }} />,
    code: `export default function TessactExperience() {
  return (
    <p>
      Led development efforts for collaborative video reviewing and editing. 
      Maintained in-house component library and icon library. 
      Worked with a lean team of 4 frontend engineers to build a next-gen video creation suite.
    </p>
  );
}`
  },
  {
    company: "Previous Company",
    logo: <Building2 style={{ width: '1.5rem', height: '1.5rem', backgroundColor: 'transparent' }} />,
    code: `export default function PreviousExperience() {
  return (
    <p>
      Developed and maintained multiple React applications. 
      Implemented responsive designs and improved application performance.
    </p>
  );
}`
  }
];

interface ExperienceItemProps {
  company: string;
  logo: React.ReactNode;
  code: string;
}

function ExperienceItem({ company, logo, code }: ExperienceItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#24292e',
          color: '#fff',
          transition: 'box-shadow 0.2s ease'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: '#fff',
          }}
        >
          {logo}
          <span style={{ fontWeight: 600, color: '#fff', backgroundColor: 'transparent' }}>
            {company}
          </span>
        </div>
        {isOpen ? (
          <ChevronUp style={{ width: '1.25rem', height: '1.25rem', backgroundColor: 'transparent' }} />
        ) : (
          <ChevronDown style={{ width: '1.25rem', height: '1.25rem', backgroundColor: 'transparent' }} />
        )}
      </button>
      
      {isOpen && (
        <div
          style={{
            marginTop: '0.5rem',
            padding: '1rem',
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            overflowX: 'auto'
          }}
        >
      <TypeAnimation
  sequence={[code]}
  wrapper={"pre" as any}
  speed={50}
  cursor={true}
  style={{
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    color: '#9cdcfe',
    textShadow: `
      0 0 0 #569cd6,
      0 0 0 #c586c0,
      0 0 0 #4ec9b0,
      0 0 0 #ce9178,
      0 0 0 #d4d4d4
    `
  }}
/>

        </div>
      )}
    </div>
  );
}

function Exp() {
  return (
    <div
      style={{
        minHeight: '50vh',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '640px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              logo={exp.logo}
              code={exp.code}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Exp;
