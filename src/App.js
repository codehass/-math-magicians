import Calculator from './components/calculator';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Calculator />
      </div>
    );
  }
}

export default App;
