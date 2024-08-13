import {MainBg, MainLayout} from '../components/layout';
import {COLORS} from '../constant/colors';
import {Btn} from '../components/ui';

const ModeScreen = ({navigation}) => {
  return (
    <MainBg style={{flex: 1, backgroundColor: COLORS.black + 90}}>
      <MainLayout>
        <Btn
          onPress={() => navigation.navigate('LevelsScreen', {level: 'easy'})}>
          EASY
        </Btn>
        <Btn
          onPress={() => navigation.navigate('LevelsScreen', {level: 'hard'})}>
          HARD
        </Btn>
      </MainLayout>
    </MainBg>
  );
};

export default ModeScreen;
