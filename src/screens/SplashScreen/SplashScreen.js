import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import NavigationString from '../../constants/NavigationString';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NavigationString.HOME);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>OLX</Text>
    </View>
  );
};

export default SplashScreen;
