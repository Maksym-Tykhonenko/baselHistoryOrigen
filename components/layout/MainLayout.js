import {SafeAreaView, View} from 'react-native';

const MainLayout = ({children, style}) => {
  return (
    // <View>
    <SafeAreaView
      style={[
        style,
        {alignItems: 'center', flex: 1, justifyContent: 'center'},
      ]}>
      {children}
    </SafeAreaView>
    // </View>
  );
};

export default MainLayout;
