import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const PlayerButton = (props) => {
  const { iconType, size = 40, color = "black", onPress } = props;

  const getIconName = (type) => {
    if (type === "PLAY") return "pausecircle";
    if (type === "PAUSE") return "playcircleo";
    if (type === "PREV") return "banckward";
    if (type === "NEXT") return "forward";
  };
  return (
    <AntDesign
      name={getIconName(iconType)}
      size={size}
      onPress={onPress}
      color={color}
      {...props}
      //spreading props to get styling
    />
  );
};

export default PlayerButton;
