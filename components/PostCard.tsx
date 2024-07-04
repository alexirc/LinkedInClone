import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CircleAvatar from './CircleAvatar';
import { Ionicons } from '@expo/vector-icons';
import ImageAspectRatio from './ImageAspectRatio';
import ExpandableText from './ExpandableText';
import CardStats from './CardStats';
import ActionBar from './ActionBar';

interface PostCardProps { }

const PostCard = (props: PostCardProps) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <CircleAvatar source={{ uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }} size={40} backgroundColor='white' />
                    <View style={{ marginLeft: 10, paddingTop: 5 }}>
                        <Text style={styles.title}>Miguel Angel Durán Garcia</Text>
                        <Text style={styles.subtitle} numberOfLines={2}>Programación javascript y Desarrollo web. Reconocido google developer experto </Text>
                        <Text style={styles.subtitle}>7 horas</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                    <TouchableOpacity style={{ padding: 5 }}>
                        <Ionicons name='ellipsis-horizontal' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5 }}>
                        <Ionicons name='close' size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardBody}>
                    <ExpandableText 
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                        tellus non nunc ultricies eleifend. Sed euismod, nunc eu
                        ultricies aliquam, nunc nunc ultricies nunc, eu
                        ultricies elit nunc eu tellus. Sed eu tellus non nunc
                        ultricies eleifend. Sed euismod, nunc eu ultricies
                        aliquam, nunc nunc ultricies nunc, eu ultricies elit
                        nunc eu tellus. Sed eu tellus non nunc ultricies
                        eleifend. Sed euismod, nunc eu ultricies aliquam, nunc
                        nunc ultricies nunc, eu ultricies elit nunc eu tellus.
                        Sed eu tellus non nunc ultricies eleifend. Sed euismod,
                        nunc eu ultricies aliquam, nunc nunc ultricies nunc, eu'
                        maxLines={15}
                        minLines={3}
                    />
                <ImageAspectRatio url={'https://promova.com/content/occupations_e801217af0.png'}/>
            </View>
            <CardStats/>
            <View style={{borderTopColor: "#f5f5f5", borderWidth: .8, marginHorizontal: 20, opacity: .3}}/>
            <ActionBar/>
        </View>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 10
    },
    cardHeader: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 5
    },
    cardBody: {
        flex: 1,
        height: 'auto'
    },
    imageBox: {
        flexDirection: 'row',
    },
    image: {
        width: '100%',
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    bodyText: {
        fontSize: 14,
        fontFamily: 'mon'
    },
    title: {
        fontSize: 16,
        fontFamily: 'mon-sb',
        color: 'black'
    },
    subtitle: {
        fontFamily: 'mon',
        fontSize: 12,
        color: 'black'
    }
});
