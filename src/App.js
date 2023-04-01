import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import users from './users';
import React, { useState } from 'react';

function App() {
  const [contentType, setContentType] = useState('');

  return (
    <div className="App">
      <Nav setContentType={setContentType}/>
      <main className="App-header">
        <Main users={users} contentType={contentType}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
