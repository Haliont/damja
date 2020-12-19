import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, LayoutChangeEvent, BackHandler } from 'react-native';
import Menu from './components/Menu';
import styles from './styles';
import Modal from '../Modal';
import Button from '../Button';
import { MenuItem } from '../../services/app-data';

interface Props {
  onRootLayout: (event: LayoutChangeEvent) => void;
  menuItems: Array<MenuItem>;
}

function Header({ onRootLayout, menuItems }: Props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenExitAppModal, setIsOpenExitAppModal] = useState(false);

  const renderBurgerButton = (
    <TouchableOpacity
      style={[
        styles.button,
        { marginRight: 10 }
      ]}
      onPress={() => {
        setIsOpenMenu((prev) => !prev);
      }}
    >
      <Image style={styles.burgerButtonIcon} source={require('./burger-lines.png')} />
    </TouchableOpacity>
  );

  const renderExitAppButton = (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setIsOpenExitAppModal(true)}
    >
      <Text style={{ color: 'white', fontWeight: 'bold' }}>X</Text>
    </TouchableOpacity>
  );

  const renderExitAppModal = (
    <Modal
      text="Programmany ýapmak isleýändigiňize ynanýarsyňyzmy? / Вы действительно хотите закрыть приложение?"
      visible={isOpenExitAppModal}
    >
      <View style={{ flexDirection: 'row' }}>
        <Button text=".Ok / Нет" onPress={() => setIsOpenExitAppModal(false)} style={{ marginRight: 10 }} />
        <Button text="Hawa / Да" onPress={() => BackHandler.exitApp()} />
      </View>
    </Modal>
  );

  return (
    <View style={styles.root} onLayout={onRootLayout}>
      {renderExitAppModal}
      <View style={styles.inner}>
        <Text style={styles.logo}>3-DAMJA</Text>
        <View style={{ flexDirection: 'row' }}>
          {renderBurgerButton}
          {renderExitAppButton}
        </View>
      </View>
      {isOpenMenu && <Menu menuItems={menuItems} />}
    </View>
  );
}

export default Header;
