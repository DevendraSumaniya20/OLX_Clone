import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePath from '../../constants/ImagePath';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tab}>
          <Image source={ImagePath.Home} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={ImagePath.Search} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={ImagePath.Add} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={ImagePath.Heart} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={ImagePath.User} style={styles.tabIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
