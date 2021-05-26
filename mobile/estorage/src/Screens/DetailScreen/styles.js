import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


export const ScreenAreaView = styled.SafeAreaView`
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
    font-size: 20px;
    flex-wrap: wrap;
    max-width: 70%;
    align-self: center;
    margin: 0px 10px 30px 10px;
`;
export const UserView = styled.View`
    align-self: center;
    flex-direction: row;
    margin-top: 15%;
    max-height: 60px;
`;
export const BottomView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 0px 0px 0px;
    justify-content: center;
`;
export const ButtonsView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100px;
    margin: 0px 10px 10px 1px;
    justify-content: center;
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
export const ListView = styled.View`
    width: 300px;
    height: 320px;
    background-color: #FFC695;
    border-radius: 10px;
    margin: 10px 10px 10px 10px;
    align-items: center;
`;
export const ListItemView = styled.View`
    width: 260px;
    height: 45px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 5%;
    justify-content: center;
`;
export const ListItemText = styled.Text`
    font-weight: bold;
    color: #4D5656FF;
    font-size: 20px;
    margin: 3%;
`;
export const ConfirmOrCancelView = styled.View`
  margin-bottom: 5%;
  flex-direction: row;
  margin-top: 5%;
  justify-content: center;
`;
export const ConfirmOrCancelButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    margin-horizontal: 20px;
    border-radius: 8px;
    background-color: #FF7A65;
    margin-bottom: 20px;
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
export const ConfirmOrCancelButtonText = styled.Text`
  font-size: 20px;
  color: #3f3f3f;
`;
export const SendButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    margin-horizontal: 20px;
    border-radius: 8px;
    background-color: #FF7A65;
    margin-bottom: 20px;
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
export const SendButtonText = styled.Text`
  font-size: 20px;
  color: #3f3f3f;
`;
export const QuantidadeInput = styled.TextInput`
    height: 40;
    margin-vertical: 15;
    margin-horizontal: 20;
    width: 15%;
    border-radius: 10;
    align-items: center;
    background-color: #fff;
    font-Size: 17px;
    padding-start: 15;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 3;
    };
    shadow-opacity: 0.29;
    shadow-radius: 4.65;
    elevation: 7;
    margin: 5px 10px 1px 1px;
`;
export const QuantidadeText = styled.Text`
    font-weight: bold;
    color: #4D5656FF;
    font-size: 20px;
    margin-top: 20%;
`;