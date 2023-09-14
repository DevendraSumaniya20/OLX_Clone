import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTab: {
    width: '100%',
    height: 70,
    justifyContent: 'space-around',
    backgroundColor: '#258',
    flexDirection: 'row',
    position: 'absolute',
    bottom: moderateScale(0),
    borderRadius: moderateScale(30),
    marginBottom: moderateScale(20),
  },
  tab: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
});
export default styles;
