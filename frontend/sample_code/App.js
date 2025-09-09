import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import axios from 'axios';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://<backend-url>/api/tasks/')
      .then(res => setTasks(res.data))
      .catch(console.error);
  }, []);

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
