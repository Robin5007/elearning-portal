import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(0);
  
  const courseData = {
    1: { title: 'JavaScript Fundamentals', lessons: ['Variables & Data Types', 'Functions', 'Objects & Arrays', 'DOM Manipulation'] },
    2: { title: 'React Development', lessons: ['Components', 'Props & State', 'Hooks', 'Routing'] },
    3: { title: 'Python for Beginners', lessons: ['Syntax Basics', 'Data Structures', 'Functions', 'File Handling'] }
  };

  const course = courseData[id] || { title: 'Course Not Found', lessons: [] };
  const progress = course.lessons.length > 0 ? ((currentLesson + 1) / course.lessons.length) * 100 : 0;

  return (
    <div className="lesson-container">
      <h1>{course.title}</h1>
      
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className="lesson-nav">
        <h3>Lessons</h3>
        <ul>
          {course.lessons.map((lesson, index) => (
            <li 
              key={index} 
              className={index === currentLesson ? 'active' : ''}
              onClick={() => setCurrentLesson(index)}
            >
              {index + 1}. {lesson}
            </li>
          ))}
        </ul>
      </div>
      
      {course.lessons.length > 0 && (
        <div className="lesson-content">
          <h2>Lesson {currentLesson + 1}: {course.lessons[currentLesson]}</h2>
          <p>This is the content for {course.lessons[currentLesson]}. In a real application, this would contain the actual lesson material, videos, and interactive content.</p>
        </div>
      )}
    </div>
  );
};

export default CoursePage;