import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, s, scale} from 'react-native-size-matters';
import ImagePath from '../constants/ImagePath';
import {launchCamera} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../redux/PostSlice';
import color from '../constants/color';
import CustomHeader from '../components/CustomHeader';
import NavigationString from '../constants/NavigationString';
import {useNavigation} from '@react-navigation/native';

const Add = ({onPost}) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const [photo, setPhoto] = useState({
    assets: [
      {
        fileName: '',
        fileSize: 194566,
        height: 1280,
        type: 'image/jpeg',
        uri: '',
        width: 960,
      },
    ],
  });
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        OpenCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const OpenCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if (!result.didCancel) {
      setPhoto(result);
    }
  };

  const addItem = () => {
    dispatch(
      addPost({
        name: name,
        price: price,
        desc: desc,
        image: photo.assets[0].uri,
        category:
          selectedCategory == 0
            ? 'Car'
            : selectedCategory == 1
            ? 'Bike'
            : selectedCategory == 2
            ? 'Laptop'
            : selectedCategory == 3
            ? 'Mobiles'
            : selectedCategory == 4
            ? 'Fourniture'
            : 'House',
      }),
    );
    onPost();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          paddingTop={moderateScale(15)}
          label={'Add Post'}
          onPress={() => {
            navigation.navigate(NavigationString.HOME);
          }}
        />
        <TouchableOpacity
          style={styles.imageView}
          onPress={() => {
            requestCameraPermission();
          }}>
          {photo.assets[0].uri == '' ? (
            <Image source={ImagePath.PlaceHolder} style={styles.imageView} />
          ) : (
            <Image
              source={{uri: photo.assets[0].uri}}
              style={styles.imageView}
            />
          )}
        </TouchableOpacity>
        <TextInput
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          placeholder="Enter Item name"
          placeholderTextColor={color.black}
          style={styles.input}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
        />
        <TextInput
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          value={desc}
          onChangeText={txt => {
            setDesc(txt);
          }}
          placeholder="Enter Item Desc"
          placeholderTextColor={color.black}
          style={[styles.input, {marginTop: moderateScale(10)}]}
        />
        <TextInput
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          value={price}
          onChangeText={txt => {
            setPrice(txt);
          }}
          keyboardType="number-pad"
          placeholderTextColor={color.black}
          placeholder="Enter Item Price"
          style={[styles.input, {marginTop: moderateScale(10)}]}
        />

        <Text style={styles.Categorytitle}>category </Text>

        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(0);
          }}
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: moderateScale(5),
              borderColor: selectedCategory === 0 ? color.white : color.black,
            },
          ]}>
          <Text style={styles.categoryText}>Car</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(1);
          }}
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: moderateScale(5),
              borderColor: selectedCategory === 1 ? color.white : color.black,
            },
          ]}>
          <Text style={styles.categoryText}>Bike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(2);
          }}
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: moderateScale(5),
              borderColor: selectedCategory === 2 ? color.white : color.black,
            },
          ]}>
          <Text style={styles.categoryText}>Laptop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(3);
          }}
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: moderateScale(5),
              borderColor: selectedCategory === 3 ? color.white : color.black,
            },
          ]}>
          <Text style={styles.categoryText}>Mobiles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(4);
          }}
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: moderateScale(5),
              borderColor: selectedCategory === 4 ? color.white : color.black,
            },
          ]}>
          <Text style={styles.categoryText}>Furniture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(5);
          }}
          style={[
            styles.input,
            {
              justifyContent: 'center',
              marginTop: moderateScale(5),
              borderColor: selectedCategory === 5 ? color.white : color.black,
            },
          ]}>
          <Text style={styles.categoryText}>House</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addItem();
          }}>
          <Text style={styles.posttext}>Post</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: scale(20),
    color: '#000',
    fontWeight: 'bold',
  },

  imageView: {
    width: '90%',
    height: moderateScale(130),
    alignSelf: 'center',
    marginTop: moderateScale(20),
    resizeMode: 'contain',
  },
  input: {
    width: '90%',
    height: moderateScale(50),
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(20),
    marginTop: moderateScale(50),
    paddingLeft: moderateScale(20),
    color: color.white,
    fontSize: scale(14),
    borderColor: color.white,
  },
  button: {
    width: '90%',
    height: moderateScale(55),
    alignSelf: 'center',
    marginTop: moderateScale(50),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01d3fa',
    marginBottom: moderateScale(100),
  },
  posttext: {
    color: '#fff',
    fontWeight: '900',
    fontSize: scale(24),
  },
  Categorytitle: {
    fontSize: scale(26),
    color: color.white,
    margin: moderateScale(20),
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: scale(18),
    textAlign: 'center',
    fontWeight: '600',
  },
});
