import styled from 'styled-components/native';

//border-color: #00aa00;
//background: #1cff1c;
export const Container = styled.SafeAreaView`
    flex:1;
    background: ${props => props.color[1]};
    opacity: 1;
    border-radius: 10px;
    border-width: 5px;
    border-color: ${props => props.color[0]};
    align-items: center;
    justify-content: center;
`;
export const Title = styled.Text`
    font-family: BG;
    font-size: 50px;
    color: #fff;
    padding-top:30px;
    text-align: center;
`;
export const Animationcontainer = styled.View`
    width: 100%;
    height: 60%;
    justify-content: center;
    align-items: center;
`;
