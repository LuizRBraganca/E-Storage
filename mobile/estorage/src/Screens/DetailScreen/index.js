import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ScreenAreaView,
  HeaderView,
  UserView,
  WelcomeText,
  BottomView,
  ListView,
  ListItemView,
  ListItemText,
  ButtonsView,
  ConfirmOrCancelButtonText,
  ConfirmOrCancelButton,
  SendButtonText,
  SendButton,
  ConfirmOrCancelView,
  QuantidadeInput,
  QuantidadeText,
} from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DetailScreen({navigation}) {
  const [produto, setProduto] = useState([]);
  const [quantidade, setQuantidade] = useState([]);
  const route = useRoute();
  const [token, setToken] = useState('');
  const [user, setUser] = useState([]);

  const categoria = route.params.categoria;
  const categoriaNome = categoria.nome;
  const oProduto = route.params.produto;
  const produtoNome = oProduto.nome;


  console.log(categoriaNome, oProduto);

  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem('@token')
      const user = await AsyncStorage.getItem('@user')

      setToken(token);
      
      setUser(JSON.parse(user));

      api.get(`/produto/${categoriaNome}/${produtoNome}`, {
        headers: { Authorization: token }
      }).then(function (response) {
        setProduto(response.data)

      }).catch(function (error) {
        //console.log(token);
        alert(error);
      });
    }

    loadStorageData();
    //console.log(token);


  }, []);


  return (
    <ScreenAreaView>
      <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
        <UserView>
          <WelcomeText>Detalhamento do produto</WelcomeText>
        </UserView>
      </HeaderView>

      <View style={{height: '10%'}}>
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
          }}></View>
      </View>
      <BottomView>
        <ListView>
          <ListItemView>
            <ListItemText>Nome: {produto.nome} </ListItemText>
          </ListItemView>
          <ListItemView>
            <ListItemText>Marca: {produto.marca} </ListItemText>
          </ListItemView>
          <ListItemView>
            <ListItemText>Medida: {produto.medida} </ListItemText>
          </ListItemView>
          <ListItemView>
            <ListItemText>Preço: {produto.preco} </ListItemText>
          </ListItemView>
          <ListItemView>
            <ListItemText>Detalhamento: {produto.detalhamento} </ListItemText>
          </ListItemView>
        </ListView>

        <ListItemText>Quantidade:</ListItemText>
        <QuantidadeInput
          onChangeText={setQuantidade}
          value={quantidade}
          placeholder="..."
          placeholderTextColor="#4D5656FF"
        /> 
  
      <ConfirmOrCancelView>
          <ButtonsView>
            <ConfirmOrCancelButton onPress={() => navigation.goBack()}>
              <ConfirmOrCancelButtonText>Voltar</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
          </ButtonsView>

          <ButtonsView>
            <SendButton>
              <SendButtonText>Adicionar</SendButtonText>
            </SendButton>
          </ButtonsView>
      </ConfirmOrCancelView>
      </BottomView>

    </ScreenAreaView>
  );
}

export default DetailScreen;
