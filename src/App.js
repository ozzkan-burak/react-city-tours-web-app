import React from 'react';
import './App.scss';

// custom components
import NavBar from './components/NavBar/NavBar';
import TourList from './components/TourList';

function App() {
  return (
    <main className="App">
      <NavBar Alt="city tours logo" />
      <TourList />
    </main>
  );
}

export default App;
