{
  /**import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{}}>Welcome to React Native!</Text>
    </View>
  );
};

export default App;

 */
}

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {GameProvider} from './store/context';
import {
  BookScreen,
  FlashScreen,
  LevelsScreen,
  MainScreen,
  ModeScreen,
  PlayGameScreen,
  ProfileScreen,
} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="FlashScreen" component={FlashScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="ModeScreen" component={ModeScreen} />
          <Stack.Screen name="LevelsScreen" component={LevelsScreen} />
          <Stack.Screen name="PlayGameScreen" component={PlayGameScreen} />
          <Stack.Screen name="BookScreen" component={BookScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}

export default App;
{
  /**
   */
}
