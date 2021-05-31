import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
export default function App() {
  // const categories = [
  //   { label: "Furniture", value: 1 },
  //   { label: "Clothing", value: 2 },
  //   { label: "Cameras", value: 3 },
  // ];
  // const [category, setCategory] = useState()
  return (
    // menu
    // <Screen>
    //   <AppPicker 
    //     selectedItem={category}
    //     onSelectedItem={item=>setCategory(item)}
    //     items={categories} 
    //     icon="apps" 
    //     placeholder="Category"
    //      />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </Screen>
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({});
