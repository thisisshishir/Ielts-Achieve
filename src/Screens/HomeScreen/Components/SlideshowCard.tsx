import React from "react";

import { View, Text, StyleSheet, ImageBackground } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

interface Props {}
const SlideshowCard: React.FC<Props> = (props) => {
  return (
    <View style={styles.outerBox}>
      <ImageBackground
        style={{
          height: "100%",
          width: "100%",
        }}
        source={require("../../../../assets/images/sample.png")}
      >
        <LinearGradient
          start={[3, 1.5]}
          colors={["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.51)"]}
        >
          <View
            style={{
              flexDirection: "column",
              height: "100%",
              padding: 16,
              justifyContent: "flex-end",
            }}
          >
            <View style={{ margin: 6, overflow: "hidden" }}>
              <Text
                style={styles.headingTextStyle}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Agree/Disagree Essays
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.authorIcon}>
                <ImageBackground
                  source={require("../../../../assets/images/logo.png")}
                  style={{ height: "100%", width: "100%" }}
                />
              </View>
              <View style={styles.authorDetails}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={{ color: "white" }}
                >
                  IELTS Achieve Academy
                </Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={{ color: "white" }}
                >
                  Uncategorized
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  headingTextStyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    color: "white",
  },
  authorIcon: {
    backgroundColor: "orange",
    height: 46,
    borderRadius: 7,
    width: 46,
    overflow: "hidden",
  },
  authorDetails: {
    marginTop: 5,
    marginLeft: 10,

    flexDirection: "column",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
  },
  outerBox: {
    color: "white",

    marginTop: hp("4%"),

    height: hp("37%"),
    borderRadius: 17,
    overflow: "hidden",
  },
});
export default SlideshowCard;
