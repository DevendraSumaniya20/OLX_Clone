import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {moderateScale, scale} from 'react-native-size-matters';

const WishList = () => {
  const items = useSelector(state => state?.wishList);

  return (
    <View style={styles.container}>
      <View style={{marginTop: moderateScale(20)}}>
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
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    width: moderateScale(350),
    height: moderateScale(100),
    backgroundColor: '#eee',
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
    color: 'green',
  },
});
