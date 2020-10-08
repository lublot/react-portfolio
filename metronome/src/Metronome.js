import React, { useState, useEffect } from 'react'
import "./Metronome.css";
import click1 from './media/click1.wav';

function Metronome (props) {
  const [BPM, setBPM] = useState(60)
  const [timer, setTimer] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [tic] = useState(new Audio(click1))

  function playClick () {
    tic.play()
  }

  useEffect(() => {
    clearInterval(timer)
    if (isPlaying) {
      setTimer(setInterval(playClick, (60 * 1000) / BPM))
    }
  }, [BPM, isPlaying])

  function handleUpdate (value) {
    if (value <= 300) {
      setBPM(parseInt(value))
    }

    if (value < 1) {
      setBPM(1)
    }
  }

  return (
    <div className={`${props.isDarkTheme ? 'container dark': 'container'}`}>
      <h1>BPM: 
       <input
        type="text"
        autoFocus={true}
        className="text-input"
        value={BPM}
        onChange={(event) => { handleUpdate(event.target.value) }}
      />
      </h1>
      <input
        type="range"
        min="1"
        max="300"
        value={BPM}
        className="slider"
        onChange={(event) => { handleUpdate(event.target.value) }}
      />
      <br />
      <button onClick={ () => setIsPlaying(!isPlaying) }>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}

export default Metronome