import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import actions from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const ItemCountEditor = ({data}) => {
  const dispatch = useDispatch();
  const getCartItem = useSelector(state => state.getCartItem);
  const [itemCount, setItemCount] = useState(1);

  
  var key = getCartItem.Carts.findIndex(function (item) {
    return item.id == data.id;
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: actions.DECREASE_QUANTITY,
            payload: {
              key: key,
            },
          });
        }}>
        <Image
          style={styles.icon}
          source={require('../../../assets/icon/Minus.png')}
        />
      </TouchableOpacity>
      <View style={styles.textInputContainer}>
        <Text>{data.quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: actions.INCREASE_QUANTITY,
            payload: {
              key: key,
            },
          });
        }}>
        <Image
          style={styles.icon}
          source={require('../../../assets/icon/Plus.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ItemCountEditor;
const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 24,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  icon: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    marginVertical: 4,
    marginHorizontal: 8,
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: '#EBF0FF',
    width: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    textColor: 'black',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    textColor: 'black',
  },
});
