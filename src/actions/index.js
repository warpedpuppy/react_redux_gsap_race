export const CREATE_RUN_TIMES = 'CREATE_RUN_TIMES';
export const START_RACE = 'START_RACE';
export const STOP_RACE = 'STOP_RACE';
export const RESET_RACE = 'RESET_RACE';


export const createRunTimes = title => ({
    type: CREATE_RUN_TIMES
});
export const startRace = title => ({
    type: START_RACE
});
export const stopRace = id => (
{
	type: STOP_RACE
});
export const resetRace = title => ({
    type: RESET_RACE
});
