import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';

function Logo(props: SvgProps) {
  return (
    <Svg width={109} height={109} fill="none" {...props}>
      <Circle
        cx={54.5}
        cy={54.5}
        r={53.5}
        fill="#fff"
        stroke="#1E84F3"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default Logo;
