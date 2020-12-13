import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <View style={styles.root}>
      <View style={styles.copyrightRoot}>
        <Text style={styles.copyrightText}>© 3-DAMJA 2019-{currentYear}</Text>
      </View>
    </View>
  );
}

export default Footer;
