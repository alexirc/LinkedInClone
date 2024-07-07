import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

interface SquareRoundedImageProps {
    source: any,
    size: number,
    backgroundColor: string,
    radius?: number,
    marginLeft?: number,
    marginRight?: number,
}

const SquareRoundedImage = ({
    source,
    size,
    backgroundColor,
    radius = 7,
    marginLeft = 0,
    marginRight = 0,
}: SquareRoundedImageProps) => {
    return (
        <Image
            source={source}
            style={[styles.avatar, { width: size, height: size, backgroundColor, borderRadius: radius, marginLeft, marginRight }]}
        />
    );
};

export default SquareRoundedImage;

const styles = StyleSheet.create({
    avatar: {
        overflow: 'hidden',
    }
});
