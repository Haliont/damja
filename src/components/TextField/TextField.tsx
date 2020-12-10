import React, { useState } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { TextInput, Text, View, TextStyle } from 'react-native';
import styles from './styles';

function TextField({
  input,
  label,
  placeholder,
  meta,
  disabled,
  ...props
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={styles.root}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        selectionColor="#fff"
        style={[styles.input, isFocused && styles.inputIsFocused]}
        value={input.value}
        onChangeText={input.onChange}
        onBlur={() => {
          input.onBlur();
          setIsFocused(false);
        }}
        onFocus={() => {
          input.onFocus();
          setIsFocused(true);
        }}
        editable={!disabled}
        {...props}
      />
      {(meta.touched && meta.error) && (
        <Text style={styles.error}>
          {meta.error}
        </Text>
      )}
    </View>
  );
}

export interface TextFieldProps extends FieldRenderProps<string, any> {
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  secureTextEntry?: boolean;
  numberOfLines?: number;
  showError?: boolean;
  autoFocus?: boolean;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: 'default' | 'done' | 'go' | 'next' | 'search' | 'send';
  blurOnSubmit?: boolean;
  onSubmitEditing?: (...args: any[]) => any;
  customStyles?: TextStyle | TextStyle[];
}

export default TextField;
