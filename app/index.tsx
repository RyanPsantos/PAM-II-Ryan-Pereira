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
      
        <View style={{
                alignItems: "center"
            }}>
            <Button title={'Apenas um botão'} onPress={createTwoButtonAlert}/>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.ScrollView}>
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
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingTop: StatusBar.currentHeight,
    },
    ScrollView: {
        backgroundColor: 'orange',
        marginHorizontal: 20
    },
    text: {
        fontSize: 42
    }
});

export default index;

