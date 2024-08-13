import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {MainBg, MainLayout} from '../components/layout';
import {COLORS} from '../constant/colors';
import {book} from '../data/bookOfKnoladge';

const BookScreen = () => {
  return (
    <MainBg>
      <MainLayout style={{backgroundColor: COLORS.black + 90}}>
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
      </MainLayout>
    </MainBg>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: '600',
    color:COLORS.mandarin
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
    color: COLORS.beige,
    fontWeight: '600',
  },
});
