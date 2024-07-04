import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SquareRoundedImage from './SquareRoundedImage';

interface LinkedCardProps {
    body?: boolean;
    title: string;
    url?: string;
    image?: any;
    bodyFrom?: string;
    bodyTo?: string;
    bodyCategory?: string;
    bodyDate?: string;
}

const LinkedCard = ({
    body = false,
    title,
    url,
    image,
    bodyFrom,
    bodyTo,
    bodyCategory,
    bodyDate
}: LinkedCardProps) => {
    return (
        <View style={{ backgroundColor: 'white', marginTop: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15 }}>
                <Text style={styles.headerText}>{title}</Text>
                <Ionicons name='arrow-forward' size={20} />
            </View>
            {
                body && (

                    <View style={styles.body}>
                        <SquareRoundedImage source={image} size={60} backgroundColor='white' />

                        <View style={{ flex: 1, marginLeft: 10, paddingTop: 5 }}>
                            <Text style={styles.subtitle}>{bodyCategory}</Text>
                            <Text style={styles.title}>
                                <Text style={styles.titleBold}>{bodyFrom}</Text> te ha invitado a suscribirte a <Text style={styles.titleBold}>{bodyTo}</Text></Text>
                            <Text style={styles.subtitle}>{bodyDate}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ padding: 5 }}>
                                <View style={{ borderColor: '#414141', borderWidth: 1, borderRadius: 100, padding: 5 }}>
                                    <Ionicons name='close' size={28} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 5 }}>
                                <View style={{ borderColor: '#414141', borderWidth: 1, borderRadius: 100, padding: 5 }}>
                                    <Ionicons name='checkmark-sharp' size={28} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </View>
    );
};

export default LinkedCard;

const styles = StyleSheet.create({
    container: {},
    headerText: {
        fontSize: 16,
        fontFamily: 'mon-sb'
    },
    body: {
        flex: 1,
        borderTopColor: '#f7f7f7',
        borderTopWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        fontFamily: 'mon',
        color: 'black',
        marginVertical: 5,
    },
    titleBold: {
        fontFamily: 'mon-sb'
    },
    subtitle: {
        fontFamily: 'mon',
        fontSize: 12,
        color: 'black'
    }
});
