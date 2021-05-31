import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

function signIn() {
    api.post('/authenticate/cliente', {
      email,
      senha,
    }).then(async function (response) {
      console.log(response.data.user);
      console.log(response.data.token);
      const jsonValue = JSON.stringify(response.data.user);
      await AsyncStorage.setItem('@token', `Bearer ${response.data.token}`
      );
      await AsyncStorage.setItem('@user', jsonValue);
      navigation.navigate('MenuScreen');

    }).catch(function (error, response) {
      alert(error.response.data.error);
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
            placeholder="E-mail"
            placeholderTextColor="#4D5656FF"
            autoCapitalize='none'
            keyboardType='email-address'
          />
          <PasswordInput
            onChangeText={setSenha}
            value={senha}
            placeholder="Senha"
            placeholderTextColor="#4D5656FF"
            autoCapitalize='none'
            secureTextEntry={true}
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
          <LoginButton onPress={() => signIn()}>
            <ButtonsText >Entrar</ButtonsText>
          </LoginButton>
        </ButtonsView>
      </KeyboardAvoidingView>
    </ScreenAreaView>
  );
}

export default LoginScreen;