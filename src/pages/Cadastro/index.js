import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ImageBackground, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { auth } from "../../../services/FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignOn() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const navigation = useNavigation();
    
    function cadastrar() {
        if(nome === '' || email  === '' || senha === '' || confirmarSenha === ''){
            alert('Preencha todos os campos para prosseguir com o cadastro');
            return;
        }
        if (senha !== confirmarSenha){
            alert('As senhas não conferem, favor revisar');
            return;
        } else {
            createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;

                // Define o nome do usuário no Firebase Authentication
                updateProfile(user, {
                    displayName: nome
                }).then(() => {
                    // Nome do usuário foi definido com sucesso
                    alert('O usuário ' + nome + ' foi criado com sucesso, faça o login');
                    navigation.replace('SignIn');
                }).catch((error) => {
                    // Handle errors here
                    console.log(error);
                });
            })
            .catch((erro) => {
                // Handle errors here
                console.log(erro);
                alert('Erro ao criar o usuário. Por favor, tente novamente mais tarde.');
            });
        }
    }

 
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground source={require('../../assets/REAL.png')} style={styles.imageBackground}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>CADASTRO</Text>
            </View>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        placeholder="Digite seu nome..."
                        autoCapitalize="none"                    
                        style={styles.input}
                        value={nome}
                        onChangeText={setNome}
                    />

                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="Digite um Email..."
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua Senha..."
                        style={styles.input}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={hidePass}
                    />

                    <Text style={styles.label}>Confirmar Senha</Text>
                    <TextInput
                        placeholder="Digite sua Senha..."
                        style={styles.input}
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        secureTextEntry={hidePass}
                    />

                    <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                        {hidePass ?
                            <Ionicons style={styles.icon} name="eye" color="#FFF" size={25} />
                            :
                            <Ionicons style={styles.icon} name="eye-off" color="#FFF" size={25} />}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={cadastrar}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    imageBackground: {
        resizeMode: "cover",
        width: "100%",
        height: "100%"
    },
    headerContainer: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingEnd: '1%',
        paddingStart: '5%',
        marginTop: '5%',
    },
    label: {
        fontSize: 20,
        marginTop: 20,
    },
    icon: {
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#F98404',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginBottom: 15,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: "bold",
    },
    invalidInput: {
        borderColor: 'red',
    },
});
