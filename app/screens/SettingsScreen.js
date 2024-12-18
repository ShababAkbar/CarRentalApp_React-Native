import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default SettingsScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  