import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import AreaScreen from "./AreaScreen";
import CarTypeScreen from "./CarTypeScreen";
import HomeScreen from "./HomeScreen";

import React, {useState} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {Text} from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import {theme} from "../core/theme";
import {emailValidator} from "../helpers/emailValidator";
import {passwordValidator} from "../helpers/passwordValidator";
import {nameValidator} from "../helpers/nameValidator";
import {Snackbar, Headline} from "react-native-paper";
//import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import {Avatar} from "react-native-paper";

const Help = ({navigation}) => {
  return (
    <View>
      <Headline style={styles.container3}>Help</Headline>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
    //marginTop: 4,
  },
  container2: {
    //flex: 1,
    //padding: 20,
    //marginTop: 4,
    //paddingHorizontal: 20,
    //paddingVertical: 5,
    marginVertical: 40,
    marginHorizontal: 130,

    fontSize: 70,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  container3: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#560CCE",
  },
});

export default Help;
