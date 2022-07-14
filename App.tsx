import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('bob');

  const toggleName = () => {
    name === 'bob' ? setName(() => 'robert') : setName(() => 'bob');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text>Hi! my name is {name}!</Text>
      </View>
      <View style={styles.button}>
        <Button title='toggle name' onPress={toggleName} />
      </View>
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
  header: {
    backgroundColor: 'salmon',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'chartreuse',
    padding: 20,
  },
  button: {
    borderRadius: 5,
    color: 'red',
  },
});
