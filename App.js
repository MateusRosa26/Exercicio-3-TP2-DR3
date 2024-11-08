import React from 'react';
import { StyleSheet, View } from 'react-native';
import Grid from './components/Grid';

const App = () => {
  const items = [
    { id: '1', image: 'https://via.placeholder.com/150' },
    { id: '2', image: 'https://via.placeholder.com/150' },
    { id: '3', image: 'https://via.placeholder.com/150' },
    { id: '4', image: 'https://via.placeholder.com/150' },
    { id: '5', image: 'https://via.placeholder.com/150' },
    { id: '6', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <View style={styles.container}>
      <Grid items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
});

export default App;

