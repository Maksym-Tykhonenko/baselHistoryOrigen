import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constant/colors';

const ModalBtn = ({children, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.container]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ModalBtn;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    marginVertical: 10,
    backgroundColor: COLORS.beige,
    borderRadius: 22,
    paddingHorizontal: 15,
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    color: COLORS.maroon,
  },
});
