import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SquareRoundedImage from '../SquareRoundedImage';
import { Ionicons } from '@expo/vector-icons';

interface EmploymentCardProps {
    title: string;
    business: string;
    businessImage: string;
    location: string;
    category: string;
    categoryImage: string;
    type: string;
    application: string;
    applicationImage?: string | null;
}

const EmploymentCard = ({
    title,
    business,
    businessImage,
    location,
    category,
    categoryImage,
    type,
    application,
    applicationImage
}: EmploymentCardProps) => {
    return (
        <View style={styles.container}>
            <SquareRoundedImage
                source={{ uri: businessImage }}
                size={50}
                backgroundColor='white'
                radius={1}
            />
            <View style={styles.textBox}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.business}>{business}</Text>
                <Text style={styles.location}>{location}</Text>
                <View style={styles.typeBox}>
                    {
                        categoryImage && (
                            <SquareRoundedImage source={{ uri: categoryImage }} size={20} radius={1} backgroundColor='white' marginRight={5}/> 
                        )
                    }
                    <Text style={styles.category}>{category}</Text>
                </View>
                <View style={styles.typeBox}>
                    <Text style={styles.type}>Promocionado · </Text>
                    {
                        applicationImage && (
                            <SquareRoundedImage source={{ uri: applicationImage }} size={14} radius={1} backgroundColor='white' marginRight={5}/> 
                        )
                    }
                    <Text style={styles.type}>{application}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.closeButton}>
                <Ionicons name='close' size={20} />
            </TouchableOpacity>
        </View>
    );
};

export default EmploymentCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 5,
        paddingVertical:10,
        backgroundColor: 'white',
        borderBottomColor: '#C7C8CC',
        borderBottomWidth: .5,
    },
    textBox: {
        flex: 1,
        marginLeft: 10
    },
    title: {
        fontFamily: 'robot-medium',
        fontSize: 16
    },
    business: {
        fontFamily: 'robot-regular',
        fontSize: 14,
    },
    location: {
        fontFamily: 'robot-regular',
        color: '#424242',
        fontSize: 14,
    },
    category: {
        fontFamily: 'robot-regular',
        color: '#424242',
        fontSize: 12,
    },
    type: {
        fontFamily: 'robot-regular',
        color: '#424242',
        fontSize: 12,
    },
    typeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop:7,
    },
    closeButton: {
        padding: 5,
        marginLeft: 5
    }
});
