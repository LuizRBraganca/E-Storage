import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
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

function RegisterScreens({navigation}) {
  const [User, onChangeUser] = React.useState('');
  const [Password, onChangePassword] = React.useState('');

  return (
    <KeyboardAvoidingView
      style={{backgroundColor: '#fff', flex: 1}}
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
            onChangeText={onChangeUser}
            value={User}
            placeholder="Crie um nome de usuario"
            placeholderTextColor="#4D5656FF"
          />
          <RegisterInput
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Insira o seu e-mail"
            placeholderTextColor="#4D5656FF"
          />
          <RegisterInput
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Crie uma senha"
            placeholderTextColor="#4D5656FF"
          />
          <RegisterInput
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Nome da rua"
            placeholderTextColor="#4D5656FF"
          />
          <RegisterInput
            onChangeText={onChangePassword}
            value={Password}
            placeholder="CEP"
            placeholderTextColor="#4D5656FF"
          />
          <RegisterInput
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Numero"
            placeholderTextColor="#4D5656FF"
          />
          <LastInput
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Celular"
            placeholderTextColor="#4D5656FF"
          />
        </HeaderView>
        <View style={{height: '30%'}}>
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
            <RegisterButton>
              <ButtonsText>Cadastrar</ButtonsText>
            </RegisterButton>
          </ButtonsView>
        </View>
      </ScreenAreaView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  Header: {
    alignItems: 'center',
    borderBottomLeftRadius: 100,
  },
  Image: {
    width: 100,
    height: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: '5%',
    borderRadius: 7,
    borderRadius: 100,
  },
  Input: {
    height: 40,
    margin: 15,
    width: '70%',
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 20,
    paddingStart: 15,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
  },
  LastInput: {
    height: 40,
    margin: 15,
    width: '70%',
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 20,
    paddingStart: 15,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
    marginBottom: '10%',
  },
  ButtonsView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: '35%',
  },
  LoginButton: {
    paddingVertical: '3%',
    borderRadius: 8,
    backgroundColor: '#FF7A65',
    minWidth: '60%',
    alignItems: 'center',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
  },
  ButtonText: {
    fontSize: 25,
    color: '#fff',
  },
  GoBackButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  GoBackButton: {
    paddingVertical: '3%',
    borderRadius: 8,
    alignItems: 'flex-start',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
    alignSelf: 'flex-start',
    marginTop: '15%',
    marginStart: '8%',
  },
});

export default RegisterScreens;
