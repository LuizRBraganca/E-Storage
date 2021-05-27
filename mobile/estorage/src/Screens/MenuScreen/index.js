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
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MenuScreen({navigation}) {
  return (
    <ScreenAreaView>
      <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
        <UserView>
          <ImageView />

          <WelcomeText>Bem Vindo, Usuario</WelcomeText>
        </UserView>
        <HeaderButtonsView>
          <HeaderButtons
            onPress={() => alert("Ja esta na pagina")}>
              <Icon name="person" size={70} color="#000" />
          </HeaderButtons>
          
          <HeaderButtons
            onPress={() =>
              navigation.navigate('CategoriesScreen')}>
              <Icon name="shopping-basket" size={70} color="#000" />
            </HeaderButtons>

          <HeaderButtons
            onPress={() =>
              navigation.navigate('DeliveryScreen')}>
              <Icon name="motorcycle" size={70} color="#000" />
            </HeaderButtons>
        </HeaderButtonsView>
      </HeaderView>

      <View style={{height: '20%'}}>
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
          <ButtonsTitle>Lista</ButtonsTitle>
          <BottomButtons><Icon name="post-add" size={100} color="#000" /></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Historico</ButtonsTitle>
          <BottomButtons><Icon name="receipt" size={100} color="#000" /></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Estoque</ButtonsTitle>
          <BottomButtons><Icon name="storage" size={100} color="#000" /></BottomButtons>
        </ButtonsView>
      </BottomView>
    </ScreenAreaView>
  );
}

export default MenuScreen;
