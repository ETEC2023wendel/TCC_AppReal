import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { auth } from "../../../services/FirebaseConfig";

const Inicio = () => {
  const user = auth.currentUser;
  const nome = user.displayName;

  return (
    <View style={styles.container}>
      {/* Barra Superior */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem-vindo, {nome}!</Text>
      </View>

      {/* Conteúdo Central */}
      <View style={styles.content}>
        {/* Adicione aqui o conteúdo da página */}
        <Text>Real Cangaiba </Text>
      </View>

      {/* Barra Inferior */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tabButton, styles.centerButton]}>
          {/* Botão Central */}
          <Text style={styles.tabButtonText}>Botão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Botão 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton1}>
          <Text style={styles.tabButtonTextCT}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Botão 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Botão 4</Text>
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
  },
  headerText: {
    color: "#FFF",
    fontWeight: "bold",
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
    borderTopColor: "#ccc",
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


export default Inicio;