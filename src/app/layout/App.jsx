import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import EvenDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container className="main">
          <EvenDashboard/>
        </Container>
      </div>
    );
  }
}

export default App;
