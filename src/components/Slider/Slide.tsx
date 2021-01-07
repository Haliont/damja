import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { CachedImage } from 'react-native-cached-image';

type Props = {
  width: number,
  imageUrl: string;
  onChangeHeight: (height: number) => void;
};

function Slide({ imageUrl, width, onChangeHeight }: Props) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    Image.getSize(imageUrl, (imageWidth, imageHeight) => {
      setHeight(imageHeight * (width / imageWidth));
    });
  }, [width]);

  useEffect(() => {
    onChangeHeight(height);
  }, [height]);

  const style = { height, width };

  return (
    <View style={style}>
      <CachedImage
        style={style}
        source={{ uri: imageUrl }}
        resizeMode="contain"
      />
    </View>
  );
}

export default Slide;
