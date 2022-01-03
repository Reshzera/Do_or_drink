import styled from 'styled-components/native';

export const Title = styled.Text`
    color: ${props => props.color};
    font-size: 40px;
    font-family: BebasNeue;
`;
export const Header = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction:row;
    background: #181818;
    width:100%;
    height:10%;
    border-bottom-width: 1px;
    border-bottom-color: white;
`;
export const Headercotainer = styled.View`
    flex-direction: row;
`;

export const Buttonback = styled.TouchableOpacity`
    position: absolute;
    left: 10px;
    width: ${props => props.bakcbutton ? '100px':'0px'};
`;