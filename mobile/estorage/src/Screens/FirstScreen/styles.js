import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ScreenAreaView = styled.ScrollView`
    flex: 1;
    background-color: #ffffff;
`;
export const HeaderView = styled(LinearGradient)`
    align-items: center;
    border-bottom-left-radius: 100px;
    
`;
export const ImageView = styled.View`
    margin-top: 40%;
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


export const ButtonsView = styled.View`
    background-color: #fff;
    align-items: center;
`;
export const LoginButton = styled.TouchableOpacity`
    padding-vertical: 20px;
    border-radius: 8px;
    background-color: #FF7A65;
    margin-bottom: 20px;
    min-width: 70%;
    align-items: center;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 3;
    };
    shadow-opacity: 0.29;
    shadow-radius: 4.65;
    elevation: 7;
`;
export const RegisterButton = styled.TouchableOpacity`
    padding-vertical: 20px;
    border-radius: 8px;
    background-color: #FFAC66;
    margin-bottom: 20px;
    min-width: 70%;
    align-items: center;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 3;
    };
    shadow-opacity: 0.29;
    shadow-radius: 4.65;
    elevation: 7;
`;
export const ButtonsText = styled.Text`
    font-size: 25px;
    color: #fff;
`;