import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, LayoutChangeEvent } from 'react-native';
import Menu from './components/Menu';
import styles from './styles';

interface Props {
  onRootLayout: (event: LayoutChangeEvent) => void;
  menuInfo: any;
}

function Header({ onRootLayout, menuInfo }: Props) {
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
    <View style={styles.root} onLayout={onRootLayout}>
      <View style={styles.inner}>
        <Text style={styles.logo}>3-DAMJA</Text>
        {renderBurgerButton}
      </View>
      {isOpenMenu && <Menu menuInfo={menuInfo} />}
    </View>
  );
}

export default Header;
