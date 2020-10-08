import React, { useState } from 'react';
import './App.css';
import Metronome from './Metronome';


function App () {
  const [isDarkTheme, setDarkTheme] = useState(true)

  return (
    <div className="App">
      <header className={`${isDarkTheme ? 'App-header dark': 'App-header'}`}>
        <Metronome isDarkTheme={isDarkTheme}/>
        <br />
        <div className="switch-container">
          <span>Light</span>
          <div className="switch-holder">
            <input
              type="checkbox"
              id="theme_selector"
              className="switch switch-shadow"
              value={isDarkTheme}
              checked={isDarkTheme}
              onChange={(event) => { setDarkTheme(event.target.checked) }}
            />
            <label htmlFor="theme_selector"></label>
          </div>
          <span>Dark</span>
        </div>
      </header>
    </div>
  );
}

export default App;
