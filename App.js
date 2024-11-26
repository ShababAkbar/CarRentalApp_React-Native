import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './app/dataset/HomeScreen';
import MapScreen from './app/screens/MapScreen';
import SavedScreen from './app/screens/SavedScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import InfoScreen from './app/screens/InfoScreen';


const homeIcon_active = require('./app/assets/home_active.png');
const homeIcon = require('./app/assets/home.png');
const compass_active = require('./app/assets/compass_active.png');
const compass = require('./app/assets/compass.png');
const savedIcon_active = require('./app/assets/saved_active.png');
const savedIcon = require('./app/assets/saved.png');
const settingsIcon_active = require('./app/assets/settings_active.png');
const settingsIcon = require('./app/assets/settings.png');


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
        }}
    >
      <Stack.Screen name="Initial" component={HomeScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  );
} 

export default function App() {
  return (
    <NavigationContainer> 
      <Tab.Navigator       //here we define our tabs or key destiations
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? homeIcon_active : homeIcon;
          } else if (route.name === 'Map') {
            iconName = focused ? compass_active : compass;
          } else if (route.name === 'Saved') {
            iconName = focused ? savedIcon_active : savedIcon;
          } else if (route.name === 'Settings') {
            iconName = focused ? settingsIcon_active : settingsIcon;
          } 

          return (
            <Image source={iconName} resizeMode="contain" style={{ styles.footerIcon }} />
          )
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          padding:10,
          backgroundColor: 'black',
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          
        },

    })}
      >  
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcon: {
    width: 10,
    height: 10,
  },
});
