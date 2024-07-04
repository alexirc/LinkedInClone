import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBarSearch from '@/components/TopbarSearch'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryHorizontalChips from '@/components/notifications/CategoryHorizontalChips'
import NotificationItem from '@/components/notifications/NotificationItem'

export default function Notifications() {
  const categories = ['Todo','Mis notificaciones','Menciones']
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{flex:1, backgroundColor:'white', height: '100%', paddingVertical: 0}}>
      <TopBarSearch/>
      <CategoryHorizontalChips categories={categories} selectedCategory='Todo'/>
      <ScrollView horizontal={false} style={{ flex:1, paddingTop:10, backgroundColor: '#f5f5f5'}} >
        <NotificationItem 
        imageUrl={{uri: 'https://pbs.twimg.com/profile_images/876818004411129856/YpdvPggy_400x400.jpg'}} 
        message='A veces menos es mas al redactar tu CV' 
        time='11 minutos' 
        />
        <NotificationItem 
        imageUrl={{uri: 'https://pbs.twimg.com/profile_images/876818004411129856/YpdvPggy_400x400.jpg'}} 
        message='Ver artículos colaborativos de diseño: a continuación, te explicamos como puedes dominar la codificación' 
        time='11 minutos' 
        read
        />
        <NotificationItem 
        imageUrl={{uri: 'https://pbs.twimg.com/profile_images/876818004411129856/YpdvPggy_400x400.jpg'}} 
        message='Ver artículos colaborativos de diseño: a continuación, te explicamos como puedes dominar la codificación' 
        time='11 minutos' 
        read
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})