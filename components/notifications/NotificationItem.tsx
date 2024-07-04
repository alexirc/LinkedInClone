import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SquareRoundedImage from '../SquareRoundedImage';

interface NotificationItemProps {
    from?: string;
    message: string;
    time: string;
    buttonAction?: boolean;
    onPress?: () => void;
    read?: boolean,
    imageUrl: any

}

const NotificationItem = ({
    from,
    message,
    time,
    buttonAction = false,
    onPress,
    read = false,
    imageUrl,
}: NotificationItemProps) => {
    const readed = read ? 'readed' : 'unreaded';
    return (
        <View style={read ? styles.container : styles.containerBlue}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name='ellipse' color={read ? 'white' : 'blue'} style={{ marginRight: 5 }} />
                <SquareRoundedImage source={imageUrl} size={50} backgroundColor='white' />
                <View
                    style={{ flex: 1, marginLeft: 10, alignItems: 'center' }}
                >
                    <Text style={styles.subtitle} numberOfLines={3}>
                        <Text style={styles.title}>{from}</Text>{message}
                    </Text>
                </View>
            </View>
            <View
                style={{ marginLeft: 5, alignItems: 'flex-end' }}
            >
                <Text>{time}</Text>
                <TouchableOpacity style={{ padding: 5 }}>
                    <Ionicons name='ellipsis-horizontal' size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NotificationItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    containerBlue: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DDF2FD',
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 14,
        color: '#000',
    },
});
