import React, { useState } from 'react';
import { View } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import Swiper from 'react-native-swiper';
import Slide from './Slide';
import styles, { SLIDER_BORDER_WIDTH } from './styles';
import { CONTENT_HORIZONTAL_PADDING } from '../../constants';

interface Props {
  imageUrls: Array<string>;
  autoplayTimeout?: number;
}

function Slider({ imageUrls, autoplayTimeout = 3 }: Props) {
  const [sliderHeight, setSliderHeight] = useState(0);

  const {
    window: windowSize,
  } = useDimensions();
  const isLandscape = windowSize.width > windowSize.height;

  const sliderWidth = isLandscape
    ? (windowSize.width - CONTENT_HORIZONTAL_PADDING) / 2.5
    : (windowSize.width - CONTENT_HORIZONTAL_PADDING);

  const slideWidth = sliderWidth - (SLIDER_BORDER_WIDTH * 2);

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.sliderContainer,
          { height: sliderHeight, width: sliderWidth }
        ]}
      >
        <Swiper
          autoplay
          autoplayTimeout={autoplayTimeout}
          showsPagination={false}
          showsButtons={false}
        >
          {imageUrls.map((imageUrl) => (
            <Slide
              imageUrl={imageUrl}
              width={slideWidth}
              onChangeHeight={(slideHeight) => {
                setSliderHeight(slideHeight + SLIDER_BORDER_WIDTH);
              }}
            />
          ))}
        </Swiper>
      </View>
    </View>
  );
}

export default Slider;
