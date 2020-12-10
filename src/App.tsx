import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Header, Form, Modal } from './components';
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
      <ScrollView>
        <Modal
          text={'Siziň enjamyňyzy internet aragatnaşykdan kesilendir / Ваше устройство не подключено к интернету'}
          visible={isShowConnectionAlert}
          onClose={hideConnectionAlert}
        />
        <Header />
        <View style={{ paddingHorizontal: 15 }}>
          <Form showConnectionAlert={showConnectionAlert} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
