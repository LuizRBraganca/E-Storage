import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  ScreenAreaView,
  HeaderView,
  ImageView,
  ImageText,
  ButtonsView,
  LoginButton,
  RegisterButton,
  ButtonsText,
} from './styles';

function WelcomeScreen({navigation}) {
  return (
    <ScreenAreaView>
      <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
        <ImageView>
          <ImageText>Icone</ImageText>
        </ImageView>
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

      <ButtonsView>
        <LoginButton onPress={() => navigation.navigate('LoginScreen')}>
          <ButtonsText>Entrar</ButtonsText>
        </LoginButton>

        <RegisterButton onPress={() => navigation.navigate('RegisterScreen')}>
          <ButtonsText>Cadastro</ButtonsText>
        </RegisterButton>
      </ButtonsView>
    </ScreenAreaView>
  );
}

export default WelcomeScreen;
