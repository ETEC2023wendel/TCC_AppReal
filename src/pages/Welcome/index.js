
import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
 } from "react-native";
 const Imagebg='./assets/REAL.png'

 import * as Animatable from 'react-native-animatable'

 import {useNavigation} from '@react-navigation/native'
 
export default function Welcome() {
    const navigation = useNavigation();

    return(

        <View style={styles.contanier}>
            <View style={styles.Imagebg}>
                <ImageBackground
                source={require('../../assets/REAL.png')}
                style={styles.Imagebg}>
 
            <View style={styles.contanierLogo}>
                <Animatable.Image
                animation="flipInY"
                
                source={require('../../assets/logo.png')} 
                style={ {width: '100%'}}
              
                 />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.contanierForm}>
                <Text style={ styles.title}>"UM POR TODOS</Text>
                <Text style={ styles.title2}>E TODOS PELO REAL"</Text>
                

                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('SignIn')}
                >
                    
                <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
            </ImageBackground>
            </View>
     
        </View>
    );
    }
    const styles = StyleSheet.create({
        Imagebg:{
            width:"100%",
            height:"100%"
        
        },
        contanierLogo:{
            marginTop:"0%",
            marginBottom:0,
            justifyContent: 'center',
            alignItems: 'center'
        },
        contanierForm:{
            flex: 1,
           
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            paddingStart:'5%',
            paddingEnd:'5%'
        },
        title:{
            fontSize: 24,
            fontWeight:'bold',
        
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center'
        },
        title2:{
            fontSize: 24,
            fontWeight:'bold',
            marginBottom:12,
           
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center'
        },
        
        button:{
           position:'absolute',
           backgroundColor:'#FFA500',
           borderRadius:50,
           paddingVertical: 8,
           width: '70%',
           alignSelf:'center',
           bottom:'10%',
        
           justifyContent:'center'
        },
        buttonText:{
           textAlign:"center"
        }


    })