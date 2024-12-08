import '../App.css';

function HomePage() {
  return (
    <div className="flex App">
      <header>
        <h2>Welcome to Database design class</h2>
        <h3>Temitope Oyemade</h3>
        <a href='mailto:OYEMADET0226@students.bowiestate.edu' target='_blank' rel="noreferrer">OYEMADET0226@students.bowiestate.edu</a>
        <p>
          <a href='https://www.linkedin.com/in/temitope-oyemade-94552a179/' target='_blank' rel="noreferrer">Linkedin</a>
        </p>
        <p>
          <a href='https://github.com/temitopejoshua/COSC-DB-Final-Project' target='_blank' rel="noreferrer">Github</a>
        </p>
        <p>
          <a href='https://github.com/temitopejoshua' target='_blank' rel="noreferrer">Project Report</a>
        </p>
        <p>
          <a href='/db-personal-app/book-data' target='_blank' rel="noreferrer">View book data</a>
        </p>
        <p>
          <a href='/db-personal-app/student-data' target='_blank' rel="noreferrer">View student data</a>
        </p>
      </header>
      <p>
        <a href='/db-personal-app/book-status-analysis' target='_blank' rel="noreferrer">View book analysis</a>
      </p>
    </div>
  );
}

export default HomePage;
