import React from 'react';
import { Modal as ReactNativeModal, Text, View, TextStyle } from 'react-native';
import Button from '../Button';
import styles from './styles';

interface Props {
  text: string;
  visible: boolean;
  onClose?: () => void;
  textStyle?: TextStyle | TextStyle[];
  children?: React.ReactNode | React.ReactNode[];
}

function Modal({ text, textStyle, visible, onClose, children }: Props) {
  return (
    <ReactNativeModal
      animationType="fade"
      transparent={true}
      visible={visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.modalText, textStyle]}>
            {text}
          </Text>
          {onClose && <Button text="Ýapyň / Закрыть" onPress={onClose} />}
          {children}
        </View>
      </View>
    </ReactNativeModal>
  );
}

export default Modal;
