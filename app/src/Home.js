import React from 'react';
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my site! Last updated 4/13/21 1:10pm
        </p>
        <a 
          className="App-link"
          href="/recipes/"
        >
        Gated function content
        </a>
		        <a 
          className="App-link"
          href="/.auth/login/aad"
        >
        Log in with Azure Active Directory
        </a>

      </header>
    </div>
  );
}

export default Home;
