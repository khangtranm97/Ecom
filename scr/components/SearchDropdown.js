import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {shirtData, tshirtData, shoesData} from '../data/productData';
import {useNavigation} from '@react-navigation/native';

const SearchDropdown = () => {
  const navigation = useNavigation();
  var allProductData = [];
  shirtData.map(item => {
    allProductData.push(item);
  });
  tshirtData.map(item => {
    allProductData.push(item);
  });
  shoesData.map(item => {
    allProductData.push(item);
  });

  const [dataSource] = useState(allProductData);
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
    } else {
      setSearching(false);
      setFiltered([]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.searchBordered}>
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
        </View>
        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{color: '#9098B1'}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {filtered.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Product Detail', {data: item});
              }}>
              <View style={styles.itemContainer}>
                <View style={{left: 20}}>
                  <Text style={{color: '#9098B1'}}>{item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchDropdown;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#FFF',
  },

  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  searchBordered: {
    height: 50,
    width: Dimensions.get('window').width - 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    flexDirection: 'row',
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
  backButton: {
    height: 50,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
