import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const systemWidth = Dimensions.get('window').width;
const systemHeight = Dimensions.get('window').height;
const DATA = [
  {
    id: 'SN1010',
    url: require('../../assets/image/SN1010.png'),
    brand: 'PALM ANGELS',
    name: 'Off-White Vulcanized High-Top Sneakers',
    stockPrice: 215,
    discountPrice: 170,
    discountPercentage: 20,
  },
  {
    id: 'SN1020',
    url: require('../../assets/image/SN1020.png'),
    brand: 'AXEL ARIGATO',
    name: 'Gray A-Dice Lo Sneakers',
    stockPrice: 250,
    discountPrice: 200,
    discountPercentage: 20,
  },
  {
    id: 'SN1030',
    url: require('../../assets/image/SN1030.png'),
    brand: 'RICK OWENS DRKSHDW',
    name: 'Converse Edition Off-White TURBOWPN Sneakers',
    stockPrice: 235,
    discountPrice: 185,
    discountPercentage: 20,
  },
  {
    id: 'SN1040',
    url: require('../../assets/image/SN1040.png'),
    brand: 'RAF SIMONS',
    name: 'White Orion Sneakers',
    stockPrice: 400,
    discountPrice: 320,
    discountPercentage: 20,
  },
  {
    id: 'SN1050',
    url: require('../../assets/image/SN1050.png'),
    brand: 'RAF SIMONS',
    name: 'White Moulded Shoulder Bag',
    stockPrice: 520,
    discountPrice: 390,
    discountPercentage: 20,
  },
  {
    id: 'SN1060',
    url: require('../../assets/image/SN1060.png'),
    brand: 'GOLDEN GOOSE',
    name: 'White Super-Star Classic Low-Top Sneakers',
    stockPrice: 620,
    discountPrice: 450,
    discountPercentage: 20,
  },
];
const Item = ({id}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.productcontainer}>
      <View style={styles.marGin}>
        <TouchableOpacity onPress={() => navigation.navigate(DATA[id].name)}>
          <Image source={DATA[id].url} style={styles.imgProduct} />
        </TouchableOpacity>
        <View style={styles.textTop}>
          <TouchableOpacity onPress={() => navigation.navigate(DATA[id].name)}>
            <Text style={styles.brandName}>{DATA[id].brand}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(DATA[id].name)}>
            <Text style={styles.proName}>{DATA[id].name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.discountFooter}>
          <Text style={styles.stockprice}>$ {DATA[id].stockPrice}</Text>
          <Text style={styles.discountpercent}>
            {DATA[id].discountPercentage}% Off
          </Text>
        </View>
        <View>
          <Text style={styles.productPrice}>{DATA[id].discountPrice} $</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Buy now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const FlashSale = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <Item id="0" />
            <Item id="1" />
          </View>
          <View style={styles.row}>
            <Item id="2" />
            <Item id="3" />
          </View>
          <View style={styles.row}>
            <Item id="4" />
            <Item id="5" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  container: {
    width: systemWidth,
    paddingTop: 5,
    alignSelf: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  productcontainer: {
    width: (systemWidth - 20) / 2,
    height: 342,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    marginBottom: 10,
  },
  marGin: {
    margin: ((systemWidth - 20) / 2 - 135) / 2,
  },
  imgProduct: {
    borderRadius: 5,
    width: 133,
    height: 133,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  proName: {
    color: '#223263',
    fontWeight: 'bold',
    marginBottom: 5,
    height: 53,
  },
  productPrice: {
    color: '#40BFFF',
    fontWeight: 'bold',
    marginTop: 5,
  },
  textTop: {
    marginVertical: 10,
  },
  textBottom: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  button: {
    width: 120,
    height: 20,
    backgroundColor: '#40BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  brandName: {
    height: 35,
  },
  discountFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discountpercent: {
    color: '#FB7181',
    fontWeight: 'bold',
    fontSize: 10,
  },
  stockprice: {
    fontSize: 10,
    color: '#9098B1',
  },
});
