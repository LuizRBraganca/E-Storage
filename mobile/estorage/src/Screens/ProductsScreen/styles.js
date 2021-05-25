import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


export const ScreenAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
`;
export const HeaderView = styled(LinearGradient)`
    align-items: center;
    border-bottom-left-radius: 100px;
    height: 220px;
`;
export const WelcomeText = styled.Text`
    font-weight: bold;
    color: #fff;
    font-size: 20px;
    flex-wrap: wrap;
    max-width: 50%;
    align-self: center;
    margin-top: 20px;
`;
export const UserView = styled.View`
    align-self: flex-start;
    flex-direction: row;
    margin: 30px 20px 20px 140px;
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
    margin: 0px 10px 10px 5px;
    justify-content: center;
`;
export const ButtonsTitle = styled.Text`
    font-size: 17px;
    color: #000;
    margin-top: 1%;
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

export const ConfirmOrCancelView = styled.View`
  margin: 1px 40px 30px 35px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ConfirmOrCancelButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    margin-horizontal: 6%;
    border-radius: 8px;
    background-color: #FF7A65;
    margin: 1px 10px 10px 20px;
    align-items: center;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 3;
    };
    shadow-opacity: 0.29;
    shadow-radius: 4.65;
    elevation: 7;
    justify-content: center;
`;
export const ButtonsText = styled.Text`
  font-size: 20px;
  color: #000;
`;
export const ConfirmOrCancelButtonText = styled.Text`
  font-size: 17px;
  color: #3f3f3f;
`;
