import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LastSearchCardProps {
    title: string;
    news: string;
    location: string;
    alertType: string | null;
    jobType: string | null;
}

const LastSearchCard = ({
    title,
    news,
    location,
    alertType,
    jobType
}: LastSearchCardProps) => {
    const subtitle = [alertType, location, jobType];
    const subtitleText = subtitle.filter((item) => item !== null).join(' · ');
    
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.news}>{news}</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.subtitle}>{subtitleText}</Text>
            </View>
        </View>
    );
};

export default LastSearchCard;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        backgroundColor: 'white',
        borderBottomColor: '#C7C8CC',
        borderBottomWidth: .5,
        paddingHorizontal: 14
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'robot-medium',
        fontSize: 16,
    },
    subtitle: {
        fontFamily: 'robot-regular',
        fontSize: 12,
        color:'#404040'
    },
    news: {
        marginLeft:5,
        fontFamily: 'robot-medium',
        fontSize: 12,
        color: 'green'

    }
});
