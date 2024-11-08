import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GridItem from './GridItem';

const Grid = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <GridItem image={item.image} />}
      keyExtractor={item => item.id}
      numColumns={2} // Define o número de colunas
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    justifyContent: 'center',
  },
});

export default Grid;
