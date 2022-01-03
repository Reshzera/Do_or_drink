import React, {useRef, useState, useEffect} from 'react';

import { Container, CardContainer, Cardchallenge, Carddrink, ButtonContainer, Button, Buttonlabel} from './styles';
import Swiper from 'react-native-deck-swiper';
import {TouchableWithoutFeedback, View} from 'react-native';


import Modalswipe from '../../Components/Modalswipe/Modalswipe';
import Headerapp from '../../Components/Headerapp';
import { getData } from '../../datagames/AsyncStoreagefunc';


const Game = ({route, navigation}) => {
    const { gamename } = route.params;

    const [index, setindex] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isDare, setDare] = useState(false);
    const [value, setValue] = useState('value');
    const [Drink, setDrink] = useState('Beba 1 Shot');


    const getGame = async () => {
        const item = await getData('gamelist');
        const Gamecards = item.filter(game=>game.nome == gamename)[0].cartas;
        setValue(Gamecards)
      };

      useEffect(() => {
        getGame();
      }, []);

    const swipeR = () => {
        setModalVisible(!isModalVisible);
        setDare(true)
    }
    const swipeL = () => {
        setModalVisible(!isModalVisible);
        setDare(false)
        setDrink(gamedata[index].drink)
    }
    
    const deck = useRef()
    
      const gamedata = Array.from(value)

    const Card = ({card}) => (
        <CardContainer>
            <Cardchallenge>{card.do}</Cardchallenge>
            <Carddrink>ou {card.drink}</Carddrink>
        </CardContainer>
    )

  return (
      <Container>
          <Headerapp backbutton={true} onPress={()=>{navigation.goBack()}}/>
          <View style={{flex: 0.7}}>
                <Swiper
                ref = {deck}
                cardIndex = {index}
                onSwiped = {()=>{setindex((index+1)% (gamedata.length))}}
                cards = {gamedata}
                renderCard = {(card) => <Card card={card}/>}
                stackSize={3}
                stackSeparation={11}
                swipeBackCard
                onSwipedLeft={swipeL}
                onSwipedRight={swipeR}
                infinite
                disableBottomSwipe
                disableTopSwipe 
                backgroundColor={'transparent'}
                marginBottom={60}
                marginTop={20}
                cardHorizontalMargin={23}
                cardVerticalMargin={0}
                />
          </View>
          <ButtonContainer>
              <TouchableWithoutFeedback onPress={()=> deck.current.swipeLeft()}>
                  <Button color={'#ff3e3e'} border={'#b00000'}>
                      <Buttonlabel>BEBA</Buttonlabel>
                  </Button>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={()=> deck.current.swipeRight()}>
                  <Button color={'#26e151'} border={'#00aa00'}>
                      <Buttonlabel>FAÇA</Buttonlabel>
                  </Button>
              </TouchableWithoutFeedback>
          </ButtonContainer>
          <Modalswipe visible={isModalVisible} onClose ={()=> setModalVisible(false)} type={isDare} drink={Drink}/>
      </Container>
  )
}

export default Game;
