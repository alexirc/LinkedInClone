import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

interface SquareRoundedImageProps {
    source: any,
    size: number,
    backgroundColor: string
}

const SquareRoundedImage = ({ source, size, backgroundColor }: SquareRoundedImageProps) => {
    return (
        <Image
            source={source}
            style={[styles.avatar, { width: size, height: size, backgroundColor }]}
        />
    );
};

export default SquareRoundedImage;

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 7,
        overflow: 'hidden',
    }
});
