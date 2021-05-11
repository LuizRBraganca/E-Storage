import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {
  ScreenAreaView,
  GoBackButton,
  GoBackButtonText,
  HeaderView,
  ImageView,
  ImageText,
  UserInput,
  PasswordInput,
  ButtonsView,
  LoginButton,
  ButtonsText,
} from './styles';

function LoginScreen({navigation}) {
  const [User, onChangeUser] = React.useState('');
  const [Password, onChangePassword] = React.useState('');

  return (
    <ScreenAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
          <GoBackButton>
            <GoBackButtonText onPress={() => navigation.goBack()}>
              Voltar
            </GoBackButtonText>
          </GoBackButton>
          <ImageView>
            <ImageText>Icone</ImageText>
          </ImageView>
          <UserInput
            onChangeText={onChangeUser}
            value={User}
            placeholder="Usuario"
            placeholderTextColor="#4D5656FF"
          />
          <PasswordInput
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Senha"
            placeholderTextColor="#4D5656FF"
          />
        </HeaderView>

        <View style={{height: '15%'}}>
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
              alignItems: 'center',
            }}></View>
        </View>
        <ButtonsView>
          <LoginButton>
            <ButtonsText>Entrar</ButtonsText>
          </LoginButton>
        </ButtonsView>
      </KeyboardAvoidingView>
    </ScreenAreaView>
  );
}

export default LoginScreen;
