import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CardSubGroupProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
    bottomAction: () => void;
    bottomActionLabel: string;
    bottomActionIcon?: any;
    deleteAction?: () => void;
    deleteButton?: boolean;
    isPremium?: boolean;
    marginTop?: number;
}

const CardSubGroup = ({
    title,
    subtitle,
    children,
    bottomAction,
    bottomActionLabel,
    bottomActionIcon = (<Ionicons name="arrow-forward" size={18} color="black" />),
    deleteAction,
    deleteButton = false,
    isPremium = false,
    marginTop = 0,
}: CardSubGroupProps) => {
    const borderPremium = isPremium ? 4 : 0;
    return (
        <View style={[styles.container, { marginTop: marginTop, borderColor: '#FFBB70', borderTopWidth: borderPremium }]}>
            <View style={styles.titleBox}>
                <View style={{ flex: 1, }}>
                    {
                        isPremium && (
                            <View style={{ flexDirection: 'row', paddingBottom: 10, }}>
                                <Ionicons name='logo-linkedin' color={'#FFBB70'} />
                                <Text style={styles.premiumText}>PREMIUM</Text>
                            </View>
                        )
                    }
                    <Text style={styles.title}>{title}</Text>
                    {
                        subtitle && (
                            <Text style={styles.subtitle}>{subtitle}</Text>
                        )
                    }
                </View>
                {
                    deleteButton && (
                        <TouchableOpacity style={styles.deleteButton} onPress={deleteAction}>
                            <Text style={styles.deleteButtonText}>Borrar</Text>
                        </TouchableOpacity>
                    )

                }
            </View>
            <View>
                {children}
            </View>
            <TouchableOpacity style={styles.bottomAction} >
                <Text style={styles.bottomActionLabel}>{bottomActionLabel}</Text>
                {bottomActionIcon}
            </TouchableOpacity>
        </View>
    );
};

export default CardSubGroup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    title: {
        fontFamily: 'robot-medium',
        fontSize: 20
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'robot-regular',
        fontSize: 14,
        color: '#404040',
    },
    bottomAction: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16
    },
    bottomActionLabel: {
        fontFamily: 'robot-medium',
        color: '#404040',
        fontSize: 16,
        marginRight: 5
    },
    deleteButton: {
        paddingHorizontal: 5
    },
    deleteButtonText: {
        fontFamily: 'robot-medium',
        color: '#404040',
        fontSize: 14,
        marginRight: 5
    },
    premiumText: {
        marginLeft: 5,
        fontFamily: 'mon',
        fontSize: 12,
    }
});
