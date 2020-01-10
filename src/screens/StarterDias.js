/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  margin-top: 50px;
`;

const HeaderText = styled.Text`
  font-size: 15px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;
const NextButton = styled.Button``;
const BoldText = styled.Text`
  font-weidht: bold;
`;
const DaysArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NextButton = props => {
  const nextAction = () => {
    if (!props.navigation.state.params || !props.navigation.state.params.name) {
      alert('Você precisa de um nome!');
      return;
    }
    props.navigation.navigate('StarterDias');
  };

  return <Button title="Próximo" onPress={nextAction} />;
};

const Page = props => {
  const nextAction = () => {
    if (!props.name) {
      alert('Você precisa de um nome!');
      return;
    }
    props.navigation.navigate('StarterDias');
  };

  const changeTextName = t => {
    props.setName(t);
    props.navigation.setParams({name: t});
  };

  let firstName = props.name.split(' ')[0];

  return (
    <Container>
      <HeaderText>
        Opa <BoldText>{firstName}</BoldText>, Tude bem?
      </HeaderText>
      <HeaderText>
        Quais <BoldText>Dias da Semana</BoldText> você pretende treinar?
      </HeaderText>
      <DaysArea>
        <DefaultButton width={100} style={{marginBottom: 20}}>
          <Text>Segunda</Text>
        </DefaultButton>
        <DefaultButton width={100} style={{marginBottom: 20}}>
          <Text>Terça</Text>
        </DefaultButton>
        <DefaultButton width={100} style={{marginBottom: 20}}>
          <Text>Quarta</Text>
        </DefaultButton>
        <DefaultButton width={100} style={{marginBottom: 20}}>
          <Text>Quinta</Text>
        </DefaultButton>
        <DefaultButton width={100} style={{marginBottom: 20}}>
          <Text>Sexta</Text>
        </DefaultButton>
        <DefaultButton width={100} style={{marginBottom: 20}}>
          <Text>Sábado</Text>
        </DefaultButton>
        <DefaultButton width={100} style={{marginBottom: 20}}>
          <Text>Domingo</Text>
        </DefaultButton>
      </DaysArea>
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  return {
    title: '',
    headerRight: <NextButton navigation={navigation} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => setName(name, dispatch),
    reset: () => reset(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
