import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function LoginScreen({navigation}) {
  const [User, onChangeUser] = React.useState('');
  const [Password, onChangePassword] = React.useState('');

  return (
    <ScrollView style={styles.all}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <View>
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
              <Text
                style={{fontWeight: 'bold', color: '#000', marginTop: '45%'}}>
                Icone
              </Text>
            </View>
            <TextInput
              style={styles.Input}
              onChangeText={onChangeUser}
              value={User}
              placeholder="Usuario"
            />
            <TextInput
              style={styles.LastInput}
              onChangeText={onChangePassword}
              value={Password}
              placeholder="Senha"
            />
          </LinearGradient>

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
          <View style={styles.ButtonsView}>
            <TouchableOpacity style={styles.LoginButton}>
              <Text style={styles.buttonText}>Entar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
    marginTop: '18%',
    width: 100,
    height: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: '10%',
    borderRadius: 7,
    borderRadius: 100,
  },
  Input: {
    height: 50,
    margin: 20,
    width: '70%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    fontSize: 23,
    paddingStart: 15,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
  },
  LastInput: {
    height: 50,
    marginBottom: 40,
    width: '70%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    fontSize: 23,
    paddingStart: 15,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
  },
  ButtonsView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: '45%',
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

export default LoginScreen;
