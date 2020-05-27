import React from 'react';
import {currentEvents} from './components/currentEvents/currentEvents'
import EventMenu from './components/EventMenu/EventMenu'; 

import './App.css';

function App() {
  return (
    <EventMenu currentEvents = {currentEvents}/>
  );
}

export default App;
