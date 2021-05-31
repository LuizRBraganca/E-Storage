import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ScreenAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
`;
export const PageTitle = styled.Text`
    font-size: 26px;
    margin-top: 11%;
    margin-bottom: 10%;
    color: white;
`;
export const HeaderView = styled(LinearGradient)`
    align-items: center;
    border-bottom-left-radius: 75px;
    height: 73%;
`;
export const Input = styled.TextInput`
    height: 11%;
    margin-top: 6%;
    margin-horizontal: 20px;
    width: 80%;
    color: black;
    border-radius: 5px;
    align-items: center;
    background-color: #fff;
    fontSize: 19px;
    padding-start: 15px;
    shadow-offset: {width: 5, height: 5};
    shadow-opacity: 0.3;
`;
export const ButtonsView = styled.View`
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;
export const Button = styled.TouchableOpacity`
    padding-vertical: 3%;
    margin-top: 12%;
    border-radius: 8px;
    background-color: #FF7A65;
    min-width: 40%;
    align-items: center;
    shadow-offset: {width: 5, height: 5};
    shadow-opacity: 0.3;
`; 
export const ButtonsText = styled.Text`
    font-size: 20px;
    color: #fff;
`;
