import React from 'react';
import { SafeAreaView, Modal, TouchableWithoutFeedback, View} from 'react-native';
import { Container, Title} from './styles';

const Modalswipe = (props) => {
    
  return(
      <SafeAreaView>
          <Modal
          visible={props.visible}
          animationType='fade'
          transparent={true}
          >
              <TouchableWithoutFeedback onPress={props.onClose}>
                  <Container color={props.type ? ['#00aa00','#26e151']:['#b00000','#ff3e3e']}>
                      <Title>{props.type ? "FAÇA O DESAFIO \n 🤪😎" : `${props.drink.toUpperCase()}` + '\n 🥳🍻'}</Title>
                  </Container>
              </TouchableWithoutFeedback>
          </Modal>
      </SafeAreaView>
  );
}

export default Modalswipe;

//