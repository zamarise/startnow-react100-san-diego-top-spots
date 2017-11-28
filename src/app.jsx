import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className='container-fluid'>
        <h1 className='text-center'>San Diego Top Spots</h1>
        <p className='lead bg-light text-gray-dark text-center'>
          A list of the top 30 places to see in San Diego, California (made in React).
        </p>
        <div className='App' />
      </div>
    );
  }
}

export default App;
