import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import users from './users';
import React, { useState } from 'react';

function App() {
  const [aboutMe, setAboutMe] = useState(false);

  return (
    <div className="App">
      <Nav setAboutMe = {setAboutMe}/>
      <main className="App-header">
        <Main aboutMe={aboutMe}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
