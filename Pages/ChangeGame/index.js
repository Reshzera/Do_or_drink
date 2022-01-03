import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Container, Title, TitleContainer, GameContainer, TitleGame, EditButtonsContainer, ButtonGame } from './styles';
import { useIsFocused } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


import Headerapp from '../../Components/Headerapp';
import { getData, storeData } from '../../datagames/AsyncStoreagefunc';



const ChangeGame = ({navigation}) => {
  
  //getAsyncsotrageValue
  const [value, setValue] = useState('value');
  const isFocused = useIsFocused();
  
  const getlist = async () => {
    const item = await getData('gamelist');
    setValue(item)
  };

  const removegame = async (index) => {
    const item = await getData('gamelist');
    const removed = item.slice(0, index).concat(item.slice(index + 1))
    storeData('gamelist', removed);
    setValue(removed)
  };


  //loadlist
  useEffect(() => {
    getlist();
  }, [isFocused]);

  //rederitem
  const Gamelist = ({name , index}) => (
    <GameContainer>
      <ButtonGame onPress={() =>{navigation.navigate("Game", {gamename: name})}}>
        <TitleGame>{name}</TitleGame>
      </ButtonGame>
      <EditButtonsContainer notdelete={index < 1 ? "0%":"7%"}>
        <TouchableOpacity onPress={()=>removegame(index )}>
          <FontAwesome name="trash-o" size={25} color="red" />
        </TouchableOpacity>
      </EditButtonsContainer>
    </GameContainer>
  )

  return (
    <Container>
      <Headerapp backbutton={false}/>
      <TitleContainer>
        <Title>Escolha um Baralho:</Title>
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate('AddGame')}}>
        <AntDesign name="pluscircle" size={30} color="white" />
        </TouchableWithoutFeedback>
      </TitleContainer>
      <FlatList
      data={value}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index})=> <Gamelist name={item.nome} index={index}/>}
      />
    </Container>
  )
}

export default ChangeGame;