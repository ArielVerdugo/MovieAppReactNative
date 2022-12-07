import { useTheme } from '@react-navigation/native';
import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { TextField } from '@/components';
import { styles } from '@/screens/Login/Login.styles';
import { shadow } from '@/theme';
import { strings } from '@/localization';

export function Favorites({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TextField value={''} />
    </View>
  );
}
