import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

interface Props {
  item: string;
  index: number;
}

const CarouselCardItem: React.FC<Props> = ({ item, index }): JSX.Element => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#eee', '#ddd', '#eee']}
      key={index}
    >
      <Text style={styles.header}>{item}</Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  header: {
    color: '#222',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
});

export default CarouselCardItem;
