import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentsButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}


export function EnviromentButton({
  title,
  active = false,
  ...rest
}: EnviromentsButtonProps) {
  return (
    <RectButton style={[
      styles.container,
      active && styles.containerActive
    ]} {...rest}>
      <Text style={[
        styles.text,
        active && styles.textActive
      ]}>{title}</Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.shape,
    borderRadius: 12,
    marginRight: 5,
  },
  containerActive: {
    fontFamily: fonts.heading,
    color: colors.green,
    backgroundColor: colors.green_light,
    marginRight: 5,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark

  }
})