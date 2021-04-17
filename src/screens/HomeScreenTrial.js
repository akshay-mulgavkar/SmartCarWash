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

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Privacy Policy" component={Privacy} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Sign Out" component={SignOut} />
    </Drawer.Navigator>
  );
}

export default function HomeScreenTrial() {
  return (
    <NavigationContainer independent={true}>
      <MyDrawer />
    </NavigationContainer>
  );
}
