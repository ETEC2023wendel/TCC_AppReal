import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { auth } from "../../../../services/FirebaseConfig";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';

 

const Calendario = () => {

  const user = auth.currentUser;

  const nome = user.displayName;

  const navigation = useNavigation();

  return (

    <View style={styles.container}>

      {/* Barra Superior */}

      <View style={styles.header}>

        <Text style={styles.headerText}>Bem-vindo, {nome}!</Text>

      </View>

 

      {/* Conteúdo Central */}

      <View style={styles.content}>

        {/* Adicione aqui o conteúdo da página */}

        <Text>Calendario </Text>

      </View>

 

      {/* Barra Inferior */}

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => {
            navigation.navigate("Noticias");
          }}
        >
          <Ionicons name="newspaper" color="black" size={32} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => {
            navigation.navigate("Time");
          }}
        >
          <Ionicons name="football" color="black" size={32} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, styles.centerButton]}
          onPress={() => {
            navigation.navigate("Conteudo");
          }}
        >
          <Ionicons name="home" color="black" size={50} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => {
            navigation.navigate("Agenda");
          }}
        >
          <Ionicons name="calendar" color="black" size={32} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => {
            navigation.navigate("Social");
          }}
        >
          <Ionicons name="share-social" color="black" size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
 


const styles = StyleSheet.create({

  container: {

    flex: 1,

  },

  header: {
    height: 100,
    backgroundColor: "#F98404",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1, // Adiciona uma borda preta na parte inferior do cabeçalho
    borderBottomColor: "black", // Cor da borda preta
  },

  headerText: {

    color: "black",

    fontWeight: "bold",
    fontSize:26,

  },

  content: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

  },

  tabBar: {

    flexDirection: "row",

    height: 60,

    borderTopWidth: 1,

    borderTopColor: "black",

    backgroundColor:"#F98404"

  },

  tabButton: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

  },

  centerButton: {

    width: 70, // Largura um pouco maior para o botão central

  },

  tabButtonText: {

    fontSize: 16,

  },

  tabButton1:{

    fontSize: 18,

    borderRadius:10,

    height:100,

    width:60,

    alignItems:'center',

    backgroundColor:'black'

 },

 tabButtonTextCT:{

color:'white',

textAlign:'center',

marginTop:25

 }

});

 

 

export default Calendario;