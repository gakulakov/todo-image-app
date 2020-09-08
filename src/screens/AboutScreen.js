import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { View, StyleSheet, Text } from "react-native";

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Приложение для личных заметок</Text>
      <Text>Версия<Text style={styles.mazafaker}> 1.0.0.</Text></Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "О приложении",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName={"ios-menu"}
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mazafaker: {
    fontFamily: 'open-bold'
  }
});
