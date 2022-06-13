import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Routes from './Routes/route';
import GlobalStyle from "./utils/themes/global"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <GlobalStyle/>
      <Routes/>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
