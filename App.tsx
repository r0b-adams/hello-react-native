import { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';

const initPeople = [
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
  const [people, setPeople] = useState(initPeople);

  const pressHandler = (id: number) => {
    deleteItem(id);
  };

  const deleteItem = (id: number) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };

  return (
    <View style={styles.container}>
      {people.length ? (
        <FlatList
          numColumns={2}
          data={people}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Button
          title='reload list'
          onPress={() => setPeople(() => initPeople)}
        />
      )}
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
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
