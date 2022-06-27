import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

const DATA = [
  {
    url: require('../assets/icon/Circle.png'),
  },
  {
    text: 'Men Shirts',
    url: require('../assets/icon/MenShirt.png'),
  },
  {
    text: 'Man Bag',
    url: require('../assets/icon/ManBag.png'),
  },
  {
    text: 'Men T-Shirt',
    url: require('../assets/icon/TShirt.png'),
  },
  {
    text: 'Men Shoes',
    url: require('../assets/icon/MenShoes.png'),
  },
  {
    text: 'Men Pants',
    url: require('../assets/icon/MenPant.png'),
  },
  {
    text: 'Men Underwear',
    url: require('../assets/icon/MenUnderwear.png'),
  },
];
const Shirt = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Men Fashion</Text>
      <View style={styles.iconContainer}>
        <View>
          <View style={styles.categoryIcon}>
            <View style={styles.rectangle}>
              <Image source={DATA[0].url} />
              <TouchableOpacity style={styles.touchable}>
                <Image style={styles.productIcon} source={DATA[1].url} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.iconText}>{DATA[1].text}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.categoryIcon}>
            <View style={styles.rectangle}>
              <Image source={DATA[0].url} />
              <TouchableOpacity style={styles.touchable}>
                <Image style={styles.productIcon} source={DATA[2].url} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.iconText}>{DATA[2].text}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.categoryIcon}>
            <View style={styles.rectangle}>
              <Image source={DATA[0].url} />
              <TouchableOpacity style={styles.touchable}>
                <Image style={styles.productIcon} source={DATA[3].url} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.iconText}>{DATA[3].text}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.categoryIcon}>
            <View style={styles.rectangle}>
              <Image source={DATA[0].url} />
              <TouchableOpacity style={styles.touchable}>
                <Image style={styles.productIcon} source={DATA[4].url} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.iconText}>{DATA[4].text}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <View>
          <View style={styles.categoryIcon}>
            <View style={styles.rectangle}>
              <Image source={DATA[0].url} />
              <TouchableOpacity style={styles.touchable}>
                <Image style={styles.productIcon} source={DATA[5].url} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.iconText}>{DATA[5].text}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.categoryIcon}>
            <View style={styles.rectangle}>
              <Image source={DATA[0].url} />
              <TouchableOpacity style={styles.touchable}>
                <Image style={styles.productIcon} source={DATA[6].url} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.iconText}>{DATA[6].text}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Shirt;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  categoryIcon: {
    marginVertical: 10,
    width: 70,
    height: 108,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  rectangle: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
  },
  iconText: {
    marginTop: 7,
    fontSize: 10,
    color: '#9098B1',
    textAlign: 'center',
  },
  touchable: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
