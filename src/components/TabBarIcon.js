import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { homeIcon, settingsIcon, favIcon } from '@/assets';
import { TABS } from '@/constants/navigation';

const tabIcon = {
  [TABS.home]: homeIcon,
  [TABS.profile]: settingsIcon,
  [TABS.favorites]: favIcon,
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
