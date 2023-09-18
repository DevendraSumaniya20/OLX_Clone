import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: moderateScale(350),
    height: moderateScale(100),
    backgroundColor: '#eee',
    marginTop: moderateScale(5),
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(10),
  },
  itemImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    marginLeft: moderateScale(20),
  },
  name: {
    fontSize: scale(18),
    fontWeight: '600',
    marginLeft: moderateScale(10),
  },
  desc: {
    fontSize: scale(16),
    marginLeft: moderateScale(10),
  },
  price: {
    fontSize: scale(18),
    fontWeight: '600',
    marginLeft: moderateScale(10),
    color: 'green',
  },
});

export default styles;
