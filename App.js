import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';


export default function App() {

  // const isAndroid = Platform.OS === 'android';

  return (
    <>
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <View style={styles.container} >
        <Text>Search</Text>
      
      </View>
      <View style={styles.list} >
        <Text>List</Text>
      
      </View>
    </SafeAreaView>
    <ExpoStatusBar style='auto'/>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16, 
    backgroundColor:'green'
    
  },
  list:{
    flex:1, 
    padding: 16, 
    backgroundColor:'blue'
  }
});
