import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ActionBarProps { }

const ActionBar = (props: ActionBarProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.action}>
                <Ionicons name='thumbs-up-outline' size={18}/>
                <Text style={styles.actionText}>Recomendar</Text>
            </View>
            <View style={styles.action}>
                <Ionicons name='chatbox-outline' size={18}/>
                <Text style={styles.actionText}>Comentar</Text>
            </View>
            <View style={styles.action}>
                <Ionicons name='share-social-outline' size={18}/>
                <Text style={styles.actionText}>Compartir</Text>
            </View>
            <View style={styles.action}>
                <Ionicons name='send-outline' size={18}/>
                <Text style={styles.actionText}>Enviar</Text>
            </View>
        </View>
    );
};

export default ActionBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    action: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    }, 
    actionText: {
        fontSize: 12,
    }
});
