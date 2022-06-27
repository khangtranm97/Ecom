import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeRecommendedImage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/image/RecomendedProduct.png')}
        resizeMode="cover"
        style={styles.recomendedImg}>
        <View style={styles.textCont}>
          <Text style={styles.recomendedText}>Recomended Product</Text>
          <Text style={styles.recomendedtext}>
            We recommended the best for you!
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeRecommendedImage;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    height: 206,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginVertical: 10,
  },
  recomendedImg: {
    flex: 1,
  },
  textCont: {
    marginLeft: 20,
  },
  recomendedText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 40,
    width: 150,
  },
  recomendedtext: {
    color: '#FFFFFF',
  },
});
