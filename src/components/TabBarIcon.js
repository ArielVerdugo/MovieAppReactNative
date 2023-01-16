import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { homeIcon, searchIcon, settingsIcon, favoriteIcon } from '@/assets';
import { TABS } from '@/constants/navigation';

const tabIcon = {
  [TABS.home]: homeIcon,
  [TABS.search]: searchIcon,
  [TABS.profile]: settingsIcon,
  [TABS.favorites]: favoriteIcon,
};

export function TabBarIcon({ color, routeName }) {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon[routeName]}
      style={{ tintColor: color }}
    />
  );
}

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
