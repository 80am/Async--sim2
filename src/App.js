import React, { Component } from 'react';
import './App.css';
import routes from './routes';
// import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}

      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return{
//     chores: state.chores
//   }
// }

export default App;

// connect(mapStateToProps)
