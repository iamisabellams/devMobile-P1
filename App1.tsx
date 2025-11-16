import React from "react";
import {View, Text, Image, TouchableOpacity, ImageBackground} from "react-native";
import { styles } from "./styles";
import icon from "./assets/icon.jpg";
import playlist1 from "./assets/batman.jpg";
import playlist2 from "./assets/dick.jpg";
import playlist3 from "./assets/jason.jpg";
import bg from "./assets/bg.png";
import tlou from "./assets/tlou.png";

const SpotifyClone = () => {
  return (
    <ImageBackground 
    source={bg} 
    style={styles.backgroundImage}>
      <View style={styles.container}>

        <View style={styles.perfilLinha}>
          <Image source={icon} style={styles.avatar} />

          <View style={styles.infoPerfil}>
            <Text style={styles.nomeUsuario}>isa</Text>
            <Text style={styles.seguidoresInfo}>
              10 seguidores • 10 seguindo
            </Text>
          </View>
        </View>

        <View style={styles.linhaBotoes}>
          <TouchableOpacity style={styles.botaoEditar}>
            <Text style={styles.textoBotaoEditar}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoPequeno}>
            <Text style={styles.textoBotaoPequeno}>⤴</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoPequeno}>
            <Text style={styles.textoBotaoPequeno}>⋯</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.tituloSessao}>Playlists</Text>

        <View style={styles.areaPlaylists}>
          <View style={styles.itemPlaylist}>
            <Image 
            source={playlist1} 
            style={styles.imgPlaylist} />
            <View>
              <Text style={styles.tituloPlaylist}>out of my mind</Text>
              <Text style={styles.subPlaylist}>0 salvamentos · isa</Text>
            </View>
          </View>

          <View style={styles.itemPlaylist}>
            <Image 
            source={playlist2} 
            style={styles.imgPlaylist} />
            <View>
              <Text style={styles.tituloPlaylist}> the man of the year, grayson </Text>
              <Text style={styles.subPlaylist}>0 salvamentos · isa</Text>
            </View>
          </View>

          <View style={styles.itemPlaylist}>
            <Image 
            source={playlist3} 
            style={styles.imgPlaylist} />
            <View>
              <Text style={styles.tituloPlaylist}>ur mine, jason</Text>
              <Text style={styles.subPlaylist}>0 salvamentos · isa</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.botaoVerTudo}>
          <Text style={styles.textoVerTudo}>Ver todas as playlists</Text>
        </TouchableOpacity>

        <View style={styles.tocandoAgora}>
          <Image 
          source={tlou} 
          style={styles.tocandoAgoraImg} />

          <View style={styles.tocandoAgoraInfo}>
            <Text style={styles.musicaAgora}>Future Days  · </Text>
            <Text style={styles.artistaAgora}>Troy Baker</Text>
          </View>

          <TouchableOpacity style={styles.tocandoAgoraPlay}>
            <Text style={styles.tocandoAgoraIcon}>▶</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
};

export default SpotifyClone;