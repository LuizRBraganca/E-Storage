import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ScreenAreaView = styled.View`
    flex: 1;
    background-color: #ffffff;
`;
export const GoBackButton = styled.TouchableOpacity`
    padding-vertical: 3%;
    border-radius: 8px;
    align-items: flex-start;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 3;
    };
    shadow-opacity: 0.29;
    shadow-radius: 4.65;
    elevation: 7;
    align-self: flex-start;
    margin-top: 5%;
    margin-start: 8%;
`;
export const GoBackButtonText = styled.Text`
    fontSize: 20px;
    color: #fff;
`;
export const HeaderView = styled(LinearGradient)`
    align-items: center;
    border-bottom-left-radius: 100px;
    
`;
export const ImageView = styled.View`
    margin-top: 18%;
    width: 100px;
    height: 100px;
    align-items: center;
    background-color: #fff;
    margin-bottom: 10%;
    border-radius: 7px;
    border-radius: 100px;
`;
export const ImageText = styled.Text`
    font-weight: bold;
    color: #000;
    margin-top: 45%;
`;
export const UserInput = styled.TextInput`
    height: 12%;
    margin-vertical: 15px;
    margin-horizontal: 20px;
    width: 70%;
    color: black;
    border-radius: 10px;
    font-family: 'Questrial-Regular';
    align-items: center;
    background-color: #fff;
    fontSize: 21px;
    padding-start: 15px;
    shadow-offset: {width: 5; height: 5};
    shadow-opacity: 0.3;
`;
export const PasswordInput = styled.TextInput`
    height: 12%;
    margin-bottom: 5px;
    margin-horizontal: 20px;
    width: 70%;
    font-family: 'Questrial-Regular';
    color: black;
    border-radius: 10px;
    align-items: center;
    background-color: #fff;
    fontSize: 21px;
    padding-start: 15px;
    shadow-offset: {width: 5; height: 5};
    shadow-opacity: 0.3;
`;
export const ButtonsView = styled.View`
    background-color: #fff;
    align-items: center;
`;
export const LoginButton = styled.TouchableOpacity`
    padding-vertical: 5%;
    border-radius: 8px;
    background-color: #FF7A65;
    min-width: 70%;
    align-items: center;
    shadow-offset: {width: 5; height: 5};
    shadow-opacity: 0.3;
`; 
export const ButtonsText = styled.Text`
    font-size: 25px;
    color: #fff;
`;
