import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background: #181818;
    flex: 1;
    flex-direction: column;
`;
export const CardContainer = styled.View`
    flex:0.75;
    background: #111;
    border-radius: 30px;
    border-color: rgba(50,50,50,0.7);
    border-width:1.3px;
    align-items: flex-start;
    padding: 20px;
`;
export const Cardchallenge =  styled.Text`
    color: #FFF;
    font-family: BebasNeue;
    font-size: 35px;
`;
export const Carddrink =  styled.Text`
    color: #ff1111;
    font-family: BebasNeue;
    font-size: 35px;
    margin-top:5px;
`;
export const ButtonContainer = styled.View`
    position: absolute;
    width: 95%;
    align-self: center;
    height: 100px;
    bottom: 1%;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;

`;
export const Button = styled.View`
    width: 47%;
    height: 65px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    border-color: ${props => props.border};
    border-width: 4px;
    background: ${props => props.color};
`;
export const Buttonlabel = styled.Text`
    font-size: 50px;
    font-family: BebasNeue;
    color: white;
`;
