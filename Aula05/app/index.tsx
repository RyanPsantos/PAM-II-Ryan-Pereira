import React, {useState} from "react";
import {View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
  apiKey: "AIzaSyAEIcTi2iiG0T2aGKSxpo6-uaR0KchlD4Y",
  authDomain: "meuprimeirofirebase-2ba8a.firebaseapp.com",
  projectId: "meuprimeirofirebase-2ba8a",
  storageBucket: "meuprimeirofirebase-2ba8a.appspot.com",
  messagingSenderId: "465349594628",
  appId: "1:465349594628:web:a83187248e9a1f2d652f51"
};

// Inicialize o Firebase (substitua pelos seus valores)
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const auth  = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // O usuário foi criado com sucesso
          const user = userCredential.user;
          console.log('Usuário criado com sucesso:', user);
        })
        .catch((error) => {
          //Tratar erros de cadastro
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Erro ao criar usuário:', error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
      placeholder="Senha"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
      />
      <Button title="Cadastrar" onPress={handleSignup} />
    </View>
  );
};

export default App;