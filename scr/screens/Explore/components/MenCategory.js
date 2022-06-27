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
    text: 'Men Shirts',
    url: require('../../../assets/icon/MenShirt.png'),
  },
  {
    id: 2,
    text: 'Man Bag',
    url: require('../../../assets/icon/ManBag.png'),
  },
  {
    id: 3,
    text: 'Men T-Shirt',
    url: require('../../../assets/icon/TShirt.png'),
  },
  {
    id: 4,
    text: 'Men Shoes',
    url: require('../../../assets/icon/MenShoes.png'),
  },
  {
    id: 5,
    text: 'Men Pants',
    url: require('../../../assets/icon/MenPant.png'),
  },
  {
    id: 6,
    text: 'Men Underwear',
    url: require('../../../assets/icon/MenUnderwear.png'),
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
      <Text style={styles.headerText}>Men Fashion</Text>
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
