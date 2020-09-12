import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
          <Route to='home' component={home} />
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
