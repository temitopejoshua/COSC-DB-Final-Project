import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from '../pages/HomePage';
import StickyHeadTable from '../pages/BookTable';
import StudentsDataTable from "../pages/StudentsTable"
import BookStatusPieChart from "../pages/BookStatusPieChart"
import { HashRouter } from 'react-router-dom';
import LoginPage from '../pages/Login'



function RootNavigation() {
  return (
    <HashRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/book-data' element={<StickyHeadTable/>}/>
      <Route path='/student-data' element={<StudentsDataTable/>}/>
      <Route path='/book-status-analysis' element={<BookStatusPieChart/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default RootNavigation;
