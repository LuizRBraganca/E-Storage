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
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 7px;
    border-radius: 100px;
    margin-horizontal: 10px;
`;
export const WelcomeText = styled.Text`
    font-weight: bold;
    color: #fff;
    font-size: 18px;
    flex-wrap: wrap;
    max-width: 50%;
    align-self: center;
`;
export const UserView = styled.View`
    align-self: flex-start;
    flex-direction: row;
    margin-top: 10%;
    max-height: 60px;
`;
export const HeaderButtonsView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10%;
`;
export const HeaderButtons = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    margin-horizontal: 10px;
    margin-bottom: 20%;
    border-radius: 8px;
    background-color: #fff;
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
export const BottomView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 5px 20px;
    justify-content: center;
`;
export const ButtonsView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100px;
    margin: 0px 10px 10px 1px;
    justify-content: center;
`;
export const BottomButtons = styled.TouchableOpacity`
background-color: #f5f5f5;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 3;
    };
    shadow-opacity: 0.29;
    shadow-radius: 4.65;
    elevation: 7;
    width: 90px;
    height: 90px;
    margin: 10px 1px 10px 5px;
    border-radius: 8px;
`;
export const ButtonsTitle = styled.Text`
    font-size: 17px;
    color: #000;
    margin-top: 1%;
`;
export const SearchInput = styled.TextInput`
    height: 40;
    margin-bottom: 7%;
    margin-top: 1%;
    width: 70%;
    border-radius: 10;
    align-items: center;
    background-color: #fff;
    font-size: 15;
    padding-left: 15;
    shadow-offset: {
        width: 0;
        height: 3;
    };
`;

