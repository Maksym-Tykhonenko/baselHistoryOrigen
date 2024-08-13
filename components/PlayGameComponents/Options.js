import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/colors';

const Options = ({options, onPress, disable, correctOption, currentOption}) => {
  return (
    <>
      {options.map((option, index) => (
        <TouchableOpacity
          onPress={() => onPress(option)}
          disabled={disable}
          key={index}
          style={[
            styles.container,
            {
              backgroundColor:
                option == correctOption
                  ? COLORS.beige
                  : option == currentOption
                  ? COLORS.beige
                  : COLORS.beige,
              borderColor:
                option == correctOption
                  ? COLORS.sage
                  : option == currentOption
                  ? COLORS.red
                  : COLORS.mandarin,
              borderWidth:
                option == correctOption ? 6 : option == currentOption ? 6 : 3,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                color:
                  option == correctOption
                    ? COLORS.sage
                    : option == currentOption
                    ? COLORS.red
                    : COLORS.maroon,
              },
            ]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    marginVertical: 13,
    backgroundColor: COLORS.warm,
    borderRadius: 32,
    padding: 5,
    height: 80,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '800',
    // color: COLORS.darkBlue,
    fontSize: 20,
  },
});
