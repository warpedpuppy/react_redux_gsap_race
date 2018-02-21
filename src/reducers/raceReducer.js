import * as actions from '../actions';

const initialState = {
    racerQ: 5,
    runTimes: [], 
    racing: false,
    racerStyle: {},
    finishedRacers: 0,
    resetButton: false,
    winner: undefined
};

function raceReducer(state=initialState, action){
	if(action.type === actions.CREATE_RUN_TIMES) {
		let tempArray = [];
		for(let i = 0; i < state.racerQ; i ++){
			tempArray.push((Math.random()*1)+1)
		}
		let obj = Object.assign({}, state, {runTimes:tempArray})
		return obj
	} else if(action.type === actions.START_RACE) {
		let obj = Object.assign({}, state, {
			racing:true, 
			racerStyle:{}, finishedRacers: 0})
		return obj
	} else if(action.type === actions.STOP_RACE) {
		state.finishedRacers ++;
		if(state.finishedRacers !== state.racerQ){
			return state;
		} else if (state.winner === undefined) {
			var winningIndex = state.runTimes.indexOf(Math.min(...state.runTimes));
			let obj = Object.assign({}, state, {
				resetButton: true, 
				winner: winningIndex})
			return obj
		}
	} else if(action.type === actions.RESET_RACE) {
		let obj = Object.assign({}, state, {
			racing:false,
			resetButton: false,
			winner:undefined,
			racerStyle:{left:0, right:'auto'}})
		return obj
	}
    return state;
};

export default raceReducer