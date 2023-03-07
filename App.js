import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/button";
import Input from "./src/components/fromTextInput";
import AllRestaurants from "./src/screen/AllRestaurants";
import CustomerOder from "./src/screen/CustomerOder";
import HalfEnd from "./src/screen/Home/HalfEnd";
import Upper from "./src/screen/Home/Upper";
import Login from "./src/screen/Login";
import MoreDishes from "./src/screen/MoreDishes";
import SignUP from "./src/screen/SignUp";
import Wellcome from "./src/screen/Wellcome";
import LoginNavigation from "./src/navigation/LoginNavigation";
export default function App() {
  return (
    // <Wellcome></Wellcome>
    // <Login></Login>
    // <Input></Input>
    // <Button></Button>
    // <SignUP></SignUP>
    //  <HalfEnd></HalfEnd>
    // <Upper></Upper>
    // <CustomerOder></CustomerOder>
    // <AllRestaurants></AllRestaurants>
    // <MoreDishes></MoreDishes>
    <LoginNavigation></LoginNavigation>
  );
}
