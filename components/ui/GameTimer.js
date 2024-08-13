import {Text, View} from 'react-native';
import {useState, useEffect} from 'react';
import {COLORS} from '../../constant/colors';

const GameTimer = ({setTimeOut, resetTimer}) => {
  const [timer, setTimer] = useState(70);

  useEffect(() => {
    if (resetTimer) {
      setTimer(70); 
    }
  }, [resetTimer]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        setTimeOut(false);
      } else {
        setTimeOut(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <View>
      <Text style={{color: COLORS.beige, fontWeight: '600', fontSize: 30}}>
        {timer}
      </Text>
    </View>
  );
};

export default GameTimer;
