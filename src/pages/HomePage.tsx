import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure you're using React Router for navigation
import '../App.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for isAuthenticated in localStorage
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <div className="flex App">
      <header>
        <h2>Welcome to Student Library</h2>
        <h3>Temitope Oyemade</h3>
        <a href="mailto:OYEMADET0226@students.bowiestate.edu" target="_blank" rel="noreferrer">
          OYEMADET0226@students.bowiestate.edu
        </a>
        <p>
          <a href="https://github.com/temitopejoshua/COSC-DB-Final-Project" target="_blank" rel="noreferrer">
            Github
          </a>
        </p>
        <p>
          <a href="Temitope_Oyemade_Project_Whitepaper.pdf" download rel="noreferrer">
            Project Report
          </a>
        </p>
        <p>
          <a href="#/book-data" target="_blank" rel="noreferrer">
            View book data
          </a>
        </p>
        <p>
          <a href="#/student-data" target="_blank" rel="noreferrer">
            View student data
          </a>
        </p>
      </header>
      <p>
        <a href="#/book-status-analysis" target="_blank" rel="noreferrer">
          View book analysis
        </a>
      </p>
    </div>
  );
};

export default HomePage;
