import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
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
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>OLX</Text>
        <View style={styles.searchBox}>
          <TextInput placeholder="Search items here" style={styles.input} />
          <Image source={ImagePath.Search} style={styles.icon} />
        </View>
        <View>
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
                  <Text style={styles.listText}>{item.title} </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View>
          <Text style={styles.heading}>Posted Items</Text>
          <FlatList
            data={[1, 1, 1, 1]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.item}>
                  <Image source={ImagePath.NoImage} style={styles.itemImage} />
                  <View>
                    <Text style={styles.name}>{'Iphone 14 pro max'}</Text>
                    <Text style={styles.desc}>{'New bought 5 month ago'}</Text>
                    <Text style={styles.price}>{'INR.' + '70,000'}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
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
    marginBottom: moderateScale(20),
  },
  Imageicon: {
    width: moderateScale(100),
    height: moderateScale(50),
  },
  listText: {
    marginTop: moderateScale(10),
    fontSize: scale(16),
    fontWeight: '600',
  },
  item: {
    width: '90%',
    height: moderateScale(100),
    backgroundColor: '#fff',
    marginTop: moderateScale(5),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: moderateScale(20),
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
