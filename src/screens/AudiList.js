import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { AudioContext } from "../context/AudioProvider";
import { LayoutProvider, RecyclerListView } from "recyclerlistview";
import AudioListItem from "../components/AudioListItem";
import OptionsModal from "../Modal/OptionsModal";
import { Audio } from "expo-av";

export default function AudioList() {
  const value = useContext(AudioContext);
  const {
    playBackObj,
    setPlayBackObj,
    soundObject,
    setSoundObject,
    currentAudio,
    setCurrentAudio,
  } = value;
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

  const handleAudioPress = async (item) => {
    //If no audio playing, play audio
    if (soundObject === null) {
      const playbackObject = new Audio.Sound();
      const status = await playbackObject.loadAsync(
        { uri: item.uri },
        { shouldPlay: true }
      );
      setCurrentAudio(item);
      setSoundObject(status);
      setPlayBackObj(playbackObject);
      return;
    }
    //if audio is playing, pause audio
    if (
      soundObject.isLoaded &&
      soundObject.isPlaying &&
      currentAudio.id === item.id
    ) {
      const status = await playBackObj.setStatusAsync({ shouldPlay: false });
      setSoundObject(status);
    }

    //If audio is not playing, resume audio
    if (
      soundObject.isLoaded &&
      !soundObject.isPlaying &&
      currentAudio.id === item.id
    ) {
      const status = await playBackObj.playAsync();
      setSoundObject(status);
    }

    //play another audio
    if (soundObject.isLoaded && currentAudio.id !== item.id) {
      await playBackObj.stopAsync();
      await playBackObj.unloadAsync();
      const status = await playBackObj.loadAsync(
        { uri: item.uri },
        { shouldPlay: true }
      );
      setCurrentAudio(item);
      setSoundObject(status);
    }
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
              onAudioPress={() => handleAudioPress(item)}
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
