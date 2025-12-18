import React from 'react';

const Resources = () => {
  const resources = [
    { title: 'Documentation', icon: '📚', description: 'Comprehensive guides and references' },
    { title: 'Video Tutorials', icon: '🎥', description: 'Step-by-step video lessons' },
    { title: 'Practice Exercises', icon: '💻', description: 'Hands-on coding challenges' },
    { title: 'Community Forum', icon: '👥', description: 'Connect with other learners' }
  ];

  return (
    <div className="courses-section">
      <h1>Learning Resources</h1>
      <p>Explore our comprehensive collection of learning materials</p>
      
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <div className="resource-icon">{resource.icon}</div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <button className="btn">Access Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;