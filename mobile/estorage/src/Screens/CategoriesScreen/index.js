import React from 'react';
import {View, StyleSheet} from 'react-native';
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

function CategoriesScreen({navigation}) {
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
              <Icon name="person" size={70} color="#000" /></HeaderButtons>
          <HeaderButtons
            onPress={() =>
              alert("Ja esta na pagina")
            }>
              <Icon name="shopping-basket" size={70} color="#000" />
            </HeaderButtons>

          <HeaderButtons
            onPress={() =>
              navigation.navigate('DeliveryScreen')
            }>
              <Icon name="motorcycle" size={70} color="#000" />
            </HeaderButtons>
        </HeaderButtonsView>

        <SearchInput
            placeholder="Buscar..."
            placeholderTextColor="#4D5656FF"
          />

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
        <ButtonsView>
          <ButtonsTitle>Bebidas</ButtonsTitle>
          <BottomButtons
          onPress={() => navigation.navigate('ProductsScreen')}
          ></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Frios</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Hortifruti</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Limpeza</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Confeitaria</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Pescados</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

      </BottomView>
    </ScreenAreaView>
  );
}

export default CategoriesScreen;
