import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { AudioContext } from "../context/AudioProvider";
import { LayoutProvider, RecyclerListView } from "recyclerlistview";
import AudioListItem from "../components/AudioListItem";
import OptionsModal from "../Modal/OptionsModal";

export default function AudioList() {
  const value = useContext(AudioContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  //part of recyclerlistview
  const layoutProvider = new LayoutProvider(
    (i) => "audio",
    (type, dimensions) => {
      dimensions.width = Dimensions.get("window").width;
      dimensions.height = 70;
    }
  );
  //part of recyclerlistview
  const rowRenderer = (type, item) => {
    return <Text>{item.filename}</Text>;
  };

  return (
    <View style={Styles.container}>
      {!value.dataProvider._data.length ? (
        <>
          <Text>No Data Found</Text>
        </>
      ) : (
        <ScrollView style={Styles.container}>
          {value?.audioFiles?.map((item) => (
            <AudioListItem
              key={item.id}
              title={item.filename}
              duration={item.duration}
              onOptionsHandler={() => setIsModalVisible(true)}
            />
          ))}
          <OptionsModal
            visible={isModalVisible}
            onCloseHandler={() => setIsModalVisible(false)}
          />
        </ScrollView>
      )}
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text: {
    fontSize: 18,
  },
});

//1. instead of going through all the boiler plate code for recyclerlistview can use flatlist or scrollview, but performance will drop
// <ScrollView style={Styles.container}>
//   {value?.musicFiles?.map(item=> <Text style={Styles.Text} key={item?.id}>{item?.filename}</Text> )}
//  </ScrollView>

// 2. TODO: implement recyclerlistview instead of mapping audio list item to improve performace
// <RecyclerListView
//   dataProvider={value.dataProvider}
//   layoutProvider={layoutProvider}
//   rowRenderer={rowRenderer}
// />
