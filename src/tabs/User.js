import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ImagePath from '../constants/ImagePath';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import color from '../constants/color';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import NavigationString from '../constants/NavigationString';

const User = ({onGotoHome, onGotoSearch, onGotoWishList}) => {
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    onGotoHome();
  };

  const goToSearchScreen = () => {
    onGotoSearch();
  };

  const goToWishScreen = () => {
    onGotoWishList();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        paddingTop={moderateScale(15)}
        label={'Profile'}
        onPress={() => {
          onGotoHome();
        }}
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={ImagePath.ProfilePicture} style={styles.imageStyle} />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.userNameText}>Devendra Sumaniya</Text>
        </View>
        <View style={styles.lineContainer}></View>
        <View style={styles.boxmainContainer}>
          <View style={styles.box1Container}>
            <TouchableOpacity
              onPress={() => {
                goToHomeScreen();
              }}>
              <Image
                source={ImagePath.Home}
                style={styles.box1ContainerImage}
              />
              <Text style={styles.box1ContainerText}>Home</Text>
              <Text style={styles.box1ContainerText2}>my Post</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box1Container}>
            <TouchableOpacity
              onPress={() => {
                goToSearchScreen();
              }}>
              <Image
                source={ImagePath.Search}
                style={styles.box1ContainerImage}
              />
              <Text style={styles.box1ContainerText}>Search</Text>
              <Text style={styles.box1ContainerText2}>My Search</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box1Container}>
            <TouchableOpacity
              onPress={() => {
                goToWishScreen();
              }}>
              <Image
                source={ImagePath.Heart}
                style={styles.box1ContainerImage}
              />
              <Text style={styles.box1ContainerText}>WishList</Text>
              <Text style={styles.box1ContainerText2}>my WishList</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Bottom container */}
        <View style={styles.boxmainContainer2}>
          <TouchableOpacity>
            <View style={styles.box2Container}>
              <Image
                source={ImagePath.Wallet}
                style={styles.box1ContainerImage}
              />
              <View>
                <Text>Packages</Text>
                <Text>Pakages, Order, and Billing Invoices</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box2Container}>
              <Image
                source={ImagePath.Blog}
                style={styles.box1ContainerImage}
              />
              <View>
                <Text>Blog</Text>
                <Text>Latest news , articles and more</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box2Container}>
              <Image
                source={ImagePath.Help}
                style={styles.box1ContainerImage}
              />
              <View>
                <Text>Help and Support</Text>
                <Text>Help Center and Legal terms</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box2Container}>
              <Image
                source={ImagePath.Setting}
                style={styles.box1ContainerImage}
              />
              <View>
                <Text>Setting</Text>
                <Text>Prifile information and Privacy</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box2Container}>
              <Image
                source={ImagePath.Bell}
                style={styles.box1ContainerImage}
              />
              <View>
                <Text>Notification</Text>
                <Text>Notification Setting</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    height: moderateScale(150),
    width: moderateScale(150),
    marginTop: moderateScale(10),
    borderRadius: moderateScale(100),
    borderWidth: moderateScale(5),
    borderColor: '#a30500',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(10),
  },
  TextContainer: {
    flexDirection: 'row',
  },
  userNameText: {
    fontSize: scale(26),
    fontWeight: 'bold',
    color: '#000',
  },
  lineContainer: {
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: moderateScale(350),
    marginTop: moderateScale(10),
  },
  boxmainContainer: {
    flexDirection: 'row',
    width: moderateScale(400),
    justifyContent: 'space-evenly',
    marginTop: moderateScale(12),
    alignItems: 'center',
  },
  box1Container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: moderateScale(20),
    width: moderateScale(100),
    padding: moderateScale(10),
  },
  box1ContainerImage: {
    alignSelf: 'center',
    width: moderateScale(30),
    height: moderateScale(30),
    tintColor: '#01d3fa',
    marginBottom: moderateScale(4),
  },
  box1ContainerText: {
    fontSize: scale(14),
    fontWeight: '700',
    color: color.black,
    textAlign: 'center',
    marginBottom: moderateScale(4),
  },
  box1ContainerText2: {
    fontSize: scale(12),
    fontWeight: '400',
    color: color.blackOpacity50,
    textAlign: 'center',
    marginBottom: moderateScale(4),
  },

  boxmainContainer2: {
    borderRadius: moderateScale(9),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
    width: moderateScale(340),
    height: moderateScale(300),
    paddingVertical: moderateVerticalScale(10),
    backgroundColor: color.white,
  },
  box2Container: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    width: moderateScale(310),
    gap: moderateScale(10),
  },
});
