import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ScreenAreaView = styled.ScrollView`
    flex: 1;
    background-color: #ffffff;
`;
export const HeaderView = styled(LinearGradient)`
    align-items: center;
    border-bottom-left-radius: 80;
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
    margin-top: 7%;
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
    justify-content: center;
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
    margin-bottom: 26%;
    justify-content: center;
`;
export const ButtonsView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 30%;
    margin-horizontal: 10%;
    align-items: center;
    justify-content: center;
`;
export const BottomButtons = styled.TouchableOpacity`
    width: 110px;
    height: 110px;
    margin-bottom: 30%;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 3;
    };
    shadow-opacity: 0.29;
    shadow-radius: 4.65;
    elevation: 7;
`; 
export const ButtonsTitle = styled.Text`
    font-size: 26px;
    color: #000;
`;

export const PopUp = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;
export const PopUpView = styled.View`
    width: 310px;
    height: 210px;
    backgroundColor: #FFC695;
    borderRadius: 20px;
    alignItems: center;
    shadowColor: #000;
    shadowOffset: {
    width: 0,
    height: 2
    };
    shadowOpacity: 0.25;
    shadowRadius: 4px;
    elevation: 5;
`;
export const ScanText = styled.Text`
    font-size: 26px;
    color: #000;
    margin-bottom: 40px;
    
`;
export const ConfirmOrCancelButton = styled.Pressable`
    width: 130px;
    height: 40px;
    margin-horizontal: 6%;
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
  font-size: 24px;
  color: #3f3f3f;
`;