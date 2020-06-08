import React from 'react';
import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import InitSettings from './components/InitSettings';
import Home from './components/Home';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='InitSettings' screenOptions={{ gestureEnabled: false, headerShown: false }}>
          <Stack.Screen name='Home' component={Home} options={{ title: 'My app' }} />
          <Stack.Screen name='InitSettings' component={InitSettings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
