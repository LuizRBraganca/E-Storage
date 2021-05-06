import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  ScreenAreaView,
  HeaderView,
  ImageView,
  UserView,
  WelcomeText,
  HeaderButtonsView,
  HeaderButtons,
  BottomView,
  ButtonsView,
  BottomButtons,
  ButtonsTitle,
} from './styles';

function ProfileScreen({navigation}) {
  return (
    <ScreenAreaView>
      <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
        <UserView>
          <ImageView />

          <WelcomeText>Bem Vindo,Usuario</WelcomeText>
        </UserView>
        <HeaderButtonsView>
          <HeaderButtons
            onPress={() => alert("Ja esta na pagina")}>
          </HeaderButtons>

          <HeaderButtons
            onPress={() =>
              navigation.navigate('')
            }></HeaderButtons>

          <HeaderButtons
            onPress={() =>
              navigation.navigate('DeliveryScreen')
            }></HeaderButtons>
        </HeaderButtonsView>
      </HeaderView>

      <View style={{height: '20%'}}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#FFAC66',
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            borderTopRightRadius: 100,
          }}></View>
      </View>
      <BottomView>
        <ButtonsView>
          <ButtonsTitle>Scan</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Lista</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Historico</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Estoque</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>
      </BottomView>
    </ScreenAreaView>
  );
}

export default ProfileScreen;
