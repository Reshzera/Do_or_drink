import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background: #181818;
    flex:1;
`;

export const TitleContainer = styled.View`
    width:100%;
    padding-left: 10px;
    padding-right: 20px;
    padding-top: 10px;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    flex-direction: row;
`;
export const Title = styled.Text`
    font-size:30px;
    color: white;
    font-family:Oswald;
`;
export const GameContainer = styled.View`
    width: 95%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    height: 70px;
    box-shadow: 5px 6px 1px #575757;
    border-radius: 10px;
    background: white;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    align-items: center;
`;
export const TitleGame = styled.Text`
    font-size:30px;
    color: gray;
    font-family:BebasNeue;
`;
export const EditButtonsContainer = styled.View`
    width: ${props => props.notdelete};
`
export const ButtonGame = styled.TouchableOpacity`
    width: 90%;
    height: 100%;
    justify-content: center;
`;
