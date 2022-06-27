import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const OfferPromotion = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <ImageBackground
          source={require('../../../assets/image/RecomendedProduct.png')}
          style={styles.backgroundImage}>
          <Text style={styles.promotionText}>90% Off Super Mega Sale</Text>
          <Text style={styles.text}>Special birthday for You</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default OfferPromotion;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
    marginVertical: 20,
  },
  backgroundImage: {
    height: 206,
    borderRadius: 10,
  },
  promotionText: {
    maxWidth: 295,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 30,
    marginHorizontal: 40,
  },
  text: {
    color: '#FFFFFF',
    marginHorizontal: 40,
  },
});
