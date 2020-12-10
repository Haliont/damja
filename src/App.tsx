import React, { useState, useEffect, useCallback } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { Alert, SafeAreaView, ScrollView, View } from 'react-native';
import { Header, Form } from './components';

const App = () => {
  const [isShowConnectionAlert, setIsShowConnectionAlert] = useState(false);
  const showConnectionAlert = useCallback(() => setIsShowConnectionAlert(true), []);
  const closeConnectionAlert = useCallback(() => setIsShowConnectionAlert(false), []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(connectionState => {
      const { isConnected } = connectionState;
      console.log('connectionState', connectionState);
      if (!isConnected) showConnectionAlert();
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isShowConnectionAlert) return;
    Alert.alert(
      'Отсутствует интернет соединение',
      '',
      [
        { text: 'Хорошо', onPress: closeConnectionAlert },
      ],
      { cancelable: false }
    );
  }, [isShowConnectionAlert]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View style={{ paddingHorizontal: 15 }}>
          <Form />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
