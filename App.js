import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: 'aaron', key: 1 },
    { name: 'daniel', key: 2 },
    { name: 'steven', key: 3 },
    { name: 'julie', key: 4 },
    { name: 'hector', key: 5 },
    { name: 'jan', key: 6 },
    { name: 'jody', key: 7 },
  ]);


  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((person)=> {
          return(
            <View key={person.key}>
              <Text style={styles.person}>{person.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center"
  },
  person: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
