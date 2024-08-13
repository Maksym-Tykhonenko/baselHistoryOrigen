import {View, Image} from 'react-native';
import {COLORS} from '../../constant/colors';

const IconDone = () => {
  return (
    <View>
      <Image
        source={require('../../assets/img/icons/check.png')}
        style={{width: 30, height: 30, tintColor: COLORS.sage}}
      />
    </View>
  );
};

export default IconDone;
