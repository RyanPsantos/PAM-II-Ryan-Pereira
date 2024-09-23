import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Image,
} from 'react-native';

const index = () => {
    const createTwoButtonAlert = () => Alert.alert('Alert Title', 'My Alert Msg', [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => console.log('OK Pressed')
        }
    ]);

    const createThreeButtonAlert = () => Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
            }, {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
            }
        ]
    );

    return (
        
        <ScrollView style={styles.ScrollView}>
        <View style={{
               display: 'flex',
               flex: 1,
               paddingTop: 10,
               justifyContent: "center",
               alignItems: "center",
            }}>
                <div style={styles.btn}>
                <Button title={'Apenas um botão'} onPress={createTwoButtonAlert}/>
                </div>
            <SafeAreaView style={styles.container}>
                
                    <Text style={styles.text}>
                        este texto serve apenas para testar o scroll da pagina, este texto serve apenas
                        para testar o scroll da pagina, este texto serve apenas para testar o scroll da
                        pagina, este texto serve apenas para testar o scroll da pagina, este texto serve
                        apenas para testar o scroll da pagina, este texto serve apenas para testar o
                        scroll da pagina, este texto serve apenas para testar o scroll da pagina, este
                        texto serve apenas para testar o scroll da pagina, MANGA, este texto serve apenas para
                        testar o scroll da pagina, este texto serve apenas para testar o scroll da
                        pagina, este texto serve apenas para testar o scroll da pagina, este texto serve
                        apenas para testar o scroll da pagina, este texto serve apenas para testar o
                        scroll da pagina,
                    </Text>

                    <h1>Little The Rocha</h1>
            
                    <Image
              style={styles.theRocha}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjagsqW3pFaakST0Q3bpBimXtrz0s0w6mX7g&s'
              }}
              />
              <div style={styles.btn2}>
              <Button title={'The rock Rebaixado'} onPress={createTwoButtonAlert}/>
              </div>
            </SafeAreaView>
            
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    ScrollView: {
        flex: 1,
        backgroundColor: 'orange',
        marginHorizontal: 20
    },
    text: {
        fontSize: 42
    },
    theRocha: {
        flexDirection: "row",
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        borderWidth: 3,
        margin: 30,
        width: 500,
        height: 500,
        borderColor:'#202',
    },
    btn: {
        flexDirection: "row",
    },
    btn2: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        paddingBottom: 50,
    },
});

export default index;

