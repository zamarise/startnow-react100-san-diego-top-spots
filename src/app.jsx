import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { topspots: [] };
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }
  render() {
    return (
      <div className='container-fluid'>
        <h1 className='text-center'>San Diego Top Spots</h1>
        <p className='lead bg-light text-gray-dark text-center'>
          A list of the top 30 places to see in San Diego, California (made in React).
        </p>
        {/* <pre>{JSON.stringify(this.state.topspots, null, 2)}</pre> */}
        <div className='App' />
        {this.state.topspots.map(topspot => (
          <TopSpot
            key={ topspot.id }
            name={ topspot.name }
            description={ topspot.description }
            location={ topspot.location }
          />
        ))}
      </div>
    );
  }
}

export default App;
