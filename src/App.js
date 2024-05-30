import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import MyForm from "./MyForm";
import SuccessPage from "./SuccessPage";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<MyForm />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;
