import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/index";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function WeatherData({ currentWeather }) {
  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Feels Like: </Text>
              <Text style={styles.textSecondary}>{currentWeather.main.feels_like}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <Text>{currentWeather.main.humidity}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    borderWidth: 1,
    margin: 15,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  textSecondary:{
      fontSize:15,
      color:SECONDARY_COLOR,
      fontWeight:'700',
      margin:7
  }
});
