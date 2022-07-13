import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum dolor sit amet</Text>
        <Text>Lorem ipsum dolor sit amet</Text>
        <Text>Lorem ipsum dolor sit amet</Text>
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
});
