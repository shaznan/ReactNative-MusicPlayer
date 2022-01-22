import React, { useEffect, createContext } from "react";
import { View, Text, Alert } from "react-native";
import * as MediaLibrary from "expo-media-library";

export const AudioContext = createContext();
export default function AudioProvider({children}) {
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
    const media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    });
    console.log(media);
  };

  //Get permission from user before getting audio files
  const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log(permission)
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

  getPermission()

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <AudioContext.Provider value={{}}>{children}</AudioContext.Provider>
  );
}
