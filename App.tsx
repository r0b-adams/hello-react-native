import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('bob');
  const [age, setAge] = useState('999');

  const handleNameChange = (text: string) => setName(() => text);

  const handleAgeChange = (text: string) => setAge(() => text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder='Please enter a name...'
        onChangeText={handleNameChange}
      />
      <Text> name: {name}</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Please enter an age...'
        onChangeText={handleAgeChange}
      />
      <Text> age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
