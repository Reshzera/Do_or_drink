import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:4;
  background:#181818;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.Text`
    font-size:27px;
    color: white;
    font-family:Oswald;
`;
export const Containerform = styled.View`
  margin-top:20px;
  flex-direction: row;
  height: 8%;
  align-items: center;
`;
export const ContainerPicker = styled.View`
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
`;
export const Inputstyled = styled.TextInput`
  height: 100%;
  width: 70%;
  background: #fff;
  border-radius: 5px;
`;
export const Submitbutton = styled.TouchableOpacity`
  width: 70%;
  height: 50px;
  align-self: center;
  border-radius: 5px;
  margin-top: 40px;
  background: ${props => props.blue ? "#0080ff" : props.disabled ? "#acacac": "#008000"};
  justify-content: center;
  align-items: center;
  margin-bottom:20px;
`;
export const ContainerFlatlist = styled.View`
  background: #181818;
  margin-top: 20px;
  width: 100%;
  flex:1;
  padding-bottom: 10px;
  padding-left: 10px;
`;
export const CardContainer = styled.View`
  background: #111;
  border-radius: 15px;
  border-color: rgba(50,50,50,0.7);
  border-width:1.3px;
  align-items: flex-start;
  width: 120px;
  padding: 10px;
  margin-right: 10px;
`;
export const Textdo = styled.Text`
  color: #FFF;
  font-family: BebasNeue;
  font-size: 12px;
`;
export const Textdrink = styled.Text`
  color: #ff1111;
  font-family: BebasNeue;
  font-size: 12px;
  margin-top: 5px; 
`;
export const ButtonEdit = styled.TouchableOpacity`
  position: absolute;
  align-self: center;
  bottom: ${props => props.top ? "null" : "10px"};
  top: ${props => props.top ? "5px" : "null"};
  right: ${props => props.top ? "5px" : "null"};
  background: #111;
  align-items:center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  z-index: 3;
`;