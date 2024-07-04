import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PostModalHeader from '@/components/modals/PostModalHeader'
import TextAreaWithOptions from '@/components/modals/TextAreaWithOptions'

export default function PostModal() {
    return (
        <View style={styles.container}>
            <PostModalHeader/>
            <TextAreaWithOptions/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    }
})