// createBottomTabNavigator 
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
// tabs选项卡
import  { createBottomTabNavigator } from 'react-navigation-tabs'
// 抽屉
import {createDrawerNavigator} from 'react-navigation-drawer'
import Home from './Home'
import Details from './Details'
const route = createStackNavigator({
  Home:{
    screen:Home
  },
  Details:{
      screen:Details
  }
}, {
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      // backgroundColor: '#f4511e',
    },
    // headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },

})

const tabsRouter = createBottomTabNavigator({
  Home:{
    screen:Home
  },
  Details:{
      screen:Details
  }
}, {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#f0f',
      style :{
        backgroundColor:'orange'
      }
    }
})

const drewRouter = createDrawerNavigator({
  Home:{
    screen:Home
  },
  Details:{
      screen:Details
  }
},{
  drawerBackgroundColor : 'red',
  drawerType :"front"
})
export default createAppContainer(tabsRouter)