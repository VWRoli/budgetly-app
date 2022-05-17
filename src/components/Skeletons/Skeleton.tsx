import React, { useEffect } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  height?: number;
  width?: number;
  radius?: number;
}

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const Skeleton: React.FC<Props> = ({
  height = 20,
  width = 135,
  radius = 15,
}): JSX.Element => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: '#E6E6E6',
        borderRadius: radius,
        overflow: 'hidden',
      }}
    >
      <AnimatedLG
        colors={['#E6E6E6', '#DBDBDB', '#DBDBDB', '#E6E6E6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [{ translateX: translateX }],
        }}
      />
    </View>
  );
};

export default Skeleton;
