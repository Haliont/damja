import React from 'react';
import { View } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { CachedImage } from 'react-native-cached-image';
import Swiper from 'react-native-swiper';
import styles from './styles';

interface Props {
  imageUrls: Array<string>;
  autoplayTimeout?: number;
}

function Slider({ imageUrls, autoplayTimeout = 3 }: Props) {
  const {
    window: {
      width: windowWidth,
      height: windowHeight,
    }
  } = useDimensions();
  const isLandscape = windowWidth > windowHeight;

  const LANDSCAPE_IMAGE_PADDING = 40;
  const LANDSCAPE_IMAGE_HEIGHT = windowHeight - LANDSCAPE_IMAGE_PADDING;
  const landscapeImageStyle = isLandscape && { height: LANDSCAPE_IMAGE_HEIGHT };

  return (
    <View style={styles.root}>
      <View style={[styles.sliderContainer, landscapeImageStyle]}>
        <Swiper
          autoplay
          autoplayTimeout={autoplayTimeout}
          showsPagination={false}
          showsButtons={false}
        >
          {imageUrls.map((imageUrl) => (
            <View
              key={imageUrl}
              style={[styles.slide, landscapeImageStyle]}
            >
              <CachedImage
                source={{ uri: imageUrl }}
                style={[styles.slideImg, landscapeImageStyle]}
                resizeMode="contain"
              />
            </View>
          ))}
        </Swiper>
      </View>
    </View>
  );
}

export default Slider;
