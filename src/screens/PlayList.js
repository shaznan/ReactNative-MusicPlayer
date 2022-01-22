import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlayList() {
  return (
    <View style={Styles.container}>
      <Text>Audio List</Text>
     </View>
  );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})