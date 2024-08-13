import {View, Image} from 'react-native';
import {COLORS} from '../../constant/colors';

const IconTimer = () => {
  return (
    <View>
      <Image
        source={require('../../assets/img/icons/timer.png')}
        style={{width: 30, height: 30, tintColor: COLORS.warm}}
      />
    </View>
  );
};

export default IconTimer;
