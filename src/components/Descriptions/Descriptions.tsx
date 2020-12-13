import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { DescriptionItem } from '../../services/app-data';

const Descriptions = ({ descriptionItems }: { descriptionItems: Array<DescriptionItem> }) => {
  return (
    <View style={styles.root}>
      {descriptionItems.map(({ title, content }, idx) => {
        const isLast = idx === descriptionItems.length - 1;
        return (
          <View key={title} style={{ marginBottom: isLast ? 0 : 34 }}>
            <Text style={styles.itemTitle}>
              {title}
            </Text>
            <Text style={styles.itemContent}>
              {content}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Descriptions;
