import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons'

import styles  from './styles';

const ButtonsCard = ({onPress,iconName,iconSize,iconColor, text}) => {
  return (
      <TouchableOpacity onPress={() => onPress()} style={styles.container}>
          <View style={styles.iconStyle}>
            <AntDesign name={iconName} size={iconSize} color={iconColor} />
          </View>
          <Text style={[styles.textStyle,{color:iconColor}]}>{text}</Text>
      </TouchableOpacity>
  );
}

export default ButtonsCard;