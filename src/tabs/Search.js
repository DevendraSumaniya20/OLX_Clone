import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {moderateScale, scale} from 'react-native-size-matters';
import ImagePath from '../constants/ImagePath';
import color from '../constants/color';
import CustomHeader from '../components/CustomHeader';

const Search = ({onGotoHome}) => {
  const navigation = useNavigation();
  const items = useSelector(state => state?.post);
  const [text, setText] = useState('');
  const [itemList, setItemList] = useState(items.data);

  const filterList = txt => {
    let tempList = items.data;
    let temp = tempList.filter(item => {
      return item.name.toLowerCase().match(txt.toLowerCase());
    });
    setItemList(temp);
  };

  const goToHomeScreen = () => {
    onGotoHome();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        paddingTop={moderateScale(15)}
        label={'Search'}
        onPress={() => {
          goToHomeScreen();
        }}
      />
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search items here"
            placeholderTextColor={color.black}
            style={styles.input}
            value={text}
            onChangeText={txt => {
              setText(txt);
              filterList(txt);
            }}
          />
          <Image source={ImagePath.Search} style={styles.icon} />
        </View>
        <View style={{marginTop: moderateScale(20)}}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
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
                    <Text style={styles.desc}>
                      {item.desc.length > 25
                        ? item.desc.slice(0, 25) + '...'
                        : item.desc}
                    </Text>
                    <Text style={styles.price}>INR.{item.price}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

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
    tintColor: 'black',
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
    backgroundColor: color.white,
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
    borderRadius: moderateScale(8),
  },
  name: {
    fontSize: scale(18),
    fontWeight: '800',
    marginLeft: moderateScale(10),
    color: color.black,
  },
  desc: {
    fontSize: scale(16),
    marginLeft: moderateScale(10),
    color: color.black,
    fontWeight: '400',
  },
  price: {
    fontSize: scale(18),
    fontWeight: '600',
    marginLeft: moderateScale(10),
    color: '#00ff96',
  },
});
