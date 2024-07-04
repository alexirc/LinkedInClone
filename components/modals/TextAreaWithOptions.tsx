import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

interface TextAreaWithOptionsProps { }

const TextAreaWithOptions = (props: TextAreaWithOptionsProps) => {
    const [text, setText] = useState('');
    const [keyboardHeight, setKeyboardHeight] = useState(30);
    const textInputRef = useRef(null);


    useEffect(() => {
        const keyboardwillshow = Keyboard.addListener(
            'keyboardWillShow',
            (e) => {
                setKeyboardHeight(e.endCoordinates.height);
            }
        )
        const keyboardwillhide = Keyboard.addListener(
            'keyboardWillHide',
            (e) => {
                setKeyboardHeight(0);
            }
        );

        return () => {
            keyboardwillshow.remove();
            keyboardwillhide.remove();
        }
    }, [])


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                multiline={true}
                value={text}
                onChangeText={setText}
                placeholder="¿Sobre qué quieres hablar?"
                placeholderTextColor={'#404040'}

            />
            <View style={[styles.bottomBar, { bottom: keyboardHeight }]}>
                <TouchableOpacity style={styles.option} onPress={() => console.log('Bold')}>
                    <Ionicons name="image-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => console.log('Italic')}>
                    <MaterialCommunityIcons name="scoreboard-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => console.log('Underline')}>
                    <Ionicons name="calendar-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => console.log('List')}>
                    <Ionicons name="ellipsis-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TextAreaWithOptions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    keyboardAvoidingView: {
        flex: 1
    },
    textInput: {
        flex: 1,
        padding: 10,
        fontFamily: 'mon',
        fontSize: 16,
        fontWeight: '600'
    },
    bottomBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        position: 'absolute',
        left: 0,
        right: 0,
    },
    option: {
        marginRight: 15,
    },
    sendButton: {
        marginLeft: 'auto',
        backgroundColor: '#007AFF',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
