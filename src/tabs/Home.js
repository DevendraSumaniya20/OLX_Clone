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
import React, {useState} from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import ImagePath from '../constants/ImagePath';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import NavigationString from '../constants/NavigationString';
import {addToWishList} from '../redux/WishListSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.post);
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [itemList, setItemList] = useState(items.data);
  const [isLike, setIsLike] = useState(false);

  const filterList = txt => {
    let tempList = items.data;
    let temp = tempList.filter(item => {
      return item.name.toLowerCase().match(txt.toLowerCase());
    });
    setItemList(temp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>OLX</Text>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search items here"
          style={styles.input}
          value={text}
          onChangeText={txt => {
            setText(txt);
            filterList(txt);
          }}
        />
        <Image source={ImagePath.Search} style={styles.icon} />
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.heading}>what are you looking for?</Text>
        <FlatList
          numColumns={3}
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={[
            {title: 'Car', icon: ImagePath.Car},
            {title: 'Bike', icon: ImagePath.Bikes},
            {title: 'Laptop', icon: ImagePath.Laptop},
            {title: 'Mobile', icon: ImagePath.SmartPhone},
            {title: 'Furniture', icon: ImagePath.Furniture},
            {title: 'House', icon: ImagePath.House},
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(NavigationString.ITEMBYCATEGORY, {
                    category: item.title,
                  });
                }}
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

        <Text style={styles.heading}>Posted Items</Text>
        <FlatList
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={itemList}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.item}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                  <Text style={styles.price}>INR.{item.price}</Text>
                </View>
                <TouchableOpacity
                  style={styles.wishList}
                  onPress={() => {
                    dispatch(addToWishList(item));
                    {
                      if (isLike == true) {
                        setIsLike(false);
                      } else {
                        setIsLike(true);
                      }
                    }
                  }}>
                  {/* <Image source={ImagePath.Heart} style={styles.icon} /> */}
                  <AntDesign
                    name={!isLike ? 'hearto' : 'heart'}
                    size={25}
                    color={!isLike ? 'black' : 'red'}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      </View>
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
    width: moderateScale(350),
    height: moderateScale(100),
    backgroundColor: '#fff',

    marginTop: moderateScale(5),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(10),
  },
  itemImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    marginLeft: moderateScale(20),
    borderRadius: moderateScale(10),
  },
  name: {
    fontSize: scale(18),
    fontWeight: '900',
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
  wishList: {
    position: 'absolute',
    right: moderateScale(20),
    top: moderateScale(35),
  },
});
