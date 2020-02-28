import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RecyclerList from "./RecyclerList";
import data from "./data.json";

console.log("LIST LENGTH : ", data.length);
export default function App() {
  return (
    <View style={styles.container}>
      <RecyclerList
        style={styles.container}
        name="Ashutosh"
        visibleThreshold={4}
        layout=""
        src={data}
        onRefresh={event => {
          console.log("onRefresh event : ", event.nativeEvent);
          alert("OnRefresh");
        }}
        onEndReach={event => {
          console.log("onEndReach event : ", event.nativeEvent);
          alert("OnRefresh");
        }}
        onClick={event => {
          console.log("onClick event : ", event.nativeEvent);
          alert("Data Clicked : ");
        }}
        onLongClick={event => {
          console.log("onLongClick event : ", event.nativeEvent);
          alert("Loing click");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
});
