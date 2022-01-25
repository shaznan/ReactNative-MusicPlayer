import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AudioContext } from '../context/AudioProvider';

export default function AudioList() {
  const value = useContext(AudioContext)
  console.log(value, "console")

  return (
    <ScrollView style={Styles.container}>
      {value?.musicFiles?.audioFiles?.map(item=> <Text style={Styles.Text} key={item?.id}>{item?.filename}</Text> )}
     </ScrollView>
  );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    Text:{
      fontSize: 18,
      padding:10,
      borderBottomColor: 'rgba(255,255,255, 0.5)',
    }

})