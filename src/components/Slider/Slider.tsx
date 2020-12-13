import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

interface Props {
  imageUrls: Array<string>;
  autoplayTimeout?: number;
}

function Slider({ imageUrls, autoplayTimeout = 3 }: Props) {
  return (
    <View style={styles.root}>
      <Swiper
        autoplay
        autoplayTimeout={autoplayTimeout}
        showsPagination={false}
        showsButtons={false}
      >
        {imageUrls.map((imageUrl) => (
          <View key={imageUrl} style={styles.slide}>
            <Image source={{ uri: imageUrl }} style={styles.slideImg} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

export default Slider;
