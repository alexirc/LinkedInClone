import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBarSearch from '@/components/TopbarSearch'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import NetworkTab from '../network'
import Following from '../network/following'


const renderScene = SceneMap({
  first: NetworkTab,
  second: Following,
});

const routes = [
  { key: 'first', title: 'Amplía tu red' },
  { key: 'second', title: 'Ponte al día' },
];
const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#387C6D' }}
    labelStyle={{ color: 'black' }}
    style={{ backgroundColor: 'white' }}
  />
);

export default function Network() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white', height: '100%', paddingVertical: 0 }}>
      <TopBarSearch />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})