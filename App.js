import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("aaron");
  const [age, setAge] = useState("38");
  const [value, onChangeText] = React.useState('Useless Placeholder');


  const clickHandler = () => {
    setName("blob");
    setPerson({ name: "luigi", age: 45 });
  };

  return (
    <View style={styles.container}>
      <Text>Enter Age:</Text>
      <TextInput multiline style={styles.input} placeholder="e.g. john doe" placeholderTextColor='orange' textContentType="emailAddress" onChangeText={(val)=> setName(val)}/>
      <Text>Enter Age:</Text>
      <TextInput keyboardType='numeric' style={styles.input} placeholder="e.g. 100" onChangeText={(val)=> setAge(val)}/>
      <Text>
        name: {name}, age: {age}, value: {value}
      </Text>
          <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  }
});
