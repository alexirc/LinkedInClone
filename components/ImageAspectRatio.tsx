import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

interface ImageAspectRatioProps {
    url: string
 }

const ImageAspectRatio = ({url}: ImageAspectRatioProps) => {
    const [aspectRatio, setAspectRatio] = useState(0);
    const handleGetAspectRatio = async () => {
        const imageUrl = url; // Replace with your image URL
        await Image.getSize(imageUrl, (width, height) => { setAspectRatio(width/height) })
    };

    useEffect(() => {
        handleGetAspectRatio();
    }, [url]);
    return (
        <View style={{ width: '100%' }} >
            <Image style={{ flex: 1, width: '100%', height: undefined, resizeMode: 'contain', aspectRatio: aspectRatio }} source={{ uri: url }} />
        </View>
    );
};

export default ImageAspectRatio;

const styles = StyleSheet.create({
    container: {}
});
