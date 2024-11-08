import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const GridItem = ({ image }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});

export default GridItem;
