import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
