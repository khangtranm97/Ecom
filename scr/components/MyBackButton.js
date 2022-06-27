import React from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MyBackButton =({label,onPress}) =>{
    const navigation = useNavigation();
    return (
    <TouchableOpacity onPress={onPress}>
        <Image
            source={require('../assets/icon/Left.png')}
            style={styles.icon}
        />
    </TouchableOpacity>
    );
};
export default MyBackButton;
const styles = StyleSheet.create({
    container: {
        widht:60,
        height:60,
    },
})