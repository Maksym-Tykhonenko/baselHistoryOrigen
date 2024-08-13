import {SafeAreaView, StyleSheet, View} from 'react-native';
import {COLORS} from '../../constant/colors';

const GameLayout = ({children}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.subContainer}>
        <SafeAreaView>{children}</SafeAreaView>
      </View>
    </View>
  );
};

export default GameLayout;

const styles = StyleSheet.create({
  rootContainer: {backgroundColor: COLORS.beige, flex: 1, padding: 10},
  subContainer: {
    backgroundColor: COLORS.maroon,
    flex: 1,
    padding: 10,
    borderRadius: 26,
  },
});
