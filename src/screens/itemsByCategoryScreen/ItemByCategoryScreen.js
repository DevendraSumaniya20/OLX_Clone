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
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../components/CustomHeader';
import NavigationString from '../../constants/NavigationString';
import {moderateScale} from 'react-native-size-matters';

const ItemByCategoryScreen = () => {
  const navigation = useNavigation();

  const items = useSelector(state => state?.post);

  const route = useRoute();
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    let tempData = items.data;
    let temp = [];

    tempData.map(item => {
      if (item.category == route.params.category) {
        temp.push(item);
      }
    });
    setItemList(temp);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.5, 0.6]}
        colors={['#01d3fa', '#c74d97', '#e20c75']}
        style={styles.container}>
        <View style={styles.Subcontainer}>
          <CustomHeader
            paddingTop={moderateScale(10)}
            label={'Items'}
            onPress={() => {
              navigation.navigate(NavigationString.HOME);
            }}
          />

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{paddingBottom: moderateScale(20)}}
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
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ItemByCategoryScreen;
