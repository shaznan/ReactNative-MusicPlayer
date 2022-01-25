import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import color from "../misc/color";

export default function AudioListItem() {
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.leftContainer}>
          <View style={Styles.thumbnail}>
            <Text style={Styles.thumbnailText}>A</Text>
          </View>
          <View style={Styles.titleContainer}>
            <Text numberOfLines={1} style={Styles.title}>
              This is going to be the title of the song
            </Text>
            <Text style={Styles.timeText}>03:15</Text>
          </View>
        </View>
        <View style={Styles.rightContainer}>
          <Entypo
            name="dots-three-vertical"
            size={20}
            color={color.FONT_MEDIUM}
          />
        </View>
      </View>
      <View style={Styles.seperator}></View>
    </>
  );
}

const { width } = Dimensions.get("window");

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    width: width - 80,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rightContainer: {
    flexBasis: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  thumbnail: {
    height: 50,
    flexBasis: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50 / 2,
  },
  thumbnailText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  titleContainer: { width: width - 180, paddingLeft: 10 },
  title: { fontSize: 16 },
  seperator: {
    width: width - 80,
    backgroundColor: "#333",
    opacity: 0.3,
    height: 0.4,
    alignSelf: "center",
    marginTop: 10,
  },
  timeText: {
    fontSize: 14,
    opacity: 0.5,
  },
});
