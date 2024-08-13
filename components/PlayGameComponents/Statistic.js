import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/colors';
import {IconDone} from '../ui';
import GameTimer from '../ui/GameTimer';
import IconTimer from '../ui/IconTimer';

const Statistic = ({
  score,
  length,
  currentIndex,
  level,
  setTimeOut,
  resetTimer,
}) => {
  if (!level) {
    return null;
  }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.doneContainer}>
        <Text style={[styles.text, {color: COLORS.sage}]}>{score}</Text>
        <IconDone />
      </View>

      {level === 'hard' && (
        <View
          style={{justifyContent: 'center', alignItems: 'center', width: 40}}>
          <IconTimer />
          <GameTimer setTimeOut={setTimeOut} resetTimer={resetTimer} />
        </View>
      )}
      <Text style={styles.text}>
        {currentIndex}/{length}
      </Text>
    </View>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    borderRadius: 32,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
  },
  text: {
    fontWeight: '800',
    fontSize: 26,
    color: COLORS.warm,
    marginHorizontal: 2,
    textAlign: 'center',
  },
  doneContainer: {
    alignItems: 'center',
    position: 'relative',
    backgroundColor: COLORS.bamboo,
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
});
