import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo

interface props {
    avatarUrl: string; 
    title: string; 
    subtitle: string; 
    onPressFirst: ()=> void; 
    onPressSecond: ()=> void;
}
const Card = ({ avatarUrl, title, subtitle, onPressFirst, onPressSecond }: props) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={onPressFirst} style={styles.button}>
                    <MaterialIcons name="favorite" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressSecond} style={styles.button}>
                    <MaterialIcons name="share" size={24} color="gray" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        padding: 8,
    },
});

export default Card;