import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const BlindPreview = ({ jsonData }) => {
  const tableData = jsonData.map((item) => [item.Level, item.Time, item.Blinds]);

  return (
    <SafeAreaView style={styles.bodybg}>
      {/* Header row */}
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, styles.headerCell, styles.levelHeader]}>Level</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Time</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Blinds</Text>
      </View>
      {/* DATA ROW table*/}
      <View style={styles.table}>
        {tableData.map((row, index) => (
          <View style={styles.tableRow} key={index}>
            {row.map((cell, cellIndex) => (
              <Text style={[styles.tableCell, cellIndex === 0 ? styles.levelCell : null]} key={cellIndex}>
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bodybg: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    height: 50,
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  arrowcontainer: {
    position: 'absolute',
    left: 15,
    top: -4,
  },
  table: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    color: 'black',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 9,
  },
  headerCell: {
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0', 
  },
  levelHeader: {
    color: '#5CE3FE', // Change color of the Level header
  },
  levelCell: {
    color: '#5CE3FE', // Change color of the Level column
  },
});

export default BlindPreview;
