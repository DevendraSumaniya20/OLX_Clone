import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {moderateScale, scale} from 'react-native-size-matters';
import color from '../constants/color';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import NavigationString from '../constants/NavigationString';

const WishList = ({onGotoHome}) => {
  const items = useSelector(state => state?.wishList);
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    onGotoHome();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        paddingTop={moderateScale(15)}
        label={'Your WishList'}
        onPress={() => {
          goToHomeScreen();
        }}
      />
      <View style={styles.Subcontainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={items.data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.item}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                  <Text style={styles.price}>INR.{item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default WishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Subcontainer: {
    marginTop: moderateScale(20),
  },
  item: {
    width: moderateScale(350),
    height: moderateScale(100),
    backgroundColor: color.white,
    marginTop: moderateScale(5),
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(10),
  },
  itemImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    marginLeft: moderateScale(20),
  },
  name: {
    fontSize: scale(18),
    fontWeight: '600',
    marginLeft: moderateScale(10),
  },
  desc: {
    fontSize: scale(16),
    marginLeft: moderateScale(10),
  },
  price: {
    fontSize: scale(18),
    fontWeight: '600',
    marginLeft: moderateScale(10),
    color: '#00ff96',
  },
});
