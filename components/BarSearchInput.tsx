import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BarSearchInputProps {
    onSearch: any,
    placeholder: string,
}

const BarSearchInput = ({ onSearch, placeholder = 'Search...' }: BarSearchInputProps) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText); // Call the provided onSearch function with the search text
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSearch}>
                <Ionicons name="search" size={16} color="gray" style={styles.icon} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={setSearchText}
                value={searchText}
                placeholderTextColor="gray"
            />
        </View>
    );
};

export default BarSearchInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 18,
        paddingHorizontal: 10,
        borderColor: '#F0F0F0',
        borderWidth: 1,
        width: 240
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        minWidth: 240,
        height: 36,
        fontFamily: 'mon-sb'
    },
});
