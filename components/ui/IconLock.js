import {View, Image} from 'react-native';

const IconLock = () => {
  return (
    <View>
      <Image
        source={require('../../assets/img/icons/padlock1.png')}
        style={{width: 90, height: 90}}
      />
    </View>
  );
};

export default IconLock;
