import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MainBg, MainLayout} from '../components/layout';
import {COLORS} from '../constant/colors';
import {book} from '../data/bookOfKnoladge';
//<MainBg> </MainBg>;
//backgroundColor: COLORS.black + 90
const BookScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../assets/apgr/bcgr.png')}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 10}}>
          {book.map((story, i) => (
            <View key={i}>
              <View>
                <Text style={styles.header}>{story.topic}</Text>
                <Text style={styles.text}>{story.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: '600',
    color: COLORS.mandarin,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
    color: COLORS.beige,
    fontWeight: '600',
  },
});
