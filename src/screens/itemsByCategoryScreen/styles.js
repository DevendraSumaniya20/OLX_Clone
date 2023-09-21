import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import color from '../../constants/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Subcontainer: {
    flex: 1,
    marginTop: moderateScale(20),
  },
  item: {
    width: moderateScale(350),
    height: moderateScale(100),
    backgroundColor: color.white,
    marginTop: moderateScale(5),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(10),
  },
  itemImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    marginLeft: moderateScale(20),
    borderRadius: moderateScale(10),
  },
  name: {
    fontSize: scale(18),
    fontWeight: '900',
    marginLeft: moderateScale(10),
    color: color.black,
  },
  desc: {
    fontSize: scale(16),
    marginLeft: moderateScale(10),
    color: color.black,
    fontWeight: '500',
  },
  price: {
    fontSize: scale(18),
    fontWeight: '600',
    marginLeft: moderateScale(10),
    color: '#00ff96',
  },
});

export default styles;
