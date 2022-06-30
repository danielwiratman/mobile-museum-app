import {View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MuseumData from '../../data/MuseumData.json';

const SearchScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textInputContainer}>
        <TextInput placeholder="Search Here (eg. Monalisa)" />
      </View>
      <FlatList
        data={MuseumData}
        keyExtractor={item => item.serial}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.cardContainer}>
              <Image style={styles.cardImage} source={{uri: item.image}} />
              <View>

              <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
              <Text>
                {item.artist} | {item.year}
              </Text>
              <Text>{item.category}</Text>
              </View>
            </TouchableOpacity >
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  textInputContainer: {
    marginVertical: 16,
    marginHorizontal: 8,
    padding: 8,
    backgroundColor: 'white',
    height: 60,
  },
  cardContainer: {
    flexDirection: 'row',
    margin: 8,
    padding: 8,
    backgroundColor: 'white'
  },
  cardImage: {
    marginRight: 8,
    height: 100,
    width: 100
  }
});

export default SearchScreen;
