import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import PlayerButton from "../components/PlayerButton";

const { width } = Dimensions.get("window");
export default function Player() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.audioCount}>1 / 99</Text>
      <View style={Styles.midBannerContainer}>
        <MaterialCommunityIcons name="music-circle" size={300} color="black" />
      </View>
      <View style={Styles.audioPlayerContainer}>
        <Text numberOfLines={1} style={Styles.audioTitle}>
          Audio File Name
        </Text>
        <Slider
          style={Styles.audioSlider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <View style={Styles.audioController}>
          <PlayerButton iconType="PREV" />
          <PlayerButton style={{ marginHorizontal: 50 }} iconType="PLAY" />
          <PlayerButton iconType="NEXT" />
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  audioCount: {
    padding: 20,
    alignSelf: "flex-end",
    opacity: 0.5,
  },
  midBannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  audioTitle: {
    fontSize: 15,
    padding: 15,
    alignSelf: "center",
  },
  audioSlider: {
    height: 40,
    width: (width * 90) / 100,
    alignSelf: "center",
  },
  audioController: {
    width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 70,
  },
});
