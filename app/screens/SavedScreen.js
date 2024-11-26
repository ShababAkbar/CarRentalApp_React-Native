import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SavedScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Saved Screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default SavedScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  