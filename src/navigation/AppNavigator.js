import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { FavoritesNavigator } from './FavoritesNavigator';
import { TabBarIcon } from '@/components';
import { HomeNavigator } from '@/navigation/HomeNavigator';
import { ProfileNavigator } from '@/navigation/ProfileNavigator';
import { TABS } from '@/constants/navigation';
import { backgroundBottomNavigation } from '@/theme/theme';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        title: '',
        tabBarStyle: {
          backgroundColor: backgroundBottomNavigation.colors.primary,
        },
        tabBarIconStyle: {
          flexGrow: 0.5,
        },
        headerShown: false,
        tabBarActiveTintColor: colors.activeTab,
        tabBarInactiveTintColor: colors.inactiveTab,
        tabBarIcon: ({ color }) => <TabBarIcon color={color} routeName={route.name} />,
      })}
    >
      <Tab.Screen name={TABS.home} component={HomeNavigator} />
      <Tab.Screen name={TABS.search} component={HomeNavigator} />
      <Tab.Screen name={TABS.favorites} component={FavoritesNavigator} />
      <Tab.Screen name={TABS.profile} component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
