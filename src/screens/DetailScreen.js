import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import MuseumData from '../../data/MuseumData.json';

const DetailScreen = props => {
  const {route} = props;
  const barcodeText = route.params.barcodeText;
  const data = MuseumData.filter(data => {
    return data.serial === barcodeText;
  })[0];
  console.log(data);
  return (
    <View style={styles.mainContainer}>
      {data ? (
        <View>
          <Image style={styles.detailImage} source={{uri: data.image}} />
          <View style={{alignItems: 'flex-start', marginVertical: 8}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{data.name}</Text>
            <Text>{data.artist}</Text>
            <Text>{data.year}</Text>
            <Text>{data.category}</Text>
          </View>
        </View>
      ) : (
        <View>
          <Text>The QR Code is not from this museum</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    padding: 16,
  },
  detailImage: {
    width: 300,
    height: 300,
  },
});

export default DetailScreen;
