import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTab: {
    width: '100%',
    height: moderateScale(70),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#258',
    flexDirection: 'row',
    position: 'absolute',
    bottom: moderateScale(0),
  },
  tab: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
