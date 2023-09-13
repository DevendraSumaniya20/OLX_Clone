import {StyleSheet} from 'react-native';
import {moderateVerticalScale, scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: scale(40),
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
