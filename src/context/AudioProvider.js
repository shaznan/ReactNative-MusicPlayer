import React, { useState,useEffect, createContext } from "react";
import { View, Text, Alert } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { DataProvider } from "recyclerlistview";

export const AudioContext = createContext();
export default function AudioProvider({children}) {
  const [audioFiles, setAudioFiles] = useState([])
  const [dataProvider, setDataprovider] = useState(new DataProvider((r1,r2)=>r1 !== r2))
  const permissionAlert = () => {
    Alert.alert(
      "Permission Required",
      "This app needs to read Audio files from file stystem to proceed",
      [
        {
          text: "allow",
          onPress: () => {
            getPermission();
          },
        },
        {
          text: "cancel",
          onPress: () => {
            permissionAlert();
          },
        },
      ]
    );
  };

  // once permission is granted, access audio files
  const getAudioFiles = async () => {
    /* Have only the commented code if u need to fetch first 20 songs */
    // const media = await MediaLibrary.getAssetsAsync({
    //   mediaType: "audio",
    // });
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    });
    media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: media.totalCount,
    });
    setDataprovider(dataProvider.cloneWithRows([...audioFiles,media.assets]))
    setAudioFiles(media.assets)
   

  };

  //Get permission from user before getting audio files
  const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    if (permission.granted) {
      // We want to get all audio files
      getAudioFiles();
    }

    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();
      if (status === "denied" && canAskAgain) {
        //display alert 'must enable to use the app'
      }

      if (status === "granted") {
        //display all audio files
        getAudioFiles();
      }

      if (status === "denied" && !canAskAgain) {
          Alert.alert('Error Please try again later')
      }
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <AudioContext.Provider value={{musicFiles: audioFiles, dataProvider}}>{children}</AudioContext.Provider>
  );
}
