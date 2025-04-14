import React, { useState, useEffect } from 'react';

interface TypingMetrics {
  wpm: number;
  accuracy: number;
  consistency: number;
}

 const TypingAnalytics = () => {
  const [metrics, setMetrics] = useState<TypingMetrics>({
    wpm: 0,
    accuracy: 0,
    consistency: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        wpm: Math.floor(Math.random() * 40) + 80,
        accuracy: Math.floor(Math.random() * 10) + 90,
        consistency: Math.floor(Math.random() * 15) + 85
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#2d2d2d',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px'
  };

  const metricStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px'
  };

  const barStyle = (value: number): React.CSSProperties => ({
    height: '4px',
    backgroundColor: '#4CAF50',
    width: `${value}%`,
    borderRadius: '2px',
    transition: 'width 0.5s ease-in-out'
  });

  return (
    <div style={containerStyle}>
      <h3 style={{ color: '#fff', marginBottom: '12px', fontSize: '16px' }}>Real-time Typing Analytics</h3>
      <div>
        <div style={metricStyle}>
          <span style={{ color: '#9CA3AF', width: '100px' }}>Speed</span>
          <div style={{ flex: 1, backgroundColor: '#1e1e1e', borderRadius: '2px' }}>
            <div style={barStyle(metrics.wpm / 1.2)} />
          </div>
          <span style={{ color: '#fff', minWidth: '60px' }}>{metrics.wpm} WPM</span>
        </div>
        <div style={metricStyle}>
          <span style={{ color: '#9CA3AF', width: '100px' }}>Accuracy</span>
          <div style={{ flex: 1, backgroundColor: '#1e1e1e', borderRadius: '2px' }}>
            <div style={barStyle(metrics.accuracy)} />
          </div>
          <span style={{ color: '#fff', minWidth: '60px' }}>{metrics.accuracy}%</span>
        </div>
        <div style={metricStyle}>
          <span style={{ color: '#9CA3AF', width: '100px' }}>Consistency</span>
          <div style={{ flex: 1, backgroundColor: '#1e1e1e', borderRadius: '2px' }}>
            <div style={barStyle(metrics.consistency)} />
          </div>
          <span style={{ color: '#fff', minWidth: '60px' }}>{metrics.consistency}%</span>
        </div>
      </div>
    </div>
  );
};

export default TypingAnalytics;