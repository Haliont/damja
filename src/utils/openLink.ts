import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Linking } from 'react-native';

export const openLink = async (link: string) => {
  try {
    InAppBrowser.open(link, {
      showTitle: true,
      enableUrlBarHiding: true,
      enableDefaultShare: true,
      forceCloseOnRedirection: true,
    }).then((result) => {
      // Alert.alert(JSON.stringify(result))
      console.log('open link result', result);
    })
  } catch (err) {
    console.log('open link err', err);
    Linking.openURL(link);
  }
};
