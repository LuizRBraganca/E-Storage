import React, { useState } from "react";
import {View, StyleSheet, Modal, Text, Pressable} from 'react-native';
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
  PopUp,
  PopUpView,
  ScanText,
  ConfirmOrCancelButton,
  ConfirmOrCancelButtonText,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MenuScreen({navigation}) {
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
        <ButtonsView>
          <ButtonsTitle>Scan</ButtonsTitle>
          <BottomButtons onPress={() => setModalVisible(true)}><Icon name="filter-center-focus" size={100} color="#000" /></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Lista</ButtonsTitle>
          <BottomButtons onPress={() => navigation.navigate('ListScreen')}
              ><Icon name="post-add" size={100} color="#000" /></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Historico</ButtonsTitle>
          <BottomButtons><Icon name="receipt" size={100} color="#000" /></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Estoque</ButtonsTitle>
          <BottomButtons onPress={() => navigation.navigate('StorageScreen')}><Icon name="storage" size={100} color="#000" /></BottomButtons>
        </ButtonsView>
      </BottomView>
    </ScreenAreaView>
  );
}

export default MenuScreen;
