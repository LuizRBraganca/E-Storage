import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import api from '../../services/api';
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

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [activity, setActivity] = useState(false);

  async function signIn() {
    console.log(email);
    console.log(senha);

    api.post('/authenticate/cliente', {
        email,
        senha,
    }).then(function (response) {
        console.log(response.data.user);
        console.log(response.data.token);
        navigation.goBack();
      }).catch(function (error) {
        console.log(error);
        alert('Email ou senha incorretos');
      });
  }

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
            onChangeText={setEmail}
            value={email}
            placeholder="Usuario"
            placeholderTextColor="#4D5656FF"
          />
          <PasswordInput
            onChangeText={setSenha}
            value={senha}
            placeholder="Senha"
            placeholderTextColor="#4D5656FF"
          />
        </HeaderView>

        <View style={{ height: '15%' }}>
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
            <ButtonsText onPress={() => signIn()}>Entrar</ButtonsText>
          </LoginButton>
        </ButtonsView>
      </KeyboardAvoidingView>
    </ScreenAreaView>
  );
}

export default LoginScreen;