import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useState, useEffect} from 'react';
import {updateProfile} from '../../store/asyncUtils';
import ImagePicker from '../ui/ImagePicker';
import {Btn, ModalBtn} from '../ui';
import {COLORS} from '../../constant/colors';
import {useNavigation} from '@react-navigation/native';

const Details = ({details}) => {
  const navigation = useNavigation();
  const [isRename, setIsRename] = useState(false);
  const [profileName, setProfileName] = useState(details.name);
  const [profileImage, setProfileImage] = useState(details.image);

  const nameChange = async () => {
    await updateProfile('name', profileName);
    setIsRename(false);
  };

  const replaceImage = async image => {
    setProfileImage(image);
    await updateProfile('image', image);
  };

  return (
    <View>
      {isRename ? (
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
          }}>
          <TextInput
            value={profileName}
            onChangeText={setProfileName}
            style={styles.input}
          />
          <View style={{flexDirection: 'row', width: 200}}>
            <ModalBtn onPress={nameChange}>
              <Text style={{fontSize: 20}}>Save Changes</Text>
            </ModalBtn>
          </View>
        </View>
      ) : (
        <View style={{alignItems: 'center', flex: 1, marginTop: 100, gap: 30}}>
          <TouchableOpacity onPress={() => setIsRename(true)}>
            <Text style={styles.textName}>{profileName}</Text>
          </TouchableOpacity>
          <ImagePicker saveImage={image => replaceImage(image)}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={{uri: profileImage}} style={styles.image} />
              <Text style={{position: 'absolute', fontSize: 18}}>
                Choose Photo
              </Text>
            </View>
          </ImagePicker>
          <Btn onPress={()=>navigation.navigate('MainScreen')}>
            <Text>Main Menu</Text>
          </Btn>
        </View>
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 200,
    borderRadius: 10,
    borderWidth: 1,
    position: 'relative',
    zIndex: 2,
    borderRadius: 90,
  },
  textName: {
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.beige,
    letterSpacing: 5,
  },
  input: {
    borderWidth: 1,
    backgroundColor: COLORS.beige,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: 10,
    minWidth: 100,
    maxWidth: 250,
    borderRadius: 90,
  },
});
