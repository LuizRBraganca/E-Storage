import React, { useState, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import {
  ScreenAreaView,
  HeaderView,
  PageTitle,
  Input,
  ButtonsView,
  Button,
  ButtonsText,
} from './styles';

  function AddStorageScreen({ navigation }) {

  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [data_de_validade, setData_de_validade] = useState('');
  const [quantidade, setQuantidade] = useState(0);


   async function handleProductSubmit() {
     
    const token = await AsyncStorage.getItem('@token')

    const data = {
      nome: nome,
      marca: marca,
      data_de_validade: data_de_validade,
      quantidade: quantidade
    }
    api.post('/estoque/cadastro', data, {
      headers: { Authorization: token }
    }).then(function (response) {
      console.log(response.data);
      console.log(token);
      navigation.navigate('StorageScreen');

    }).catch(function (error) {
      console.log(error);
      alert(error.response.data.error);
    });
  }

  return (
    <ScreenAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
          <PageTitle>
            Insira os Dados Solicitados
          </PageTitle>
          <Input
            onChangeText={setNome}
            value={nome}
            placeholder="Nome do produto"
            placeholderTextColor="#4D5656FF"
            autoCapitalize='none'
            keyboardType='email-address'
          />
          <Input
            onChangeText={setMarca}
            value={marca}
            placeholder="Marca"
            placeholderTextColor="#4D5656FF"
            autoCapitalize='none'
          />
          <Input
            onChangeText={setData_de_validade}
            value={data_de_validade}
            placeholder="Validade"
            keyboardType='numeric'
            placeholderTextColor="#4D5656FF"
            autoCapitalize='none'
          />
          <Input
            onChangeText={setQuantidade}
            value={quantidade}
            keyboardType='numeric'
            placeholder="Quantidade"
            placeholderTextColor="#4D5656FF"
            autoCapitalize='none'
          />
        </HeaderView>

        <View style={{ height: '10%' }}>
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
              borderopRightRadius: 100,
              alignItems: 'center',
            }}></View>
        </View>
        <ButtonsView>
          <Button onPress={() => navigation.goBack()}>
            <ButtonsText>Voltar</ButtonsText>
          </Button>
          <Button onPress={() => handleProductSubmit()}>
            <ButtonsText>Confirmar</ButtonsText>
          </Button>
        </ButtonsView>
      </KeyboardAvoidingView>
    </ScreenAreaView>
  );
}

export default AddStorageScreen;