import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CircleAvatar from '../CircleAvatar';
import { useRouter } from 'expo-router';

interface PostModalHeaderProps { }

const PostModalHeader = (props: PostModalHeaderProps) => {
    const navigator = useRouter();
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => navigator.back()}
            >
                <Ionicons name='close' color={'black'} size={30} />
            </TouchableOpacity>
            <CircleAvatar source={{ uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }} size={30} backgroundColor='white' />
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.text}>Cualquiera</Text>
                <Ionicons name='chevron-down' style={{ marginLeft: 15 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name='time-outline' color={'black'} size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Publicar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PostModalHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 20

    },
    button: {
        backgroundColor: '#F5F5F5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50
    },
    text: {
        color: '#242424',
        fontSize: 16,
        fontFamily: 'mon-sb'
    }
});
