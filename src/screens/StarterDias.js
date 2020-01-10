/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import DefaultButton from '../components/DefaultButton';

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
`;
const NextButton = styled.Button``;

const DaysArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Page = props => {
  const toggleDay = d => {
    let newWorkoutDays = [...props.workoutDays];

    if (!props.workoutDays.includes(d)) {
      //Inserir
      newWorkoutDays.push(d);
      props.setWorkoutDays(newWorkoutDays);
    } else {
      //Remover
      newWorkoutDays = newWorkoutDays.filter(i => i != d);
    }
    props.setWorkoutDays(newWorkoutDays);
  };

  let firstName = props.name.split(' ')[0];

  return (
    <Container>
      <HeaderText>
        Opa <Text style={{fontWeight: 'bold'}}>{firstName}</Text>, Tude bem?
      </HeaderText>
      <HeaderText>
        Quais <Text style={{fontWeight: 'bold'}}>Dias da Semana</Text> você
        pretende treinar?
      </HeaderText>
      <DaysArea>
        <DefaultButton
          bgcolor={props.workoutDays.includes(1) ? '#A5E8BC' : false}
          onPress={() => toggleDay(1)}
          width={100}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Segunda</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(2) ? '#A5E8BC' : false}
          onPress={() => toggleDay(2)}
          width={100}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Terça</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(3) ? '#A5E8BC' : false}
          onPress={() => toggleDay(3)}
          width={100}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Quarta</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(4) ? '#A5E8BC' : false}
          onPress={() => toggleDay(4)}
          width={100}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Quinta</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(5) ? '#A5E8BC' : false}
          onPress={() => toggleDay(5)}
          width={100}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Sexta</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(6) ? '#A5E8BC' : false}
          onPress={() => toggleDay(6)}
          width={100}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Sábado</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(0) ? '#A5E8BC' : false}
          onPress={() => toggleDay(0)}
          width={100}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Domingo</Text>
        </DefaultButton>
      </DaysArea>
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (
      !navigation.state.params ||
      !navigation.state.params.workoutDays.length
    ) {
      alert('Você precisa treinar pelo menos 1 dia!');
      return;
    }
    navigation.navigate('StarterNivel');
  };

  return {
    title: '',
    headerRight: () => <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
    setWorkoutDays: workoutDays =>
      dispatch({type: 'SET_WORKOUTDAYS', payload: {workoutDays}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
