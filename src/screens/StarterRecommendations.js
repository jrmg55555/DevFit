/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import workoutJson from '../presetWorkouts.json';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

const HeaderText = styled.Text`
  font-size: 15px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;
const NextButton = styled.Button``;
const WorkoutList = styled.FlatList`
  width: 100%;
`;

const Page = props => {
  useEffect(() => {
    props.navigation.setParams({myWorkouts: props.myWorkouts});
  }, [props.myWorkouts]);
  return (
    <Container>
      <HeaderText>
        Opções de treino pré-criados com base no seu Nível.
      </HeaderText>
      <HeaderText>Você selecionou {props.myWorkouts.length} treinos</HeaderText>
      <WorkoutList
        data={workoutJson}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  let btnNext = 'Ignorar';
  if (
    navigation.state.params &&
    navigation.state.params.myWorkouts.length > 0
  ) {
    btnNext = 'Concluir';
  }
  /* const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.level) {
      alert('Você precisa escolher uma opção!');
      return;
    }
    navigation.navigate('StarterRecommendations');
  }; */

  return {
    title: ' ',
    headerRight: () => <NextButton title={btnNext} onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    myWorkouts: state.userReducer.myWorkouts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLevel: level => dispatch({type: 'SET_LEVEL', payload: {level}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
