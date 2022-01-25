import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { AudioContext } from "../context/AudioProvider";
import { LayoutProvider, RecyclerListView } from "recyclerlistview";

export default function AudioList() {
  const value = useContext(AudioContext);

  //part of recyclerlistview
  const layoutProvider = new LayoutProvider(
    (i) => "audio",
    (type, dimensions) => {
      dimensions.width = Dimensions.get("window").width;
      dimensions.height = 70;
    }
  );
  //part of recyclerlistview
  const rowRenderer = (type, item)=>{
    return <Text>{item.filename}</Text>
  }

  return (
    // <ScrollView style={Styles.container}>
    //   {value?.musicFiles?.map(item=> <Text style={Styles.Text} key={item?.id}>{item?.filename}</Text> )}
    //  </ScrollView>
    //instead of going through all the boiler plate code for recyclerlistview can use flatlist or scrollview, but performance will drop
    <View style={Styles.container}>
      <RecyclerListView
        dataProvider={value.dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={rowRenderer}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:20,
  },
  Text: {
    fontSize: 18,
  },
});
