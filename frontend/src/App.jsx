import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import UserForm from './Pages/UserForm/UserForm';
import ActivityReport from './Pages/ActivityReport/ActivityReport';
import ActivityCreate from './Pages/ActivityCreate/ActivityCreate';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserForm />} />
        <Route path="/activity-report" element={<ActivityReport />} />       
        <Route path="/ativity-create" element={<ActivityCreate />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;