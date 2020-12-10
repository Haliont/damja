import NetInfo from "@react-native-community/netinfo";

export const hasInternetConnection = () =>
  NetInfo.fetch().then(({ isConnected }) => isConnected);
