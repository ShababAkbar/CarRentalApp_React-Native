import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MapScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Map Screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default MapScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  