import { useState } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

const list = [
  { id: 1, name: 'Robert' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Rob' },
  { id: 4, name: 'Bobert' },
  { id: 5, name: 'Roberto' },
  { id: 6, name: 'Boberto' },
  { id: 7, name: 'Bobby' },
  { id: 8, name: 'Robby' },
];

export default function App() {
  const [people, setPeople] = useState(list);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => (
          <View key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
