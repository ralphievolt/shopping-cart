import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import { List, Surface } from "react-native-paper";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  // <View style={styles.item}>
  //   <Text style={styles.title}>{title}</Text>
  // </View>

  <Surface style={styles.surface}>
    <List.Item
      title={title}
      description="Item description"
      // left={(props) => <List.Icon {...props} icon="folder" />}
    />
  </Surface>
);

export default function OrderScreen() {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    // <View style={styles.container}>
    //   <Surface style={styles.surface}>
    //     <List.Item
    //       title="First Item"
    //       description="Item description"
    //       left={(props) => <List.Icon {...props} icon="folder" />}
    //     />
    //   </Surface>
    //   <Surface style={styles.surface}>
    //     <List.Item
    //       title="First Item"
    //       description="Item description"
    //       left={(props) => <List.Icon {...props} icon="folder" />}
    //     />
    //   </Surface>
    // </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  surface: {
    elevation: 4,
    marginTop: 4,
  },
});
