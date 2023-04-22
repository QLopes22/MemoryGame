import './App.css';
import MemoryCard from './components/MemoryCard';
import React from 'react';

function App() {
  // function clickHandler() {
  //   alert("card clicked");
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://play-lh.googleusercontent.com/cJokjWYV_EhTZJvJG0zbV6CowN5V8EoyjzF4LssGyjhTo6rAVntx3XjD7AkBQ2IdFKw" className="App-logo" alt="logo" />
        <h1>Memory Game</h1>
        <p class="subheader">Match Memes To Win</p>
      </header>
      <div className="card-container">
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
    </div>
  )
}

export default App;
