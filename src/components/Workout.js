/* eslint-disable react/self-closing-comp */
import React from 'react';
import styled from 'styled-components/native';

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
const MuscleScroll = styled.ScrollView``;
const WorkoutActions = styled.View``;
const WorkoutButton = styled.View``;
const WorkoutButtonImage = styled.Image``;

export default props => {
  return (
    <Workout>
      <WorkoutInfo>
        <WorkoutTitle>{props.data.name}</WorkoutTitle>
        <MuscleScroll horizontal={true}> </MuscleScroll>
      </WorkoutInfo>

      <WorkoutActions>
        <WorkoutButton>
          <WorkoutButtonImage />
        </WorkoutButton>
      </WorkoutActions>
    </Workout>
  );
};
