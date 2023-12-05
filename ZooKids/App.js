import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import CreateAccount from './src/pages/CreateAccount/Index';
import Login from './src/pages/Login/Index';
import Initial from './src/pages/Initial/Index';
import Loading from './src/pages/Loading/Index';
import Before from './src/pages/Before/Index';
import After from './src/pages/After/Index';
import Welcome from './src/pages/Welcome/Index';
import Tabs from "./tabs";

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Loading" 
        component={Loading}
        options={{
          title: 'Loading',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen 
        name="Welcome" 
        component={Welcome}
        options={{
          title: 'Welcome',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen 
        name="CreateAccount" 
        component={CreateAccount} 
        options={{
          title: 'CreateAccount',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }} 
      />
      <Stack.Screen 
        name="Initial" 
        component={Initial}
        options={{
          title: 'Initial',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen 
        name="Before" 
        component={Before}
        options={{
          title: 'Before',
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen 
        name="After" 
        component={After}
        options={{
          title: 'After',
          // ...TransitionPresets.ScaleFromCenterAndroid 
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen 
       name="Tabs" 
       component={Tabs}
       options={{
         title: 'Tabs',
         cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
       }}
     />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

