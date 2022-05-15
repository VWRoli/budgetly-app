import React, { useEffect } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  height?: number;
  width?: number;
}

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const Skeleton: React.FC<Props> = ({
  height = 30,
  width = 135,
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
        backgroundColor: '#a0a0a0',
        borderRadius: 10,
        overflow: 'hidden',
      }}
    >
      <AnimatedLG
        colors={['#a0a0a0', '#b0b0b0', '#b0b0b0', '#a0a0a0']}
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
