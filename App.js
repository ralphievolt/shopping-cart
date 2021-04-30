import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";

import HomeScreen from "./Screen/HomeScreen";
import OrderScreen from "./Screen/OrderScreen";
import CustomNavigationBar from "./Components/CustomNavigationBar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <AntDesign {...props} />,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: CustomNavigationBar,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
