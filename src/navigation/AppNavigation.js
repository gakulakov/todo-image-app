import React from "react";
import { Platform } from "react-native";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
  },
};

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen,
  },
  navigatorOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  navigatorOptions
);

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: (info) => (
        <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      ),
      tabBarLabel: "Все",
    },
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarIcon: (info) => (
        <Ionicons name="ios-heart" size={25} color={info.tintColor} />
      ),
      tabBarLabel: "Избранное",
    },
  },
};

const BottomNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(bottomTabsConfig, {
        activeTintColor: "#fff",
        barStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        shifting: true,
      })
    : createBottomTabNavigator(bottomTabsConfig, {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR,
        },
      });

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen,
  },
  navigatorOptions
);

const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen,
  },
  navigatorOptions
);

const MainNavigator = createDrawerNavigator({
  PostTabs: {
    screen: BottomNavigator,
    navigationOptions: {
      drawerLabel: "Главная",
      drawerIcon: (info) => <Ionicons name={'ios-home'} size={20} color={info.tintColor} />
    }
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      drawerLabel: "О приложении",
      drawerIcon: (info) => <Ionicons name={'ios-information-circle'} size={20} color={info.tintColor} />
    }
  },
  Create: {
    screen: CreateNavigator,
    navigationOptions: {
      drawerLabel: "Создать пост",
      drawerIcon: (info) => <Ionicons name={'ios-add-circle'} size={20} color={info.tintColor} />
    }
  },
},{
  contentOptions: {
    activeTintColor: THEME.MAIN_COLOR,
    labelStyle: {
      fontFamily: 'open-bold'
    }
  }
});

export const AppNavigation = createAppContainer(MainNavigator);
