import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImagePath from '../constants/ImagePath';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ImagePath.NoImage} style={styles.imageStyle} />
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.userNameText}>Devendra Sumaniya</Text>
      </View>
      <View style={styles.lineContainer}></View>
      <View style={styles.boxmainContainer}>
        <View style={styles.box1Container}>
          <TouchableOpacity>
            <Image source={ImagePath.Home} style={styles.box1ContainerImage} />
            <Text style={styles.box1ContainerText}>Home</Text>
            <Text style={styles.box1ContainerText2}>my Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box1Container}>
          <TouchableOpacity>
            <Image source={ImagePath.Home} style={styles.box1ContainerImage} />
            <Text style={styles.box1ContainerText}>Search</Text>
            <Text style={styles.box1ContainerText2}>My Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box1Container}>
          <TouchableOpacity>
            <Image source={ImagePath.Home} style={styles.box1ContainerImage} />
            <Text style={styles.box1ContainerText}>WishList</Text>
            <Text style={styles.box1ContainerText2}>my WishList</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Bottom container */}
      <View style={styles.boxmainContainer2}>
        <View style={styles.box2Container}>
          <Image source={ImagePath.Wallet} style={styles.box1ContainerImage} />
          <View>
            <Text>Packages</Text>
            <Text>Pakages, Order, and Billing Invoices</Text>
          </View>
        </View>

        <View style={styles.box2Container}>
          <Image source={ImagePath.Blog} style={styles.box1ContainerImage} />
          <View>
            <Text>Madara</Text>
            <Text>Latest news , articles and more</Text>
          </View>
        </View>

        <View style={styles.box2Container}>
          <Image source={ImagePath.Help} style={styles.box1ContainerImage} />
          <View>
            <Text>Help and Support</Text>
            <Text>Help Center and Legal terms</Text>
          </View>
        </View>

        <View style={styles.box2Container}>
          <Image source={ImagePath.Setting} style={styles.box1ContainerImage} />
          <View>
            <Text>Setting</Text>
            <Text>Prifile information and Privacy</Text>
          </View>
        </View>
        <View style={styles.box2Container}>
          <Image source={ImagePath.Bell} style={styles.box1ContainerImage} />
          <View>
            <Text>Notification</Text>
            <Text>Notification Setting</Text>
          </View>
        </View>
      </View>
    </View>
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
    marginTop: moderateScale(50),
    borderRadius: moderateScale(100),
    borderWidth: 5,
    borderColor: '#0000ff',
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
    marginTop: moderateScale(20),
  },
  boxmainContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: moderateScale(16),
  },
  box1Container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: moderateScale(20),
    width: moderateScale(100),
    padding: moderateScale(10),
  },
  box1ContainerImage: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  box1ContainerText: {
    fontSize: scale(14),
    fontWeight: '700',
    color: '#000',
    alignItems: 'center',
  },
  box1ContainerText2: {
    fontSize: scale(12),
    fontWeight: '400',
    color: 'gray',
    alignItems: 'center',
  },

  boxmainContainer2: {
    borderRadius: moderateScale(9),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(30),
    width: moderateScale(350),
    height: moderateScale(250),
    paddingVertical: moderateVerticalScale(10),
  },
  box2Container: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    width: moderateScale(310),
    gap: moderateScale(10),
  },
});
