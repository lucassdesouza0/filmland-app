import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from '../pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {screen: MainScreen},
    },
    {
      initialRouteName: 'Main',
    },
  ),
);

export default Routes;
