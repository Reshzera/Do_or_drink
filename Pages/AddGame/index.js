import React, {useState, useRef, useEffect} from 'react';
import { Container, Title, Containerform, Inputstyled, ContainerPicker, Submitbutton, ContainerFlatlist, CardContainer, Textdo, Textdrink, ButtonEdit} from './styles';
import Headerapp from '../../Components/Headerapp';
import {Keyboard, Alert, FlatList} from 'react-native';
import ModalAddGame from '../../Components/ModalAddGame';
import { FontAwesome } from '@expo/vector-icons';
import { getData, storeData } from '../../datagames/AsyncStoreagefunc';

const AddGame = ({navigation}) => {

  const [Do, setDo] = useState(null);
  const [Drink, setDrink] = useState(null);
  const [Name, SetName] = useState(null);
  const [Cartas, setCartas] = useState([])
  const [submit, setsubmit] = useState(true)

  const NewGame = {
    nome: Name,
    cartas: Cartas,
  }
  const ref_input2 = useRef()
  
  const conditional = () => {
    if (Cartas.length >= 5){
      setsubmit(false)
    }else{
      setsubmit(true)
    }
  }

  const SubmitHandle = () => {
    if(Do !=null && Drink != null && Do !="" && Drink != "" ){
        setCartas([...Cartas, {do: Do, drink: Drink,}]);
        setDo(null);
        setDrink(null);
        Keyboard.dismiss();
        conditional();
      }else{
        Alert.alert("Preencha Todos os Campos", "Todos os Campos são obrigatórios para prosseguir.")
      }
  }

  const AddGame = async() => {
    const item = await getData('gamelist');
    item.push(NewGame)
    storeData('gamelist', item);
    navigation.navigate('ChangeGame')
  }


  const remove = (index) => {
      const removed = Cartas.slice(0, index).concat(Cartas.slice(index + 1))
      setCartas(removed)

  }
  const Edit = (index, dolist, drinklist) => {
      setDrink(drinklist)
      setDo(dolist)
      const removed = Cartas.slice(0, index).concat(Cartas.slice(index + 1))
      setCartas(removed)
  }

  const Cardlist = ({dolist, drinklist, index}) => (
      <CardContainer>
        <Textdo>{dolist}</Textdo>
        <Textdrink>{drinklist}</Textdrink>
          <ButtonEdit onPress={()=>{Edit(index, dolist, drinklist)}} top>
            <FontAwesome name="edit" size={20} color="#4040ff" />
          </ButtonEdit>
          <ButtonEdit onPress={()=>{{remove(index)}}}>
            <FontAwesome name="trash-o" size={20} color="red"/>
          </ButtonEdit>
      </CardContainer>
  );

  useEffect(() => {
    conditional();
  }, [Cartas]);

  return (
        <Container>
          <Headerapp backbutton={true} onPress={()=>{navigation.goBack()}}/>
          <Containerform>
            <Title>Desafio: </Title>
              <Inputstyled
              onChangeText={setDo}
              value={Do}
              maxLength = {140}
              keyboardAppearance='dark'
              onSubmitEditing={() => ref_input2.current.focus()}
              autoCorrect={false}
              />
          </Containerform>
          <Containerform>
            <Title>Punição: </Title>
              <Inputstyled
              onChangeText={setDrink}
              value={Drink}
              maxLength = {35}
              keyboardAppearance='dark'
              onSubmitEditing={SubmitHandle}
              autoCorrect={false}
              ref ={ref_input2}
              />
          </Containerform>
          <Submitbutton onPress={()=>{SubmitHandle()}} blue>
            <Title>Adicionar Carta</Title>
          </Submitbutton>
          <Title>Cartas: {Cartas.length}</Title>
          <ContainerFlatlist>
            <FlatList
              data={Cartas}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index})=> <Cardlist drinklist={item.drink} dolist={item.do} index={index}/>}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              />
          </ContainerFlatlist>
          <ContainerPicker>
            <Submitbutton onPress={()=>{AddGame()}} disabled={submit}>
              <Title>Finalizar</Title>
            </Submitbutton>
          </ContainerPicker>
          <ModalAddGame passName={value=>SetName(value)}/>
        </Container>
  );
}
export default AddGame;


