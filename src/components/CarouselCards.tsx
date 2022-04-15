import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import { monthList } from '../constants/constants';
import { Chip, Text } from 'react-native-paper';

const CarouselCards = () => {
  const isCarousel = React.useRef(null);

  return (
    <View style={{ marginVertical: 15 }}>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={monthList}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      <Chip
        style={{
          position: 'absolute',
          bottom: -20,
          left: '50%',
          transform: [{ translateX: -25 }],
          padding: 0,
        }}
        mode="outlined"
      >
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>2022</Text>
      </Chip>
    </View>
  );
};

export default CarouselCards;
