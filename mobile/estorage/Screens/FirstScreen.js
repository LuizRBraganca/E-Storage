import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function FirstScreen({ navigation }) {
  return (
    <View style={styles.all}>
      <LinearGradient
        colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}
        style={styles.Header}>
        <View style={styles.Image}>
          <Text style={{fontWeight: 'bold', color: '#000', marginTop: '45%'}}>
            Icone
          </Text>
        </View>
      </LinearGradient>

      <View style={{height: 200}}>
        <View
          style={{...StyleSheet.absoluteFillObject, backgroundColor: '#FFAC66'}}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            borderTopRightRadius: 100,
          }}></View>
      </View>

      <View style={styles.ButtonsView}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.LoginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.CadastroButton}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginTop: '40%',
    width: 150,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: '30%',
    height: 150,
    borderRadius: 7,
    borderRadius: 100,
  },
  ButtonsView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  LoginButton: {
    paddingHorizontal: 8,
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: '#FF7A65',
    marginHorizontal: '1%',
    marginBottom: '10%',
    minWidth: '70%',
    alignItems: 'center',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
  },
  CadastroButton: {
    paddingHorizontal: 8,
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: '#FFAC66',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '70%',
    alignItems: 'center',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',
  },
});
export default FirstScreen;
