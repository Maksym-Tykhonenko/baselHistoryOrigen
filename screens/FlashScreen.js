import {StyleSheet, Text, View, Animated} from 'react-native';
import {useEffect, useRef} from 'react';
import {MainBg, MainLayout} from '../components/layout';
import {Btn} from '../components/ui';
import {COLORS} from '../constant/colors';

const FlashScreen = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => navigation.replace('MainScreen'));
  }, [animation]);
  return (
    <MainBg>
      <MainLayout>
        <View style={{marginBottom: '70%'}}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              fontWeight: '800',
              color: COLORS.maroon,
            }}>
            YOU ARE WELCOME{' '}!!!
          </Text>
          <Text style={styles.text}>BASEL HISTORY QUIZ</Text>
        </View>
        {/* <Btn onPress={() => navigation.navigate('MainScreen')}>MAIN PAGE</Btn> */}
      </MainLayout>
    </MainBg>
  );
};

export default FlashScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 55,
    fontWeight: '800',
    textAlign: 'center',
    color: COLORS.maroon,
    marginVertical: 20,
  },
});
