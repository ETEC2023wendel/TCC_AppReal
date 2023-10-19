import React, { useState } from 'react';

import { View, TextInput, Button, StyleSheet, Modal, Text, TouchableOpacity, ImageBackground } from 'react-native';

import { auth } from '../../../services/FirebaseConfig';

import { useNavigation } from '@react-navigation/native';

import { sendPasswordResetEmail } from 'firebase/auth';

 

const backgroundImage = require('../../assets/REAL.png');

 

const ForgotPassword = () => {

  const [email, setEmail] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

 

  const handleResetPassword = () => {

    if (email !== '') {

      sendPasswordResetEmail(auth, email)

        .then(() => {

          setModalVisible(true);

        })

        .catch((error) => {

          console.error(error.message);

        });

    }

  };

 

  return (

    <ImageBackground source={backgroundImage} style={styles.imageBackground}>

      <View style={styles.container}>

        <Text style={styles.title}>Digite seu e-mail para redefinir a senha</Text>

        <TextInput

          style={styles.input}

          placeholder="Seu email"

          onChangeText={(text) => setEmail(text)}

          value={email}

        />

        <TouchableOpacity style={styles.sendButton} onPress={handleResetPassword}>

          <Text style={styles.buttonText}>Enviar</Text>

        </TouchableOpacity>

 

        <Modal animationType="slide" transparent={true} visible={modalVisible}>

          <View style={styles.modalContainer}>

            <View style={styles.modalContent}>

              <Text>Email de redefinição de senha enviado</Text>

              <Text>Verifique seu email para redefinir sua senha.</Text>

              <TouchableOpacity

                style={styles.modalButton}

                onPress={() => {

                  setModalVisible(!modalVisible);

                  navigation.navigate('SignIn');

                }}

              >

                <Text style={styles.buttonText}>Voltar</Text>

              </TouchableOpacity>

            </View>

          </View>

        </Modal>

      </View>

    </ImageBackground>

  );

};

 

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

    borderRadius: 50,

  },

  sendButton: {

    backgroundColor: '#F98404',

    padding: 12,

    borderRadius: 8,

  },

  buttonText: {

    color: '#FFF',

    fontWeight: 'bold',

    textAlign: 'center',

  },

  modalContainer: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

  },

  modalContent: {

    backgroundColor: '#FFF',

    padding: 20,

    borderRadius: 10,

    alignItems: 'center',

  },

  modalButton: {

    backgroundColor: '#F98404',

    padding: 12,

    borderRadius: 8,

    marginTop: 20,

  },

});

 

export default ForgotPassword;

 