import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import giveClassesBGImage from "../../assets/images/give-classes-background.png";

function GiveClasses() {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='contain'
        source={giveClassesBGImage}
        style={styles.content}
      >
        <Text style={styles.title}>Want to be a Proffy?</Text>
        <Text style={styles.description}>
          To start, you need to register as a teacher on our web platform
        </Text>
      </ImageBackground>

      <RectButton
        onPress={handleNavigateBack}
        style={styles.okButton}
      >
        <Text style={styles.okButtonText}>Alright</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
