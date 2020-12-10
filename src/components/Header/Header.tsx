import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

function Header() {
  const renderBurgerButton = (
    <TouchableOpacity style={styles.burgerButton}>
      <Image style={styles.burgerButtonIcon} source={require('./burger-lines.png')} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <Text style={styles.logo}>3-DAMJA</Text>
      {renderBurgerButton}
    </View>
  );
}

export default Header;
