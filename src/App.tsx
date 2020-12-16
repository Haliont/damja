import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Header, Form, Modal, Descriptions, Slider, Footer } from './components';
import { HEADER_HEIGHT, windowHeight } from './constants';
import { hasInternetConnection } from './utils';
import { getAppData, AppData } from './services/app-data';
import { initialAppData } from './initial-app-data';

const App = () => {
  const [scrollViewMinHeight, setScrollViewMinHeight] = useState<number>(windowHeight);

  const [appData, setAppData] = useState<AppData>(initialAppData);

  const [isShowConnectionAlert, setIsShowConnectionAlert] = useState(false);
  const showConnectionAlert = useCallback(() => setIsShowConnectionAlert(true), []);
  const hideConnectionAlert = useCallback(() => setIsShowConnectionAlert(false), []);

  useEffect(() => {
    const doFetch = async () => {
      try {
        const storedAppDataJSON = await AsyncStorage.getItem('appData');
        if (storedAppDataJSON) {
          setAppData(JSON.parse(storedAppDataJSON) as AppData);
        }
        const $appData = await getAppData();
        setAppData($appData);

        AsyncStorage.setItem('appData', JSON.stringify($appData));
      } catch (err) {
        console.log('err', err);
      }
    };
    doFetch();
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      if (!(await hasInternetConnection())) {
        showConnectionAlert();
      }
    }, 2000);
  }, []);

  const descriptionItemsLen = appData.descriptionItems.length;
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingTop: HEADER_HEIGHT, minHeight: scrollViewMinHeight }}>
        <Header
          menuItems={appData.menuItems}
          onRootLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setScrollViewMinHeight(height);
          }}
        />
        <View style={{ paddingHorizontal: 15 }}>
          <Form showConnectionAlert={showConnectionAlert} />
          {descriptionItemsLen > 0 && <Descriptions descriptionItems={appData.descriptionItems} />}
          {appData.sliderImageUrls.length > 0 && (
            <View style={{ paddingBottom: 40 }}>
              <Slider
                imageUrls={appData.sliderImageUrls}
                autoplayTimeout={4}
              />
            </View>
          )}
        </View>
        <Footer />
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
