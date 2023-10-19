import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../../services/FirebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [hidePass, setHidePass] = useState(true);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const navigation = useNavigation();

    function fazerLogin() {
        if (email === '' || senha === '' || !validateEmail(email)) {
            setModalTitle('Erro');
            setModalMessage('Por favor, preencha todos os campos corretamente.');
            setModalVisible(true);
            return;
        }

        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential)=>{
            const user = userCredential.user;
            navigation.replace('Conteudo', { nome: user.displayName });
        })
        .catch((erro) => {
            const erroCode = erro.code;
            if (erroCode === 'auth/wrong-password' || erroCode === 'auth/invalid-email') {
                setModalTitle('Erro');
                setModalMessage('Email ou senha incorretos. Por favor, tente novamente.');
            } else {
                setModalTitle('Erro');
                setModalMessage('Erro ao fazer login. Por favor, tente novamente mais tarde.');
            }
            setModalVisible(true);
        });
}

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <View style={styles.container}>
            <ImageBackground 
            source={require('../../assets/REAL.png')} 
            style={styles.Imagebg}>

                <View style={styles.containerHeader}>
                    <Text style={styles.message}>Bem-Vindo(a)</Text>
                </View>

                <View style={styles.containerForm}>
                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        placeholder="Digite um Email..."
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                            placeholder="Digite sua Senha..."
                            style={styles.input}
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={hidePass}
                        />

                         <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                        {hidePass ?
                            <Ionicons style={styles.icon} name="eye" color="#FFF" size={25} />
                            :
                            <Ionicons style={styles.icon} name="eye-off" color="#FFF" size={25} />}
                    </TouchableOpacity>
                  
                    <TouchableOpacity style={styles.button} onPress={fazerLogin}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.recuperar} onPress={() => navigation.navigate('Re-Senha')}>
                        <Text style={styles.RegisterEsqueci}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.RegisterText}>Não possui conta? Cadastre-se gratuitamente</Text>
                    </TouchableOpacity>
                    </View>
             </ImageBackground>

            {/* Modal de Erro */}
            <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(false)}}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>{modalTitle}</Text>
                            <Text style={styles.modalMessage}>{modalMessage}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                                <Text style={styles.buttonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Imagebg: {
        width: "100%",
        height: "100%"
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20%',
    },
    containerForm: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        flex: 2,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingEnd: '5%',
        paddingStart: '5%',
        marginTop: '20%',
    },
    title: {
        fontSize: 20,
        marginTop: 20,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 18,
    },
    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 18,
    },
    icon: {
        marginLeft: 10,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#F98404',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: "bold",
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: "center",
    },
    RegisterText: {
        color: 'black',
        justifyContent: 'center',
        fontWeight: 'bold',
        bottom: '35%',
        marginTop: 18,
        marginBottom: 12,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    RegisterEsqueci: {
        fontSize: 15,
        color: '#000',
        justifyContent: 'center',
        fontWeight: 'bold',
        bottom: '35%',
        marginTop: 30,
        marginBottom: 12,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#F98404',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});

export default SignIn;
