import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEIcTi2iiG0T2aGKSxpo6-uaR0KchlD4Y",
    authDomain: "meuprimeirofirebase-2ba8a.firebaseapp.com",
    projectId: "meuprimeirofirebase-2ba8a",
    storageBucket: "meuprimeirofirebase-2ba8a.appspot.com",
    messagingSenderId: "465349594628",
    appId: "1:465349594628:web:a83187248e9a1f2d652f51"
};

firebase.initializeApp(firebaseConfig);

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

export default function App() {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const nomesCollection = firebase
                .firestore()
                .collection('Nomes');
            const snapshot = await nomesCollection.get();

            const data = [];
            snapshot.forEach((doc) => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            setNomes(data);
        };

        fetchData();
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text>Lista de Nomes:</Text>
            <FlatList
                data={nomes}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.nome}
                            {item.sobrenome}</Text>
                    </View>
                )}/>
        </View>
    );
}