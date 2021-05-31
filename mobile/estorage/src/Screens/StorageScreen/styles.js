import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


export const ScreenAreaView = styled.View`
    flex: 1;
    background-color: #ffffff;
`;
export const HeaderView = styled(LinearGradient)`
    align-items: center;
    border-bottom-left-radius: 80px;
    height: 30%;
`;
export const ImageView = styled.View`
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 7px;
    border-radius: 100px;
    margin-horizontal: 20px;
`;
export const WelcomeText = styled.Text`
    font-weight: bold;
    margin-top: 3%;
    color: #fff;
    font-size: 30px;
    flex-wrap: wrap;
    max-width: 50%;
    align-self: center;
`;
export const UserView = styled.View`
    align-self: center;
    flex-direction: row;
    margin-top: 5%;
    margin-bottom: 10%;
    max-height: 50px;
`;
export const BottomView = styled.View`
    flex-direction: column;
    margin: 0px 5px 20px;
    justify-content: center;
    align-items: center
`;
export const ButtonsView = styled.View`
    flex-direction: row;
    margin: 5%;
    margin-bottom: 10%;
    justify-content: center;
    align-items: center;
`;

export const SearchInput = styled.TextInput`
    height: 20%;
    margin-top: 5%;
    width: 70%;
    border-radius: 5px;
    align-items: center;
    background-color: #fff;
    font-size: 15px;
    padding-left: 10;
    shadow-offset: {
        width: 0;
        height: 3;
    };
`;
export const ListView = styled.FlatList`
    width: 80%;
    height: 35%;
    background-color: #FFC695;
    padding-top: 5%;
    border-radius: 10px;
    margin-horizontal: 10px;

`;
export const ListItemView = styled.View`
    flex-direction: row;
    width: 90%;
    height: 80%;
    background-color: #fff;
    border-radius: 5px;
    justify-content: space-evenly;
    align-self: center;
`;
export const ListItemViewEsq = styled.View`
    flex-direction: column;
    justify-content: space-evenly;
    width: 40%;
    align-items: flex-start;
`;
export const ListItemViewEDir = styled.View`
    flex-direction: column;
    justify-content: space-evenly;
    width: 40%;
    align-items: flex-end;
`;

export const ListItemText = styled.Text`
    color: #000;
    font-size: 14px;
`;
export const ConfirmOrCancelView = styled.View`
  width: 80%;
  height: 30%;
  flex-direction: row;
  justify-content: center;
`;
export const ConfirmOrCancelButton = styled.TouchableOpacity`
    width: 40%;
    height: 65%;
    margin-horizontal: 20px;
    border-radius: 8px;
    background-color: #FF7A65;
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
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;
export const AlertTitle = styled.Text`
    color: white;
`;