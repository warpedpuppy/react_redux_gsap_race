import React from 'react';
import './racer.css';
import { TweenMax } from 'gsap'
import { connect } from 'react-redux';
import { stopRace } from '../actions/index.js';

class Racer extends React.Component {

	constructor(props){
		super(props)
		this.completeHandler = this.completeHandler.bind(this);
	}
	completeHandler(){
		this.props.dispatch(stopRace());
	}
	render (){
		if(this.props.racing){
    		TweenMax.to(
    			this.box, 
    			this.props.runTime, 
    			{
    				right: 0, 
    				onComplete: this.completeHandler,
    				delay:1
    			})
		}
		return (
			<div>
				<div className="racer" style={this.props.racerStyle} ref={con => { this.box = con; }}></div>
			</div>
		)

	}
	
}
const mapStateToProps = state => ({
	racing: state.raceReducer.racing,
	racerStyle: state.raceReducer.racerStyle
});

export default connect(mapStateToProps)(Racer);