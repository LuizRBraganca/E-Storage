import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function RegisterScreens({navigation}) {
  const [User, onChangeUser] = React.useState('');
  const [Password, onChangePassword] = React.useState('');

  return (
    <KeyboardAvoidingView
      style={{backgroundColor: '#fff', flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
        <LinearGradient
          colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}
          style={styles.Header}>
          <TouchableOpacity style={styles.GoBackButton}>
            <Text
              style={styles.GoBackButtonText}
              onPress={() => navigation.goBack()}>
              Voltar
            </Text>
          </TouchableOpacity>
          <View style={styles.Image}>
            <Text style={{fontWeight: 'bold', color: '#000', marginTop: '45%'}}>
              Icone
            </Text>
          </View>
          <TextInput
            style={styles.Input}
            onChangeText={onChangeUser}
            value={User}
            placeholder="Crie um nome de usuario"
          />
          <TextInput
            style={styles.Input}
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Insira o seu e-mail"
          />
          <TextInput
            style={styles.Input}
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Crie uma senha"
          />
          <TextInput
            style={styles.Input}
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Nome da rua"
          />
          <TextInput
            style={styles.Input}
            onChangeText={onChangePassword}
            value={Password}
            placeholder="CEP"
          />
          <TextInput
            style={styles.Input}
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Numero"
          />
          <TextInput
            style={styles.LastInput}
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Celular"
          />
        </LinearGradient>
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
          <View style={styles.ButtonsView}>
            <TouchableOpacity style={styles.LoginButton}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
  buttonText: {
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
