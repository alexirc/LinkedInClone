import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import LinkedCard from '@/components/LinkedCard'

export default function NetworkTab() {
    return (
        <ScrollView horizontal={false} style={{ flex:1, padding:1, backgroundColor: '#f5f5f5'}}>
            <LinkedCard 
            title='Invitaciones (1)'
            body
            image={{uri: 'https://pbs.twimg.com/profile_images/876818004411129856/YpdvPggy_400x400.jpg'}}
            bodyCategory='Newsletter · Mensualmente'
            bodyFrom='Microsoft'
            bodyTo='The Monthly Tech-In'
            bodyDate='Hace 2 dias'
            />
            <LinkedCard title='Gestionar mi red'/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})