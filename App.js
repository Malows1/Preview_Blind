import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlindPreview from "./blindstruc/BlindPreview";
import LinearGradient from "react-native-linear-gradient";

// Importing the BlindsGenerator module
import { generateBlindsStructure, formatTime, incrementBlind } from "./blindstruc/BlindGenerator";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Preview Blinds Structure"
        onPress={() => navigation.navigate("Preview Blind Structure")}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  // Generating blinds structure using the functions from BlindsGenerator
  const gameTime = 1800; // 30 minutes in seconds
  const raiseBlindTime = 180; // 3 minutes in seconds
  const blindsStructure = generateBlindsStructure(gameTime, raiseBlindTime);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="Preview Blind Structure"
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: () => (
              <Text style={styles.titleheader}>Preview Blind Structure</Text>
            ),
            headerLeft:() => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.arrow}>◀︎</Text>
              </TouchableOpacity>
            ),
            headerBackground: () => (
              <LinearGradient
                colors={["#E1BEF3", "#DA8CF8", "#7E3EF8", "#6A1FF9"]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
            ),
          })}
        >
          {(props) => <BlindPreview {...props} jsonData={blindsStructure} />}
        </Stack.Screen>
      </Stack.Navigator>  
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  titleheader: {
    fontWeight:"bold",
    marginLeft:12,
    fontSize: 25,
    color:"#fff",
    left: 15,
  },
  arrow: {
    fontSize: 40,
    justifyContent: "center",
    top: -4,
    left: 10 
  }
});

export default App;
