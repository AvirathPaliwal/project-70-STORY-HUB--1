import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import ReadStoryScreen from './screen/ReadStoryScreen';
import WriteStoryScreen from './screen/WriteStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context'



export default class App extends React.Component{
   render(){
    return (
      <SafeAreaProvider>
    
      <AppContainer/>

      </SafeAreaProvider>
    
   );
  }
  
}

const TabNavigator = createBottomTabNavigator({
  WriteStory:{screen:WriteStoryScreen},
  ReadStory:{screen:ReadStoryScreen},
},
{defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    console.log(routeName)
    if(routeName === "ReadStory"){
      return(
        <Image
        source={require("./assets/read.png")}
        style={{width:35, height:35}}
       />
      )
      
    }
    else if(routeName === "WriteStory"){
      return(
        <Image
        source={require("./assets/write.png")}
        style={{width:35, height:35}}
       />
      )
      
    }
  }
})
}
);
const AppContainer = createAppContainer(TabNavigator);