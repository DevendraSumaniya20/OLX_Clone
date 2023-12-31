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
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5, 0.6]}
      colors={['#01d3fa', '#c74d97', '#e20c75']}
      style={styles.container}>
      <View style={styles.container}>
        {selectedTab == 0 ? (
          <Home />
        ) : selectedTab == 1 ? (
          <Search
            onGotoHome={() => {
              setSelectedTab(0);
            }}
          />
        ) : selectedTab == 2 ? (
          <Add
            onPost={() => {
              setSelectedTab(0);
            }}
          />
        ) : selectedTab == 3 ? (
          <Wishlist
            onGotoHome={() => {
              setSelectedTab(0);
            }}
          />
        ) : (
          <User
            onGotoHome={() => {
              setSelectedTab(0);
            }}
            onGotoSearch={() => {
              setSelectedTab(1);
            }}
            onGotoWishList={() => {
              setSelectedTab(3);
            }}
          />
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
                {tintColor: selectedTab == 0 ? '#fff' : '#000'},
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
                {tintColor: selectedTab == 1 ? '#fff' : '#000'},
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
                {tintColor: selectedTab == 2 ? '#fff' : '#000'},
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
                {tintColor: selectedTab == 3 ? '#fff' : '#000'},
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
                {tintColor: selectedTab == 4 ? '#fff' : '#000'},
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
