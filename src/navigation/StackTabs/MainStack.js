import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/** Import Main Stack Screens */
import Test from "../../screens/Test";

/** Import Theme */
import { MyTheme, Styles } from "./style";

const Stack = createStackNavigator();
const styles = Styles;

const MainStack = ({ TabBottom, redirect }) => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName={redirect}>
        <Stack.Screen
          name="Test"
          component={Test}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
