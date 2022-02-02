import React from "react";
import {
  View,
  Text,
  Modal,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export default function OptionsModal({ visible, onCloseHandler, title }) {
  return (
    <>
      <StatusBar hidden />
      <Modal animationType="slide" transparent visible={visible}>
        <View style={Styles.modal}>
          <Text style={Styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={Styles.optionContainer}>
            <Text style={Styles.option}>Play</Text>
            <Text style={Styles.option}>Add to Playlist</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={onCloseHandler}>
          <View style={Styles.modalBg}></View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const Styles = StyleSheet.create({
  modal: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 1000,
    backgroundColor: "rgba(255,255,255,1)",
    height: 220,
    paddingTop: 20,
  },
  optionContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 20,
    paddingBottom: 0,
    alignSelf: "center",
  },
  option: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
    alignSelf: "center",
  },
  modalBg: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
