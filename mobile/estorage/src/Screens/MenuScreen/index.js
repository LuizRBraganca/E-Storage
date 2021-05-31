import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Pressable } from 'react-native';
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
  ButtonsTitle,
  TopButtonView,
  BotButtonView,
  TextButtonView,
  PopUp,
  PopUpView,
  ScanText,
  ConfirmOrCancelButton,
  ConfirmOrCancelButtonText,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MenuScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState('');

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
            <Icon name="person" size={65} color="#F5B27A" />
          </HeaderButtons>

          <HeaderButtons
            onPress={() =>
              navigation.navigate('CategoriesScreen')}>
            <Icon name="shopping-basket" size={55} color="#F5B27A" />
          </HeaderButtons>

          <HeaderButtons
            onPress={() =>
              navigation.navigate('DeliveryScreen')}>
            <Icon name="motorcycle" size={65} color="#F5B27A" />
          </HeaderButtons>
        </HeaderButtonsView>
      </HeaderView>

      <View style={{ height: '5%' }}>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <PopUp>
          <PopUpView>
            <ScanText>
              Scan fora de funcionamento temporariamente
              </ScanText>

            <ConfirmOrCancelButton onPress={() => setModalVisible(!modalVisible)}>
              <ConfirmOrCancelButtonText>Aceitar</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>

          </PopUpView>
        </PopUp>
      </Modal>
      <BottomView>

        <ButtonsView onPress={() => navigation.navigate('ListScreen')}>
          <TopButtonView>
            <Icon name="post-add" size={50} color="#F5B27A" />
            <ButtonsTitle>Lista</ButtonsTitle>
          </TopButtonView>
          <BotButtonView>
            <TextButtonView>
              Ajuste sua lista de compras para realizar seus pedidos de maneira prática e rápida.
            </TextButtonView>
          </BotButtonView>
        </ButtonsView>

        <ButtonsView onPress={() => navigation.navigate('HistoryScreen')}>
          <TopButtonView> 
            <Icon name="receipt" size={45} color="#F5B27A" />
            <ButtonsTitle>Histórico</ButtonsTitle>
          </TopButtonView>
          <BotButtonView>
            <TextButtonView>
              Verifique suas listas de compras passadas para manter suas contas sempre na ponta do lápis.
            </TextButtonView>
          </BotButtonView>
        </ButtonsView>

        <ButtonsView onPress={() => navigation.navigate('StorageScreen')}>
          <TopButtonView> 
            <Icon name="storage" size={45} color="#F5B27A" />
            <ButtonsTitle>Despensa</ButtonsTitle>
          </TopButtonView>
          <BotButtonView>
            <TextButtonView>
              Adicione os produtos que você comprou no supermercado para ter um controle facilitado do seu estoque.
            </TextButtonView>
          </BotButtonView>
        </ButtonsView>
      </BottomView>
    </ScreenAreaView>
  );
}

export default MenuScreen;
