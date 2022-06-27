import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const SortOptions = ({route}) => {
  const [isPress, setPressed] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.sortItem}
        onPress={() => {
          route.params.getSort('bestmatch');
          navigation.goBack();
        }}>
        <Text style={styles.sortText}>Best Match</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sortItem}
        onPress={() => {
          route.params.getSort('lastest');
          navigation.goBack();
        }}>
        <Text style={styles.sortText}>Lastest Arrivals</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sortItem}
        onPress={() => {
          route.params.getSort('trending');
          navigation.goBack();
        }}>
        <Text style={styles.sortText}>Trending</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sortItem}
        onPress={() => {
          route.params.getSort('lowtohigh');
          navigation.goBack();
        }}>
        <Text style={styles.sortText}>Price: Low to High</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sortItem}
        onPress={() => {
          route.params.getSort('hightolow');
          navigation.goBack();
        }}>
        <Text style={styles.sortText}>Price: High to Low</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SortOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  sortItem: {
    height: 50,
    justifyContent: 'center',
  },
  pressedSortItem: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#EBF0FF',
  },
  sortText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  pressedText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#40BFFF',
  },
});
