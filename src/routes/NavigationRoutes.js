import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from '../pages/HomePage';
import StickyHeadTable from '../pages/BookTable';
import StudentsDataTable from "../pages/StudentsTable"
import BookStatusPieChart from "../pages/BookStatusPieChart"


function RootNavigation() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/db-personal-app' element={<HomePage/>}/>
      <Route path='/db-personal-app/book-data' element={<StickyHeadTable/>}/>
      <Route path='/db-personal-app/student-data' element={<StudentsDataTable/>}/>
      <Route path='/db-personal-app/book-status-analysis' element={<BookStatusPieChart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RootNavigation;
