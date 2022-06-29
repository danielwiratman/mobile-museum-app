import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';

const HomeScreen = props => {
  const {navigation} = props;
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/homeBg.jpg')}>
        <View style={{marginBottom: 30, marginHorizontal:24}}>
        <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>Welcome to The Museum App</Text>

        </View>
      <TouchableOpacity
        style={styles.bigButton}
        onPress={() => navigation.navigate('AtMuseum')}>
        <Text style={styles.text}>At Museum</Text>
        <Text style={styles.secondText}>Experience the interactive smart museum using QR Codes embedded in around the area.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bigButton}
        onPress={() => navigation.navigate('AtHome')}>
        <Text style={styles.text}>At Home</Text>
          <Text style={styles.secondText}>Get the latest updates about what's going on in the museum.</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
  },
  bigButton: {
    height: 100,
    marginHorizontal: 24,
    marginVertical: 8,
    borderRadius: 20,
    padding: 16,
    backgroundColor: 'rgba(20,20,20,0.85)',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  secondText: {
    fontSize: 14,
    color: 'white'
  }
  
});

export default HomeScreen;
