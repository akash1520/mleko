import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Appbar from './components/Appbar';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Appbar/>
      <App/>
      <Footer/>
    </Router>
  </React.StrictMode>,
)
