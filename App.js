import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlindPreview from "./blindstruc/BlindPreview";
import LinearGradient from "react-native-linear-gradient";

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
  const blind_data = [
    {
      "Level": "1",
      "Time": "03:00",
      "Blinds": "1/2"
    },
    {
      "Level": "2",
      "Time": "06:00",
      "Blinds": "2/4"
    },
    {
      "Level": "3",
      "Time": "09:00",
      "Blinds": "4/8"
    },
    {
      "Level": "4",
      "Time": "12:00",
      "Blinds": "8/16"
    },
    {
      "Level": "5",
      "Time": "15:00",
      "Blinds": "16/32"
    },
    {
      "Level": "6",
      "Time": "18:00",
      "Blinds": "32/64"
    },
    {
      "Level": "7",
      "Time": "21:00",
      "Blinds": "54/168"
    },
    {
      "Level": "8",
      "Time": "24:00",
      "Blinds": "128/256"
    },
    {
      "Level": "9",
      "Time": "27:00",
      "Blinds": "256/512"
    },
    {
      "Level": "10",
      "Time": "30:00",
      "Blinds": "512/1024"
    },
    {
      "Level": "",
      "Time": "+3:00",
      "Blinds": "*2"
    }
  ];

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
          {(props) => <BlindPreview {...props} jsonData={blind_data} />}
        </Stack.Screen>
      </Stack.Navigator>  
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  titleheader: {
    fontWeight:"bold",
    marginLeft:10,
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
