import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../constant/colors';

const Questions = ({question}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question}</Text>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.maroon,
    paddingVertical: 10,
    borderRadius: 32,
    height: 150,
    justifyContent:'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.warm,
  },
});
