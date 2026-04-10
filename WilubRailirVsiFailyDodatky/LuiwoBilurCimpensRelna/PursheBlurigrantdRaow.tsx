import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Defs, Stop, Rect, RadialGradient, } from 'react-native-svg';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

type EmagovradinProps = {
  style?: StyleProp<ViewStyle>;
};

export const PursheBlurigrantdRaow: React.FC<EmagovradinProps> = ({ style }) => (
  <LinearGradient 
    start={{x: 0.5, y: 0}}
    end={{x: 0.5, y: 1}}
    colors={['#2AD1F7', '#0B84C9']}
    style={[ {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }, style]}
  />
);
