import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ScreenAreaView,
  HeaderView,
  UserView,
  WelcomeText,
  HeaderButtonsView,
  HeaderButtons,
  BottomView,
  ButtonsView,
  BottomButtons,
  SearchInput,
  ConfirmOrCancelView,
  ConfirmOrCancelButton,
  ConfirmOrCancelButtonText,
  ButtonsText,
  ButtonsTitle
} from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ProductsScreen({ navigation }) {
  const [produto, setProduto] = useState([]);
  const route = useRoute();
  const [token, setToken] = useState('');
  const [user, setUser] = useState([]);
  const columns = 3;

  const categoria = route.params.categoria;
  const categoriaNome = categoria.nome;

  

  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem('@token')
      const user = await AsyncStorage.getItem('@user')

      console.log(categoria)

      setToken(token);
      console.log(token);
      setUser(JSON.parse(user));

      api.get(`/produto/lista/${categoriaNome}`, {
        headers: { Authorization: token }
      }).then(function (response) {
        console.log(response.data);
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
          <WelcomeText>Bebidas</WelcomeText>
        </UserView>

        <SearchInput placeholder="Buscar..." placeholderTextColor="#4D5656FF" />
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
            borderTopRightRadius: 100,
          }}></View>
      </View>

      <BottomView>
      <FlatList
          data={produto}
          keyExtractor={produto => String(produto.nome)}
          showsVerticalScrollIndicator={false}
          numColumns={columns}
          renderItem={({ item }) => (
            <>
        
            <ButtonsView>
            <ButtonsTitle>{item.nome}</ButtonsTitle>
              <BottomButtons></BottomButtons>
            </ButtonsView></>
          )}
        />
        

      </BottomView>
    </ScreenAreaView>
  );
}

export default ProductsScreen;
