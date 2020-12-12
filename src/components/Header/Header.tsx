import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Menu from './components/Menu';
import styles from './styles';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const renderBurgerButton = (
    <TouchableOpacity
      style={styles.burgerButton}
      onPress={() => {
        setIsOpenMenu((prev) => !prev);
      }}
    >
      <Image style={styles.burgerButtonIcon} source={require('./burger-lines.png')} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <View style={styles.inner}>
        <Text style={styles.logo}>3-DAMJA</Text>
        {renderBurgerButton}
      </View>
      {isOpenMenu && <Menu />}
    </View>
  );
}

export default Header;
