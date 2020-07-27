import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
interface Props {
  navigation?: any;
}
const SplashScreen: React.FC<Props> = (props) => {
  setTimeout(() => props.navigation.replace("HomeScreen"), 3000);
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ borderRadius: 20 }}
      />
      <Text style={styles.textStyle}>IELTS PRACTICE TESTS</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    lineHeight: 18,
    marginTop: 10,

    color: "rgba(0, 0, 0, 0.37)",
  },
});
export default SplashScreen;
