import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

interface CircleAvatarProps {
    source: any,
    size: number,
    backgroundColor: string
}

const CircleAvatar = ({source, size, backgroundColor}: CircleAvatarProps) => {
    return (
        <Image 
            source={source}
            style={[styles.avatar, {width: size, height: size, backgroundColor}]}
        />
    );
};

export default CircleAvatar;

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 50,
        overflow: 'hidden'
    }
});
