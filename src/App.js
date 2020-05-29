import React, { Component } from "react";
import EventMenu from "./components/EventMenu/EventMenu";
import SearchBox from "./components/SearchBox/SearchBox";
import { currentEvents } from "./currentEvents";


class App extends Component {

  constructor() {
    super()
    this.state = {
      currentEvents: currentEvents,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
   this.setState({ searchfield: event.target.value })
  
  }

  render() {
 
    const filteredEvents = this.state.currentEvents.filter(showEvent => {
      return showEvent.name.toLowerCase().includes(this.state.searchfield.toLowerCase);
    })
    return (
      <div className="tc">
        <h1>Ticket-App</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <EventMenu currentEvents={filteredEvents}/>
      </div>
    );
  }
}

export default App;
