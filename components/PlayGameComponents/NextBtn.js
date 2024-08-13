import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constant/colors';

const NextBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>NEXT</Text>
    </TouchableOpacity>
  );
};

export default NextBtn;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.sage,
    borderRadius: 22,
    marginVertical: 15,
  },
  text: {
    color: COLORS.beige,
    fontSize: 26,
    letterSpacing: 3,
    fontWeight: '700',
  },
});
