import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './App'
import login from './menulogin'

const AppNavigator = createStackNavigator({

    Home: {
        screen: login,
        navigationOptions: {
            header: null,
        },
    },
    App: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },

});

export default createAppContainer(AppNavigator);
