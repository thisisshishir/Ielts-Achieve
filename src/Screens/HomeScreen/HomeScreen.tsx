import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomescreenHeader from "./Components/HomescreenHeader";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import SlideshowCard from "./Components/SlideshowCard";
interface Props {}

const HomeScreen: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={{ marginHorizontal: wp("4%") }}>
      <View>
        <HomescreenHeader />

        <SlideshowCard />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
