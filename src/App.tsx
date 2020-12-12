import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Header, Form, Modal } from './components';
import { HEADER_HEIGHT, windowHeight } from './constants';
import { hasInternetConnection } from './utils';
import { getSiteInfo } from './services/info';
import { initialSiteInfo } from './initial-site-info';

const App = () => {
  const [scrollViewMinHeight, setScrollViewMinHeight] = useState<number>(windowHeight);

  const [siteInfo, setSiteInfo] = useState<any>(initialSiteInfo);

  const [isShowConnectionAlert, setIsShowConnectionAlert] = useState(false);
  const showConnectionAlert = useCallback(() => setIsShowConnectionAlert(true), []);
  const hideConnectionAlert = useCallback(() => setIsShowConnectionAlert(false), []);

  useEffect(() => {
    const doFetch = async () => {
      try {
        const $siteInfo = await getSiteInfo();
        setSiteInfo($siteInfo);
      } catch (err) {

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

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingTop: HEADER_HEIGHT, minHeight: scrollViewMinHeight }}>
        <Header
          menuInfo={siteInfo.menuInfo}
          onRootLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setScrollViewMinHeight(height);
          }}
        />
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
