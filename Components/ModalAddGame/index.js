import React, { useState } from 'react';
import { SafeAreaView, Modal, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import { Submitbutton } from '../../Pages/AddGame/styles';
import { Container, InputText, Labelbutton, Title} from './styles';

const ModalAddGame = (props) => {
    const [isVisible, setisVisible] =useState(true)
    const [Name, SetName] =useState(null)
    const Handlesubmit = () => {
        if (Name == null || Name==""){
            Alert.alert("Preencha o Nome", "O nome do jogo é obrigatório para prosseguir.")
        }else{
            setisVisible(false);
            props.passName(Name);
        }
    }
  return(
        <SafeAreaView>
            <Modal
            visible={isVisible}
            animationType='slide'
            transparent={true}
            >
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                    <Container>
                        <Title>Escolha um nome para seu jogo: </Title>
                        <InputText
                        onChangeText={SetName}
                        value={Name}
                        maxLength = {20}
                        autoFocus
                        onSubmitEditing={Handlesubmit}
                        autoCorrect={false}
                        />
                        <Submitbutton onPress={()=>{Handlesubmit()}} blue><Labelbutton>Avançar</Labelbutton></Submitbutton>
                    </Container>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
  );
}

export default ModalAddGame;