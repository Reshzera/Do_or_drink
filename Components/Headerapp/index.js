import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import {Buttonback, Header, Headercotainer, Title } from './styles';

const Headerapp = ({backbutton, onPress}) => {
  return (
    <Header>
        <Buttonback bakcbutton={backbutton} onPress={onPress}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </Buttonback>
        <Headercotainer>
            <Title color={'#fff'}>Faça </Title>
            <Title color={'#4b4b4b'}>ou </Title>
            <Title color={'#fff'}>Beba</Title>
        </Headercotainer>
    </Header>
  )
}

export default Headerapp;