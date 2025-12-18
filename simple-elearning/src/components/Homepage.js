import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const courses = [
    { id: 1, title: 'JavaScript Fundamentals', description: 'Learn the basics of JavaScript programming', image: 'https://via.placeholder.com/300x200?text=JavaScript' },
    { id: 2, title: 'React Development', description: 'Build modern web applications with React', image: 'https://via.placeholder.com/300x200?text=React' },
    { id: 3, title: 'Python for Beginners', description: 'Start your programming journey with Python', image: 'https://via.placeholder.com/300x200?text=Python' }
  ];

  return (
    <div>
      <section className="hero">
        <h1>Welcome to LearnHub</h1>
        <p>Your gateway to quality online education</p>
        <Link to="/resources" className="btn">Start Learning</Link>
      </section>
      
      <section className="courses-section">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} />
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <Link to={`/course/${course.id}`} className="btn">View Course</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;