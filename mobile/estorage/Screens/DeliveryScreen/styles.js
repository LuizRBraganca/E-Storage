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
  font-size: 20px;
  flex-wrap: wrap;
  max-width: 45%;
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
    shadow-offset: {width: 5, height: 5};
    shadow-opacity: 0.3;
`;
export const BottomView = styled.View`
  margin-bottom: 50%;
  align-items: center;
`;
export const ButtonsView = styled.View`
  align-items: center;
`;
export const AdressButtons = styled.TouchableOpacity`
    width: 310px;
    height: 140px;
    margin-bottom: 10%;
    border-radius: 8px;
    background-color: #e9e9e9;
    shadow-offset: {width: 5, height: 5};
    shadow-opacity: 0.3;
    align-items: center;
`;
export const PaymentButtons = styled.TouchableOpacity`
    width: 310px;
    height: 110px;
    margin-bottom: 20%;
    border-radius: 8px;
    background-color: #e9e9e9;
    shadow-offset: {width: 5, height: 5};
    shadow-opacity: 0.3;
    align-items: center;
`;
export const ConfirmOrCancelView = styled.View`
  margin-bottom: 10%;
  flex-direction: row;
`;
export const ConfirmOrCancelButton = styled.TouchableOpacity`
    width: 130px;
    height: 40px;
    margin-horizontal: 6%;
    border-radius: 8px;
    background-color: #FF7A65;
    margin-bottom: 20px;
    align-items: center;
    shadow-offset: {width: 5, height: 5};
    shadow-opacity: 0.3;
    justify-content: center;
`;
export const ButtonsText = styled.Text`
  font-size: 26px;
  color: #000;
`;
export const ConfirmOrCancelButtonText = styled.Text`
  font-size: 24px;
  color: #3f3f3f;
`;
