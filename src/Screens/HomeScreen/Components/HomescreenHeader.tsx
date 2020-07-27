import React from "react";

import { View, Text, StyleSheet, ImageBackground } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
interface Props {}
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const today = new Date();
const currentTime =
  days[today.getUTCDay()] +
  " " +
  today.getDate() +
  " " +
  months[today.getUTCMonth()];
const HomescreenHeader: React.FC<Props> = (props) => {
  return (
    <View style={styles.mainViewStyle}>
      <View>
        <Text style={styles.dateStyle}>{currentTime}</Text>
        <Text style={styles.headingStyle}>IELTS Achieve</Text>
      </View>

      <View style={styles.userIcon}>
        <ImageBackground
          source={require("../../../../assets/images/logo.png")}
          style={{ borderRadius: 10, height: "100%", width: "100%" }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  //View Styles
  mainViewStyle: {
    flexDirection: "row",
    marginTop: hp(6),
    justifyContent: "space-between",
  },

  userIcon: {
    overflow: "hidden",
    backgroundColor: "rgba(245, 60, 60, 0.62)",
    borderRadius: 16,
    height: 64,
    width: 64,
    marginTop: 10,
  },
  dateStyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    lineHeight: 23,
    color: "#FB8000",
  },
  headingStyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    marginTop: 3,
    color: "#000000",
  },
});

export default HomescreenHeader;
