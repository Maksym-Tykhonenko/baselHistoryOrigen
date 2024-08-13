import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeQuizzData = async (data, level) => {
  try {
    await AsyncStorage.setItem(level, JSON.stringify(data));
  } catch (error) {
    console.log('Data saving error', error);
    return [];
  }
};

export const fetchGameData = async level => {
  try {
    const data = await AsyncStorage.getItem(level);
    return data != null ? JSON.parse(data) : [];
  } catch (error) {
    console.log('Data fetching error', error);
    return [];
  }
};

export const submitProfile = async userData => {
  try {
    await AsyncStorage.setItem('profile', JSON.stringify(userData));
  } catch (error) {
    console.error('pfofile save failed:', error);
  }
};

export const getProfile = async () => {
  try {
    const user = await AsyncStorage.getItem('profile');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('profile get failed:', error);
  }
};
export const updateProfile = async (key, value) => {
  try {
    const user = await getProfile();
    if (user) {
      user[key] = value;
      await AsyncStorage.setItem('profile', JSON.stringify(user));
    }
  } catch (error) {
    console.error(`profile update failed ${key}:`, error);
  }
};
