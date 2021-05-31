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
  RegisterInput,
  LastInput,
  ButtonsView,
  RegisterButton,
  ButtonsText,
} from './styles';

function RegisterScreens({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [rua, setRua] = useState('');
  const [numeroRua, setNumeroRua] = useState('');
  const [complemento, setComplemento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  function signUp() {
    api.post('/cliente/cadastro', {
      nome,
      senha,
      rua,
      numeroRua,
      complemento,
      telefone,
      email
    }).then(async function (response) {
      console.log(response.data.user);
      console.log(response.data.token);
      const jsonValue = JSON.stringify(response.data.user);
      await AsyncStorage.setItem('@token', `Bearer ${response.data.token}`);
      await AsyncStorage.setItem('@user', jsonValue);
      navigation.navigate('MenuScreen');

    }).catch(function (error) {
      alert(error);
    });
  }



return (
  <KeyboardAvoidingView
    style={{ backgroundColor: '#fff', flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
    <ScreenAreaView>
      <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
        <GoBackButton>
          <GoBackButtonText onPress={() => navigation.goBack()}>
            Voltar
            </GoBackButtonText>
        </GoBackButton>
        <ImageView>
          <ImageText>Icone</ImageText>
        </ImageView>
        <RegisterInput
          onChangeText={setNome}
          value={nome}
          placeholder="Nome completo"
          placeholderTextColor="#4D5656FF"
        />
        <RegisterInput
          onChangeText={setEmail}
          value={email}
          placeholder="E-mail"
          placeholderTextColor="#4D5656FF"
        />
        <RegisterInput
          onChangeText={setTelefone}
          value={telefone}
          placeholder="Telefone"
          placeholderTextColor="#4D5656FF"
        />
        <RegisterInput
          onChangeText={setRua}
          value={rua}
          placeholder="Rua"
          placeholderTextColor="#4D5656FF"
        />
        <RegisterInput
          onChangeText={setNumeroRua}
          value={numeroRua}
          placeholder="Numero da rua"
          placeholderTextColor="#4D5656FF"
        />
        <RegisterInput
          onChangeText={setComplemento}
          value={complemento}
          placeholder="Complemento"
          placeholderTextColor="#4D5656FF"
        />
        <LastInput
          onChangeText={setSenha}
          value={senha}
          placeholder="Senha"
          placeholderTextColor="#4D5656FF"
        />
      </HeaderView>
      <View style={{ height: '30%' }}>
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

        <ButtonsView>
          <RegisterButton onPress={() => signUp()}>
            <ButtonsText>Cadastrar</ButtonsText>
          </RegisterButton>
        </ButtonsView>
      </View>
    </ScreenAreaView>
  </KeyboardAvoidingView>
);
 }

export default RegisterScreens;
