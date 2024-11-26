import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InfoScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Info Screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default InfoScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  