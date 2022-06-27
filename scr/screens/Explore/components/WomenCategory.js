import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';

const DATA = [
  {
    id: 1,
    text: 'Dress',
    url: require('../../../assets/icon/Dress.png'),
  },
  {
    id: 2,
    text: 'Women T-Shirt',
    url: require('../../../assets/icon/WomenTShirt.png'),
  },
  {
    id: 3,
    text: 'Women Pants',
    url: require('../../../assets/icon/WomenPants.png'),
  },
  {
    id: 4,
    text: 'Skirt',
    url: require('../../../assets/icon/Skirt.png'),
  },
  {
    id: 5,
    text: 'Women Bag',
    url: require('../../../assets/icon/WomenBag.png'),
  },
  {
    id: 6,
    text: 'High Heels',
    url: require('../../../assets/icon/HighHeels.png'),
  },
  {
    id: 7,
    text: 'Bikini',
    url: require('../../../assets/icon/Bikini.png'),
  },
];
const WIDTH = Dimensions.get('window').width - 40;
const HEIGHT = Dimensions.get('window').height;
const numColumns = 3;

const Item = ({item}) => {
  if (item.empty) {
    return <View style={(styles.itemEmpty, styles.categoryIcon)} />;
  }
  return (
    <View style={styles.flatListContainer}>
      <View style={styles.categoryIcon}>
        <View style={styles.rectangle}>
          <Image source={require('../../../assets/icon/Circle.png')} />
          <TouchableOpacity style={styles.touchable}>
            <Image style={styles.productIcon} source={item.url} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.iconText}>{item.text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const formatData = (DATA, numColumns) => {
  const totalRows = Math.floor(DATA.length / numColumns);
  let totalLastRow = DATA.length - totalRows * numColumns;

  while (totalLastRow !== 0 && totalLastRow !== numColumns) {
    DATA.push({id: 'blank', empty: true});
    totalLastRow++;
  }
  return DATA;
};
const MenCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Women Fashion</Text>
      <View>
        <FlatList
          data={formatData(DATA, numColumns)}
          renderItem={Item}
          keyExtractor={(item, id) => id.toString()}
          numColumns={numColumns}
        />
      </View>
    </View>
  );
};

export default MenCategory;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    alignSelf: 'center',
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#223263',
    alignSelf: 'flex-start',
  },
  itemEmpty: {
    backgroundColor: 'transparent',
  },
  categoryIcon: {
    width: 70,
    height: 108,
    alignItems: 'center',

    flex: 1,
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
