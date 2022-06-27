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
    id: 'item1',
    url: require('../../assets/image/ProductImage5.png'),
    name: 'Nike Air Max 270 React ENG',
    rate: require('../../assets/icon/Rate4Stars.png'),
    saleprice: '299,43',
    stockprice: '599',
    salepercentage: '30%',
  },
  {
    id: 'item2',
    url: require('../../assets/image/ProductImage6.png'),
    name: 'Nike Air Max 270 React ENG',
    rate: require('../../assets/icon/Rate4Stars.png'),
    saleprice: '299,43',
    stockprice: '599',
    salepercentage: '30%',
  },
  {
    id: 'item3',
    url: require('../../assets/image/ProductImage7.png'),
    name: 'Nike Air Max 270 React ENG',
    rate: require('../../assets/icon/Rate4Stars.png'),
    saleprice: '299,43',
    stockprice: '599',
    salepercentage: '30%',
  },
  {
    id: 'item4',
    url: require('../../assets/image/ProductImage8.png'),
    name: 'Nike Air Max 270 React ENG',
    rate: require('../../assets/icon/Rate4Stars.png'),
    saleprice: '299,43',
    stockprice: '599',
    salepercentage: '30%',
  },
];
const Item = ({id}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.productcontainer}>
      <View style={styles.marGin}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Product Details')}>
          <Image source={DATA[id].url} style={styles.imgProduct} />
        </TouchableOpacity>
        <View style={styles.textTop}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Product Details')}>
            <Text style={styles.proName}>{DATA[id].name}</Text>
          </TouchableOpacity>
          <Image source={DATA[id].rate} />
        </View>
        <View>
          <Text style={styles.proPrice}>{DATA[id].saleprice}</Text>
          <View style={styles.textBottom}>
            <Text style={styles.stockPrice}>{DATA[id].stockprice}</Text>
            <Text style={styles.discountpercent}>
              {DATA[id].discountpercent}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const FavoriteProductScreen = () => {
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoriteProductScreen;

const styles = StyleSheet.create({
  container: {
    width: systemWidth,
    height: systemHeight,
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
    height: 282,
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
  },
  proName: {
    color: '#223263',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  proPrice: {
    color: '#40BFFF',
    fontWeight: 'bold',
  },
  discountpercent: {
    color: '#FB7181',
    fontWeight: 'bold',
    fontSize: 10,
    marginLeft: 15,
  },
  stockPrice: {
    fontSize: 10,
    color: '#9098B1',
  },
  textTop: {
    marginVertical: 15,
  },
  textBottom: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});
