import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'firebase/auth';
const backgroundImage = require('../../assets/REAL.png');

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();


  function replacePass(){
    if(email !== ''){
        sendPasswordResetEmail(auth, email)        
        .then(() => {
          alert("Foi enviado um email para: " + email + ". Verifique a sua caixa de email");
          navigation.navigate('SignIn')
        })
        .catch((error)=> {
          const errorMessage = error.message;
          alert("Erro inesperado. "+ errorMessage + ". Tente novamente ou pressione voltar");
        return;
        });
    }else{
      alert("Informe o email valido para continuar");
      return
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <Text style={styles.title}>Digite seu e-mail para redefinir a senha</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Seu e-mail"
          keyboardType="email-address"
          autoCapitalize='none'
          value={email}
          autoComplete='email'
          onChangeText={setEmail}
        />
        <Pressable 
        style = {styles.sendButton}   
        onPress={replacePass}
        >
          <Text style = { styles.texButton}>Enviar</Text>
        </Pressable>
        <View >
          <Pressable style={styles.sendButton1}
          onPress={()=> navigation.navigate('SignIn')}
          >
            <Text>Voltar</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  imageBackground: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    color: '#FFF',
  },
  input: {
    width: '95%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    color: '#FFF',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius:50
  },
  sendButton: {
    backgroundColor: '#F98404',
    padding: 12,
    borderRadius: 8,
  },
  sendButton1: {
    backgroundColor: '#F98404',
    padding: 12,
    borderRadius: 8,
    marginTop:40,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 8,
  },
  successText: {
    color: 'green',
    marginTop: 8,
  },
});
