import React from "react";
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native";

export default function pag2() {
    return (
        <ScrollView style={styles.scrollview}>
            <View
                style={{
                backgroundColor: '#2E8B57',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                paddingTop: 100,
                }}
            >
            <h1>Bulbasaur resembles a small amphibian/frog, but it bears three claws on each of its feet and has no tail. It also has large, red eyes and small, sharp teeth. Its skin is a light, turquoise color with dark, green spots. It has three claws on all four of its legs. Its most notable feature, however, is the aforementioned bulb on its back, which according to its entry in the Pokédex, was planted there at birth. It also seems that it uses vines that grow out of its back as weapons, they are easily extractable.</h1>
            <View>
            <Image
              style={styles.squirtle}
              source={{
                uri: 'https://media.tenor.com/P62v1ypMICEAAAAM/bulbasaur.gif'
              }}
              />        
            </View>
        </View></ScrollView>
        
    );
}
const styles = StyleSheet.create({

    h1: {
        justifyContent: 'space-between'
    },

    scrollview: {
        marginHorizontal: 10,
    },

    squirtle: {
        borderWidth: 3,
        margin: 30,
        width: 500,
        height: 500,
        borderColor:'#202',
    }
    })