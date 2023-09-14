import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import ImagePath from '../constants/ImagePath';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>OLX</Text>
      <View style={styles.searchBox}>
        <TextInput placeholder="Search items here" style={styles.input} />
        <Image source={ImagePath.Search} style={styles.icon} />
      </View>
      <Text style={styles.heading}>what are you looking for?</Text>
      <FlatList
        numColumns={3}
        data={[
          {title: 'Car', icon: ImagePath.Car},
          {title: 'Bikes', icon: ImagePath.Bikes},
          {title: 'Laptops', icon: ImagePath.Laptop},
          {title: 'Mobiles', icon: ImagePath.SmartPhone},
          {title: 'Furnitures', icon: ImagePath.Furniture},
          {title: 'House', icon: ImagePath.House},
        ]}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: Dimensions.get('window').width / 3,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#DEDEDE',
                margin: moderateScale(2),
              }}>
              <Image
                source={item.icon}
                style={styles.Imageicon}
                resizeMethod="auto"
                resizeMode="contain"
              />
              {/* <Text>{item.title} </Text> */}
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: scale(40),
    fontWeight: 'bold',
    color: 'blue',
    marginTop: moderateScale(20),
    marginLeft: moderateScale(20),
  },
  searchBox: {
    alignSelf: 'center',
    marginTop: moderateScale(30),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    width: '90%',
    height: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '86%',
    marginLeft: moderateScale(10),
  },
  icon: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  heading: {
    fontSize: scale(20),
    marginLeft: moderateScale(20),
    color: 'black',
    fontWeight: 'bold',
    marginTop: moderateScale(36),
  },
  Imageicon: {
    width: moderateScale(100),
    height: moderateScale(50),
  },
});
