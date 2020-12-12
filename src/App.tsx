import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Header, Form, Modal } from './components';
import { HEADER_HEIGHT } from './constants';
import { hasInternetConnection } from './utils';

const App = () => {
  const [isShowConnectionAlert, setIsShowConnectionAlert] = useState(false);
  const showConnectionAlert = useCallback(() => setIsShowConnectionAlert(true), []);
  const hideConnectionAlert = useCallback(() => setIsShowConnectionAlert(false), []);

  useEffect(() => {
    setTimeout(async () => {
      if (!(await hasInternetConnection())) {
        showConnectionAlert();
      }
    }, 2000);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}>
        <Header />
        <View style={{ paddingHorizontal: 15 }}>
          <Form showConnectionAlert={showConnectionAlert} />
        </View>
        <Modal
          text={'Siziň enjamyňyzy internet aragatnaşykdan kesilendir / Ваше устройство не подключено к интернету'}
          visible={isShowConnectionAlert}
          onClose={hideConnectionAlert}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
