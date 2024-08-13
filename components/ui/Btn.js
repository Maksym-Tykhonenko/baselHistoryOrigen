import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constant/colors';

const Btn = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    width: '80%',
    marginVertical: 20,
    backgroundColor: COLORS.maroon,
    borderRadius: 34,
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30,
    color: COLORS.beige,
  },
});
