import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './app/style';

const menu = require("./assets/icons/menu.png");
const face = require("./assets/icons/face.png");  
const magnifying_glass = require("./assets/icons/magnifying_glass.png");

const image_v_1 = require("./assets/vehicles/image_v_1.jpg");
const image_v_2 = require("./assets/vehicles/image_v_2.jpg");
const image_v_3 = require("./assets/vehicles/image_v_3.jpg");
const image_v_4 = require("./assets/vehicles/image_v_4.jpg");


const HomeScreen = () => {
    return (
      <SafeAreaView style={styles.safeArea} >
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Image source={menu} resizeMode="contain" style={styles.menuIconStyle} />
            <Image source={face} resizeMode="contain" style={styles.faceIconStyle} />
          </View>

          <View style={styles.titleSection}>
            <Text style={styles.title}>Rent a Car</Text>
          </View>

          <View style={styles.searchSection}>
            <View style={styles.searchPallet}>
              <TextInput 
                style={styles.searchInput}
                placeholder="Search for a car..."
              />
              <View style={styles.searchIconArea}>
                <Image source={magnifying_glass}
                 resizeMode = "contain"
                  style={styles.magnifyingIconStyle}
                  />

            </View>
          </View>
        </View>

          <View style={styles.typesSection}>

          </View>

          <View style={styles.listSection}>

          </View>


        </View>

      </SafeAreaView>
    );
  }

  export default HomeScreen;

  