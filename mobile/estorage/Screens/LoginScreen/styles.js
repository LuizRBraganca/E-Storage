import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ScreenAreaView = styled.ScrollView`
    flex: 1;
    background-color: #ffffff;
`;
export const GoBackButton = styled.TouchableOpacity`
    padding-vertical: 3%;
    border-radius: 8;
    align-items: flex-start;
    shadow-offset: {width: 5, height: 5};
    shadow-opacity: 0.3;
    align-self: flex-start;
    margin-top: 15%;
    margin-start: 8%;
`;
export const GoBackButtonText = styled.Text`
    fontSize: 20;
    color: #fff;
`;
export const HeaderView = styled(LinearGradient)`
    align-items: center;
    border-bottom-left-radius: 100px;
    
`;
export const ImageView = styled.View`
    margin-top: 18%;
    width: 100;
    height: 100;
    align-items: center;
    background-color: #fff;
    margin-bottom: 10%;
    border-radius: 7;
    border-radius: 100;
`;
export const ImageText = styled.Text`
    font-weight: bold;
    color: #000;
    margin-top: 45%;
`;
export const UserInput = styled.TextInput`
    height: 50;
    margin-vertical: 20;
    margin-horizontal: 20;
    width: 70%;
    border-radius: 10;
    align-items: center;
    background-color: #fff;
    fontSize: 23;
    padding-start: 15;
    shadow-offset: {width: 5, height: 5};
    shadow-opacity: 0.3;
`;
export const PasswordInput = styled.TextInput`
    height: 50;
    margin-bottom: 30;
    margin-horizontal: 20;
    width: 70%;
    border-radius: 10;
    align-items: center;
    background-color: #fff;
    fontSize: 23;
    padding-start: 15;
    shadow-offset: {width: 5, height: 5};
    shadow-opacity: 0.3;
`;
export const ButtonsView = styled.View`
    background-color: #fff;
    align-items: center;
`;
export const LoginButton = styled.TouchableOpacity`
    padding-vertical: 5%;
    border-radius: 8;
    background-color: #FF7A65;
    margin-bottom: 20;
    min-width: 70%;
    align-items: center;
    shadow-offset: {width: 5, height: 5};
    shadow-opacity: 0.3;
`; 
export const ButtonsText = styled.Text`
    font-size: 25px;
    color: #fff;
`;
