import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { OnboardingContainer } from "@/Screens/Onboarding";
import { RootScreens } from "@/Screens";
import PlaceDetail from "@/Screens/Explore/PlaceDetail";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.ONBOARDING]: undefined;
  [RootScreens.PLACEDETAIL]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootScreens.ONBOARDING}
          component={OnboardingContainer}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.PLACEDETAIL}
          component={PlaceDetail}
          options={{}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
