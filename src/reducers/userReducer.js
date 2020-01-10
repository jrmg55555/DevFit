/* eslint-disable no-unreachable */
const initialState = {
  name: '',
  level: '', //beginner, intermediate, advanced
  workoutDays: [], // 0-6 (Semana começa no DOMINGO)
  myWorkouts: [],
  lastWorkout: '', //ID
  dailyProgress: ['2019-09-13', '2019-09-12'],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
      break;
  }
  return state;
};
