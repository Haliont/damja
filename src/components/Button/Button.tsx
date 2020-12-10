import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

function Button({ text, loading = false, disabled = false, onPress }: Props) {
  const handlePress = () => {
    if (disabled) return;
    onPress();
  };

  return (
    <TouchableOpacity style={styles.root} onPress={handlePress}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
