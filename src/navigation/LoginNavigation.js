import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  SignUp,
  Home,
  AllRestaurants,
  MoreDishes,
  CustomerOder,
} from "../screen";
import { routes } from "./routes";
const Stack = createNativeStackNavigator();

const LoginNavigation = ()=> {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.LOGIN} component={Login} />
        <Stack.Screen name={routes.SIGNUP} component={SignUp} />
      </Stack.Navigator>
  
  );
};

export default LoginNavigation