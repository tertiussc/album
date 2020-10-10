import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { } from 'react-native-elements'
// Import Screens
import HomeScreen from './src/screens/HomeScreen'

// create component 
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Home',
    },
  }
);

export default createAppContainer(navigator);