import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CardStatsProps { }

const CardStats = (props: CardStatsProps) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{borderRadius: 100, backgroundColor: 'red', width: 18, height: 18, justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons name='heart' color={'white'}/>
                </View>
                <Text style={{marginLeft: 10}}>789</Text>
            </View>
            <View style={styles.comments}>
                <Text>20 comentarios</Text>
                <Text> · </Text>
                <Text>156 veces compartido</Text>
            </View>
        </View>
    );
};

export default CardStats;

const styles = StyleSheet.create({
    container: {
        paddingVertical:15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    comments: {
        flexDirection: 'row',
    }
});
