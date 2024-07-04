import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface CategoryHorizontalChipsProps {
    categories: string[],
    selectedCategory: string,
}

const CategoryHorizontalChips = ({ categories, selectedCategory }: CategoryHorizontalChipsProps) => {
    return (
        <View style={styles.container}>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{paddingHorizontal: 10}}
            >
                {
                    categories.map((category, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={(category === selectedCategory) ? styles.chipActive : styles.chip}>
                                <Text
                                    style={(category === selectedCategory) ? styles.chipTextActive : styles.chipText}>
                                    {category}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};

export default CategoryHorizontalChips;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 10,
    },
    chip: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginRight: 10
    },
    chipActive: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginRight: 10
    },
    chipText: {
        color: '#404040',
        fontFamily: 'mon-sb',
        fontSize: 14,
    },
    chipTextActive: {
        color: 'white',
        fontFamily: 'mon-sb',
        fontSize: 14,
    }
});
