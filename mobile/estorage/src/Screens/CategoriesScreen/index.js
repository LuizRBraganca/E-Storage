import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import {
  ScreenAreaView,
  HeaderView,
  ImageView,
  UserView,
  WelcomeText,
  HeaderButtonsView,
  HeaderButtons,
  BottomView,
  ButtonsView,
  BottomButtons,
  ButtonsTitle,
  SearchInput,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';


function CategoriesScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState([]);
  const columns = 3;

  function navigateToProdutos(categoria) {
    navigation.navigate('ProductsScreen', { categoria });
  }


  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem('@token')
      const user = await AsyncStorage.getItem('@user')

      setToken(token);
      console.log(token);
      setUser(JSON.parse(user));

      api.get('/categoria/lista', {
        headers: { Authorization: token }
      }).then(function (response) {
        console.log(response.data);
        setCategorias(response.data)

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
          <ImageView />

          <WelcomeText>Bem Vindo, Usuario</WelcomeText>
        </UserView>
        <HeaderButtonsView>
          <HeaderButtons
            onPress={() => navigation.navigate('MenuScreen')}>
            <Icon name="person" size={70} color="#F5B27A" /></HeaderButtons>
          <HeaderButtons
            onPress={() =>
              alert("Você já está na pagina")
            }>
            <Icon name="shopping-basket" size={70} color="#F5B27A" />
          </HeaderButtons>

          <HeaderButtons
            onPress={() =>
              navigation.navigate('DeliveryScreen')
            }>
            <Icon name="motorcycle" size={70} color="#F5B27A" />
          </HeaderButtons>
        </HeaderButtonsView>

        <SearchInput
          placeholder="Buscar..."
          placeholderTextColor="#4D5656FF"
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
            borderTopRightRadius: 100,
          }}></View>
      </View>
      <BottomView>
        <FlatList
          data={categorias}
          keyExtractor={categorias => String(categorias.nome)}
          showsVerticalScrollIndicator={false}
          numColumns={columns}
          renderItem={({ item: categorias }) => (
            <ButtonsView>
              <ButtonsTitle>{categorias.nome}</ButtonsTitle>
              <BottomButtons
                onPress={() => navigateToProdutos(categorias)}
              ></BottomButtons>

            </ButtonsView>

          )}
        />

      </BottomView>
    </ScreenAreaView>
  );
}

export default CategoriesScreen;