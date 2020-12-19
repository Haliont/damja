import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, ViewStyle } from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  style?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

function Button({ style, text, loading = false, disabled = false, onPress }: Props) {
  const handlePress = () => {
    if (disabled) return;
    onPress();
  };

  return (
    <TouchableOpacity style={[styles.root, style]} onPress={handlePress}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
