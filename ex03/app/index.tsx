import React from "react";
import { Link } from "expo-router";
import { View } from "react-native"
import { Text, Button, Pressable, StyleSheet, ScrollView, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        margin:'auto',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <Link href="/pag1">
          <View>
            <Image
              style={styles.box1}
              source={{
                uri: 'https://s2-ge.glbimg.com/KA7CaWaackKTbVQsYU3uSxZ39Yw=/0x0:1280x670/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/k/W/ey3W2jRAmAY9m4dAgfZg/charmander.jpg'
              }}
              />        
          </View>          
        </Link>

        <Link href="/pag2">
          <View>
            <Image
              style={styles.box2}
              source={{
                uri: 'https://screenrant.com/wp-content/uploads/Bulbasaur-Looking-Up.jpg'
              }}
            />
          </View>
        </Link>

        <Link href="/pag3">
          <View>
            <Image
              style={styles.box2}
              source={{
                uri: 'https://copag.com.br/uploads/wp-copag-pokemon/2018/07/SquirtleCapa.jpg'
              }}
            />
          </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  padding: 'auto',
  backgroundColor: '#e83b31',
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
},

box1: {
  borderWidth: 3,
  margin: 30,
  width: 250,
  height: 200,
  borderColor:'#202',
},
box2: {
  borderWidth: 3,
  margin: 30,
  width: 250,
  height: 200,
  borderColor:'#202',
},
box3: {
  borderWidth: 3,
  margin: 30,
  width: 250,
  height: 200,
  borderColor:'#202',
}
})
