import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {MainBg, MainLayout} from '../components/layout';
import {useState, useEffect} from 'react';
import {COLORS} from '../constant/colors';
import {getProfile, submitProfile} from '../store/asyncUtils';
import ImagePicker from '../components/ui/ImagePicker';
import {Btn, ModalBtn} from '../components/ui';
import Details from '../components/ProfileScreen/Details';

const ProfileScreen = () => {
  const [profile, setProfile] = useState(null);
  const [profileInputs, setPfofileInputs] = useState({name: '', image: ''});

  const key = () => Date.now().toString();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchUser();
  }, []);

  const saveInputs = (identifier, newValue) => {
    setPfofileInputs(prev => ({...prev, [identifier]: newValue}));
  };
  const userImage = image => {
    saveInputs('image', image);
  };
  const submit = async () => {
    const {name, image} = profileInputs;
    if (!name.trim()) {
      Alert.alert('Problem', 'Name is invalid');
      return;
    }

    const submitData = {id: key(), name, image};
    try {
      await submitProfile(submitData);
      const updatedData = await getProfile();
      setProfile(updatedData);
    } catch (error) {
      console.error('Failed to submit:', error);
    }
  };

  const resetInputs = () => {
    setPfofileInputs({name: ''});
  };

  return (
    <MainBg>
      <MainLayout style={{backgroundColor: COLORS.black + 90}}>
        {profile ? (
          <Details details={profile} />
        ) : (
          <View style={{width: '90%', alignItems: 'center'}}>
            <Text
              style={{fontSize: 20, color: COLORS.beige, fontWeight: '600'}}>
              Profile Name
            </Text>
            <TextInput
              value={profileInputs.name}
              onChangeText={value => saveInputs('name', value)}
              style={styles.input}
            />
            <View
              style={{
                backgroundColor: COLORS.beige,
                padding: 10,
                borderRadius: 90,
                marginVertical:30
              }}>
              <ImagePicker saveImage={image => userImage(image)}>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.maroon,
                    fontWeight: '600',
                  }}>
                  Choose the photo
                </Text>
              </ImagePicker>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.btnsContainer}>
                <ModalBtn onPress={submit}>Confirm</ModalBtn>
                <ModalBtn onPress={resetInputs}>Cancel</ModalBtn>
              </View>
            </View>
          </View>
        )}
      </MainLayout>
    </MainBg>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  btnsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 20,
    width: 240,
  },
  input: {
    borderWidth: 1,
    backgroundColor: COLORS.beige,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: 10,
    minWidth: 150,
    maxWidth: 250,
    borderRadius: 90,
  },
});
