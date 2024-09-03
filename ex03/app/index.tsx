import React from "react";
import { Link } from "expo-router";
import { View } from "react-native"
import { Text, Button, Pressable, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <Link href="/pag2" asChild>
        <Pressable>
          <Button
        title="Botão sem graça"
        color={'green'}
      />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  backgroundColor: '#d2b48c',
  flex: 1,
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
},

box: {
  borderWidth: 3,
  margin: 30,
  width: 250,
  height: 200,
  borderColor:'#202',
}
})
