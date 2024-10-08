import React from "react";
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    ScrollView,
} from "react-native";

export default function pag1() {
    return (
        <ScrollView style={styles.scrollview}>
            <View
        style={{
            display: 'flex',
            backgroundColor: '#FF2400',
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
        }}
        >
            <h1>Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this Pokémon's slender tail and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain.</h1>
            <View>
            <Image
              style={styles.charmander}
              source={{
                uri: 'https://www.icegif.com/wp-content/uploads/2023/05/icegif-621.gif'
              }}
              />        
            </View>
        </View>
        </ScrollView>
        
    );
}
const styles = StyleSheet.create({

    h1: {
        justifyContent: 'space-between'
    },

    scrollview: {
        marginHorizontal: 1,
    },

    charmander: {
        borderWidth: 3,
        margin: 30,
        width: 500,
        height: 500,
        borderColor:'#202',
    }
    })
    