import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import color from "../misc/color";
import { convertTime } from "../helpers/index";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AudioListItem({
  title,
  duration,
  onOptionsHandler,
  onAudioPress,
  isPlaying,
  activeListItem,
}) {
  const getInitials = (fileName) => fileName[0];

  const renderPlayPauseIcon = () =>
    !isPlaying ? (
      <Ionicons name="play" size={24} color="black" />
    ) : (
      <MaterialCommunityIcons name="pause" size={24} color="black" />
    );

  return (
    <>
      <View style={Styles.container}>
        <TouchableWithoutFeedback
          onPress={onAudioPress}
          style={Styles.container}
        >
          <View style={Styles.leftContainer}>
            <View style={Styles.thumbnail}>
              <Text style={Styles.thumbnailText}>
                {activeListItem ? renderPlayPauseIcon() : getInitials(title)}
              </Text>
            </View>
            <View style={Styles.titleContainer}>
              <Text numberOfLines={1} style={Styles.title}>
                {title}
              </Text>
              <Text style={Styles.timeText}>{convertTime(duration)}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity style={Styles.rightContainer}>
          <Entypo
            onPress={onOptionsHandler}
            name="dots-three-vertical"
            size={24}
            color={color.FONT_MEDIUM}
            style={{ padding: 10 }}
          />
        </TouchableOpacity>
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
    width: width - 40,
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
