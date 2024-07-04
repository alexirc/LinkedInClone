import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CircleAvatar from './CircleAvatar';
import BarSearchInput from './BarSearchInput';
import { Ionicons } from '@expo/vector-icons';

interface TopBarSearchProps { }

const TopBarSearch = (props: TopBarSearchProps) => {
    return (
        <View style={styles.container}>

            <CircleAvatar source={{ uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }} size={36} backgroundColor='white' />
            <BarSearchInput onSearch={()=>{}} placeholder='Search'/>
            <TouchableOpacity>
                <Ionicons name='chatbox-ellipses' size={24} color={'#202020'} style={{ transform: [{scaleX:-1}]}}/>
            </TouchableOpacity>
        </View>
    );
};

export default TopBarSearch;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingBottom: 5,
        borderBottomWidth:1,
        borderBottomColor:'#E5E5E5'

        
    }
});
