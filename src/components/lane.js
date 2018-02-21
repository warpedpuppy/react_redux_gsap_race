import React from 'react';
import './lane.css';
import Racer from './racer';

export default function Lane(props) {

	let winner = (props.winner === props.id)?
	<div className="winner">this is the winner!</div>:<span></span>;
	return (
			<div>
				<div className="lane">
				{winner}
				<Racer 
					racing={props.racing} 
					runTime={props.runTime} />
				</div>
			</div>
		)
}