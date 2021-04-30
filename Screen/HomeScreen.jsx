import React from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";

import OrderScreen from "./OrderScreen";
import CartScreen from "./CartScreen";
import CheckoutScreen from "./CheckoutScreen";
import SetupScreen from "./SetupScreen";

export default function HomeScreen({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "order", title: "Order", icon: "form" },
    { key: "cart", title: "Cart", icon: "shoppingcart", badge: 3 },
    { key: "checkout", title: "Checkout", icon: "export" },
    { key: "setup", title: "Setup", icon: "tool" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    order: OrderScreen,
    cart: CartScreen,
    checkout: CheckoutScreen,
    setup: SetupScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
