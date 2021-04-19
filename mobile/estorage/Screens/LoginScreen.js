import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function LoginScreen() {

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

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
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Usuario"
          />
        </View>
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
    borderRadius: 100,
  },
  input: {
    height: 40,
    margin: 12,
    width: '70%',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default LoginScreen;
