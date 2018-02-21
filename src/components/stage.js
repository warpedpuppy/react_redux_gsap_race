import React from 'react';
import './stage.css';
import Lane from './lane';

export default function Stage(props) {

	let lanes = props.runTimes.map((runTime, index) => {
		return <Lane 
					winner={props.winner}
					racing={props.racing} 
					runTime={runTime} 
					id={index}
					key={index} />
	})
	let racing = (props.racing === true)?<span>true</span>:<span>false</span>;
	let curtainClass= 'curtain'
  	if(props.racing === false){
  		curtainClass = 'curtain';
  	} else {
  		curtainClass = 'curtain active';
  	}
	return (
			<div className="stage">
				<div className={curtainClass}></div>
				<div className={curtainClass}></div>
				{lanes}
			</div>
		)
}