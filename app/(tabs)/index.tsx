import { Image, StyleSheet, Platform, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBarSearch from '@/components/TopbarSearch';
import PostCard from '../../components/PostCard';

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{flex:1, backgroundColor:'white', height: '100%', paddingVertical: 0}}>
      <TopBarSearch/>
      <ScrollView horizontal={false} style={{ flex:1, padding:1, backgroundColor: '#f5f5f5'}} >
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
