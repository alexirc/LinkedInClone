import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface ExpandableTextProps {
    text: string,
    minLines: number,
    maxLines: number,
    arrow?: boolean
}

const ExpandableText = ({ text, minLines, maxLines, arrow = false }: ExpandableTextProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpansion = () => setIsExpanded(!isExpanded);

    const renderedLines = isExpanded ? maxLines : minLines;

    const [numberOfLines, setNumberOfLines] = useState(null);

    const handleLayout = (event: any) => {
        const lines = event.nativeEvent.lines;
        setNumberOfLines(lines.length);
    };

    return (
        <View style={{paddingHorizontal:10, paddingVertical:5}}>
            <Text onTextLayout={handleLayout} style={styles.text} numberOfLines={renderedLines}>
                {text}
            </Text>
            {text.length > minLines * 50 && ( // Check if text exceeds number of lines
                <TouchableOpacity onPress={handleToggleExpansion} style={{ alignItems: 'flex-end',padding:5 }}>
                    <Text style={styles.seeMoreText}>
                        {isExpanded ? 'ver menos' : '...ver más'}
                    </Text>
                    {arrow && <FontAwesome5 name="chevron-down" size={18} style={styles.icon} />}
                </TouchableOpacity>
            )}
        </View>
    );
};

export default ExpandableText;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'mon',
        fontSize: 14, // Adjust font size as needed
    },
    seeMoreText: {
        fontFamily: 'mon-sb',
        fontSize: 14, // Adjust font size as needed
        color: '#414141', // Customize "See More" text color
    },
    icon: {
        marginLeft: 5, // Adjust spacing between text and icon
    },
});
