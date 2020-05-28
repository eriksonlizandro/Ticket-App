import React from 'react';
import {currentEvents} from './currentEvents'
import EventMenu from './components/EventMenu/EventMenu'; 
import SearchBox from './components/SearchBox/SearchBox'

import './App.css';

function App() {
  return (
    <div className = 'tc'>
    <h1>Ticket-App</h1>
    <SearchBox/>
    <EventMenu currentEvents = {currentEvents}/>
    </div>
  );
}

export default App;
