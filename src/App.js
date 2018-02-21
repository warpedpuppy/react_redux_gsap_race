import React, { Component } from 'react';
import './App.css';
import Stage from './components/stage';
import {connect} from 'react-redux';
import {createRunTimes, startRace, resetRace} from './actions/index.js';

class App extends Component {

  getRaceTimes(){
  	this.props.dispatch(createRunTimes());
  }
  startRace(){
  	this.props.dispatch(startRace());
  }
  componentWillMount(){
  	this.props.dispatch(createRunTimes());
  }
  reset(){
  	this.props.dispatch(createRunTimes());
  	this.props.dispatch(resetRace());
  }
  render() {
  	let startButtonClass = (!this.props.racing)?'button show':'button hide';
  	let resetButtonClass = (this.props.resetButton)?'button show':'button hide';
    return (
      <div className="App">
      <div className="buttonDiv">
	      <button className={startButtonClass} onClick={() => this.startRace()}>start race</button>
	       <button className={resetButtonClass} onClick={() => this.reset()}>reset race</button>
       </div>
        <Stage 
        winner={this.props.winner}
        racing={this.props.racing} 
        runTimes={this.props.runTimes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
	racerQ: state.raceReducer.racerQ,
	runTimes: state.raceReducer.runTimes,
	racing: state.raceReducer.racing,
	resetButton: state.raceReducer.resetButton,
	winner: state.raceReducer.winner
});

export default connect(mapStateToProps)(App);
