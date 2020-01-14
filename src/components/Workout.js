/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/native';
import useMuscleImage from '../components/useMuscleImage';

const Workout = styled.View`
  background-color: #f1f1f1;
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 2px solid #ddd;
`;
const WorkoutInfo = styled.View`
  flex: 1;
`;
const WorkoutTitle = styled.Text`
  font-size: 17px;
  margin: 10px;
`;
const MuscleScroll = styled.ScrollView`
  margin: 10px;
`;
const MuscleGroups = styled.View`
  width: 40px;
  height: 40px;
  background-color: #ffcc98;
  border-raius: 5px;
  margin-right: 5px;
  justify-content: center;
  align-items: Center;
`;
const MuscleImage = styled.Image`
  width: 30px;
  height: 30px;
`;
const WorkoutActions = styled.View`
  justify-content: center;
`;
const WorkoutButton = styled.View`
  width: 25px;
  height: 25px;
  margin: 20px;
  justify-content: Center;
  align-items: center;
`;
const WorkoutButtonImage = styled.Image`
  width: 25px;
  height: 25px;
`;

export default props => {
  let muscleGroups = [];
  for (let i in props.data.exercices) {
    if (!muscleGroups.includes(props.dataexercices[i].muscle)) {
      muscleGroups.push(props.data.exercices[i].muscle);
    }
  }

  return (
    <Workout>
      <WorkoutInfo>
        <WorkoutTitle>{props.data.name}</WorkoutTitle>
        <MuscleScroll horizontal={true}>
          {muscleGroups.map((m, index) => (
            <muscleGroups key={index}>
              <SourceImage source={useMuscleImage(m)} />
            </muscleGroups>
          ))}
        </MuscleScroll>
      </WorkoutInfo>

      <WorkoutActions>
        <WorkoutButton>
          <WorkoutButtonImage source={require('../assets/add.png')} />
        </WorkoutButton>
      </WorkoutActions>
    </Workout>
  );
};
