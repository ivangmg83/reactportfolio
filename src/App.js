import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import React, { useState } from 'react';
import Form from './utils/form/Form'

function App() {
  const [contentType, setContentType] = useState('');

  return (
    <div className="App">
      <Nav setContentType={setContentType}/>
      <main className="App-header">
        <Main Form={Form} contentType={contentType}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
