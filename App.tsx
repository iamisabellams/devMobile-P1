import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles2";
import logo from "./assets/logoSkoob.png";
import skeelo from "./assets/logoSkeelo.png";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backIcon}>‹</Text>
      </TouchableOpacity>

      <Image source={logo} style={styles.logo} />

      <Text style={styles.title}>Bom te ver novamente!</Text>
      <Text style={styles.subtitle}>
        Preencha o seu e-mail para acessar sua conta.
      </Text>

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#888"
        style={styles.input}
      />

      <TouchableOpacity style={styles.skeeloCard}>
        <View style={styles.skeeloIconCrop}>
          <Image source={skeelo} style={styles.skeeloIconImage} />
        </View>

        <Text style={styles.skeeloText}>
          Se você tiver uma conta no Skeelo, use-a para entrar no Skoob.
        </Text>

        <Text style={styles.arrowIcon}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
