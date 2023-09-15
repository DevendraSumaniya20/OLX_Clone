import {Image, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePath from '../../constants/ImagePath';
import Home from '../../tabs/Home';
import Search from '../../tabs/Search';
import Add from '../../tabs/Add';
import Wishlist from '../../tabs/Wishlist';
import User from '../../tabs/User';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Add
          onPost={() => {
            setSelectedTab(0);
          }}
        />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <User />
      )}
      <View style={styles.bottomTab}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={ImagePath.Home}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 0 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={ImagePath.Search}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 1 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={ImagePath.Add}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 2 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={ImagePath.Heart}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 3 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={ImagePath.User}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 4 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
