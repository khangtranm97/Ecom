import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

import AccountList from './components/AccountList';
import {useSelector} from 'react-redux';
import userData from '../../data/userData.js';
const userId = 'user0001';
const AccountScreen = () => {
  const getInformationUser = useSelector(state => state.getInformationUser);
  var data = getInformationUser;

  return (
    <SafeAreaView style={styles.container}>
      <AccountList data={data} />
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
