import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  SignUp,
  Upper,
  AllRestaurants,
  MoreDishes,
  CustomerOder,
} from "../screen";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen
        name="Upper"
        component={Upper}
        options={{
          tabBarIcon: () => {
            <Image
              source={require("../assets/images/compass-circular-tool.png")}
              style={{ height: 30, width: 30 }}
              resizeMode="stretch"
            ></Image>;
          },
        }}
      />
      <Tab.Screen
        name="AllRestaurants"
        component={AllRestaurants}
        options={{
          tabBarIcon: () => {
            <Image
              source={require("../assets/images/love.png")}
              style={{ height: 30, width: 30 }}
              resizeMode="stretch"
            ></Image>;
          },
        }}
      />
      <Tab.Screen
        name="MoreDishes"
        component={MoreDishes}
        options={{
          tabBarIcon: () => {
            <Image
              source={require("../assets/images/profile-user.png")}
              style={{ height: 30, width: 30 }}
              resizeMode="stretch"
            ></Image>;
          },
        }}
      />
      <Tab.Screen
        name="CustomerOder"
        component={CustomerOder}
        options={{
          tabBarIcon: () => {
            <Image
              source={require("../assets/images/profile-user.png")}
              style={{ height: 30, width: 30 }}
              resizeMode="stretch"
            ></Image>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export default LoginNavigation = function () {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
