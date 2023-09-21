import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

import color from '../constants/color';
const CustomHeader = ({
  label,
  onPress,
  back,
  paddingTop = moderateScale(40),
}) => {
  return (
    <View style={[styles.header, {paddingTop}]}>
      <TouchableOpacity style={styles.backBtn} onPress={onPress}>
        <Ionicons name="arrow-back-outline" style={[styles.backBtnText]} />
      </TouchableOpacity>
      <Text style={[styles.label]}>{label}</Text>
      <View style={{width: moderateScale(55)}} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: verticalScale(40),
  },
  backBtn: {
    paddingHorizontal: moderateScale(10),
    padding: verticalScale(5),
  },
  label: {
    flex: 1,
    color: color.white,
    textAlign: 'center',
    fontSize: scale(18),
    fontWeight: '700',
    paddingBottom: verticalScale(5),
  },
  backBtnText: {
    color: color.white,
    fontWeight: '700',
    fontSize: scale(20),
  },
});

export default CustomHeader;
