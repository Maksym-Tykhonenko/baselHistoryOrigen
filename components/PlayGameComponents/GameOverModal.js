import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constant/colors';
import {ModalBtn} from '../ui';
import {GameContext} from '../../store/context';

const GameOverModal = ({
  closeModal,
  restart,
  score,
  level,
  id,
  currentIndex,
  dataLength,
}) => {
  const navigation = useNavigation();
  const {updateLeveScoreAndUnlockNext} = useContext(GameContext);

  const nextLevelOpenCall = () => {
    updateLeveScoreAndUnlockNext(id, score, level);
    navigation.navigate('LevelsScreen', {level: level});
  };

  const mainModeScreen = () => {
    navigation.navigate('ModeScreen');
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.subContainer}>
        <Text
          style={{
            textAlign: 'center',
            color: COLORS.maroon,
            fontWeight: '600',
            fontSize: 20,
            marginVertical: 10,
          }}>
          You achieved {score} points
        </Text>
        <View style={styles.btnContainer}>
          <ModalBtn onPress={closeModal}>CLOSE</ModalBtn>
          <ModalBtn onPress={restart}>RESTART</ModalBtn>
        </View>
        {score > 6 ? (
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '600',
                color: COLORS.maroon,
              }}>
              Congrats. YOU WOOOOON!!!
            </Text>
            <View style={styles.btnContainer}>
              <ModalBtn onPress={nextLevelOpenCall}>NEXT GAME</ModalBtn>
            </View>
          </View>
        ) : (
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '600',
                color: COLORS.maroon,
              }}>
              YOU LOOOOSE
            </Text>
            <View style={styles.btnContainer}>
              <ModalBtn onPress={mainModeScreen}>MENU</ModalBtn>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default GameOverModal;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.maroon,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 40,
    borderWidth: 10,
    borderRadius: 32,
    borderColor: COLORS.orange,
  },
  subContainer: {
    padding: 10,
    backgroundColor: COLORS.mandarin,
    width: '90%',
    borderRadius: 32,
  },
  btnContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 20,
  },
});
