import React from "react";
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image,
} from "react-native";

export default function pag3() {
    return (
        <View
        style={{
            backgroundColor: '#4169e1',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: 20,
        }}
        >
            <h1>Squirtle is a small, light-blue Pokémon with an appearance similar to a turtle. With its aerodynamic shape and grooved surface, Squirtle's shell helps it wade through the water very quickly. It also offers protection in battle. Like turtles, Squirtle has a shell that covers its body with holes that allow its limbs, tail, and head to be exposed. Unlike a turtle, Squirtle is ordinarily bipedal.</h1>
            <View>
            <Image
              style={styles.venusaur}
              source={{
                uri: 'https://i.pinimg.com/originals/30/e0/04/30e0046d1ac67d128f01fdc7d7758b03.gif'
              }}
              />        
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    h1: {
        justifyContent: 'space-between'
    },

    venusaur: {
        borderWidth: 3,
        margin: 30,
        width: 500,
        height: 500,
        borderColor:'#202',
    }
    })