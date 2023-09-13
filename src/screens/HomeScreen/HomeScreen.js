import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Add, Home, Love, Search, User} from '../../constants/svgPath';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tab}>
          <Home height={30} width={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Love height={30} width={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Search height={30} width={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Add height={30} width={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <User height={30} width={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
