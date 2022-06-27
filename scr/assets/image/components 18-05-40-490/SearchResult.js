import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import actions from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {shirtData, tshirtData, shoesData} from '../data/productData';

const WIDTH = Dimensions.get('window').width;

const SearchResult = ({navigation, route}) => {
  const DATA = route.params.data;
  const dispatch = useDispatch();
  const getCartItem = useSelector(state => state.getCartItem);

  var allProductData = shirtData;

  const [dataSource] = useState(shirtData);
  const [filtered, setFiltered] = useState([]);
  const [searching, setSearching] = useState(false);
  const onSearch = text => {
    if (text) {
      setSearching(true);
      const temp = text.toLowerCase();
      const tempList = dataSource.filter(item => {
        if (item.name.toLowerCase().includes(temp)) {
          return item.name;
        }
      });
      setFiltered(tempList);
      console.log(temp);
      console.log(tempList);
    } else {
      setSearching(false);
      setFiltered([]);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View
        style={[
          {
            width: (WIDTH - 60) / 2,
            height: 300,
            marginTop: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#EBF0FF',
            padding: 5,
          },
          item.id % 2 === 0 ? {undefined} : {marginRight: 20},
        ]}>
        <Pressable
          onPress={() => navigation.navigate('Product Detail', {data: item})}>
          <Image source={item.url[0]} style={styles.productImage} />
        </Pressable>
        <View style={{marginVertical: 5, height: 80}}>
          <Pressable
            onPress={() => navigation.navigate('Product Detail', {data: item})}>
            <Text style={styles.brandName}>{item.brand}</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Product Detail', {data: item})}>
            <Text style={styles.productName}>{item.name}</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.productPrice}>{item.stockPrice} $</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              dispatch({
                type: 'ADD_TO_CART',
                payload: {
                  id: item.id,
                  name: item.name,
                  url: item.url[0],
                  brandname: item.brand,
                  shippingcost: item.shippingCost,
                  price: item.stockPrice,
                },
              });
            }}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBox}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            filtered.length > 0
              ? navigation.navigate('Search Result', {data: filtered})
              : undefined;
          }}>
          <Image
            style={styles.icon16}
            source={require('../assets/icon/Search.png')}
          />
        </TouchableOpacity>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Search"
            autoCorrect={false}
            onChangeText={onSearch}
          />
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../assets/icon/Shorticon.png')} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </ScrollView>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: WIDTH,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  productImage: {
    borderRadius: 5,
    width: 133,
    height: 133,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  brandName: {
    height: 35,
  },
  productName: {
    color: '#223263',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    color: '#40BFFF',
    fontWeight: 'bold',
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
  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    borderWidth: 1,
    height: 50,
    width: Dimensions.get('window').width - 50,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textInputContainer: {
    flex: 1,
    height: 48,
    justifyContent: 'center',
  },
  itemContainer: {
    marginTop: 10,
    width: '90%',
    height: 60,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    alignSelf: 'center',
  },
});
