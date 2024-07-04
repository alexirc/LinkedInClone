import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons, Octicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarLabelStyle: { fontFamily: 'mon-sb' }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="network"
        options={{
          title: 'Mi Red',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'people-sharp' : 'people-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: 'Publicar',
          tabBarButton: (props) => (
            <TouchableOpacity
              onPress={() => router.push('(modals)/postModal')}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              {props.children}
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Octicons name='diff-added' color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'notifications-sharp' : 'notifications-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: 'Empleos',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'briefcase-sharp' : 'briefcase-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
