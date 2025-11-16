import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  perfilLinha: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginTop: 120,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  infoPerfil: {
    marginLeft: 15,
    justifyContent: "center",
  },

  nomeUsuario: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },

  seguidoresInfo: {
    color: "#ccc",
    marginTop: 4,
  },

  linhaBotoes: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "flex-start",
    gap: 12,
    marginLeft: 18,
  },

  botaoEditar: {
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  textoBotaoEditar: {
    color: "white",
    fontWeight: "bold",
  },

  botaoPequeno: {
    backgroundColor: "#333",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotaoPequeno: {
    color: "white",
    fontSize: 16,
  },

  tituloSessao: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 18,
  },

  areaPlaylists: {
    marginTop: 15,
    paddingHorizontal: 18,
    gap: 20,
  },

  itemPlaylist: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  imgPlaylist: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },

  tituloPlaylist: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  subPlaylist: {
    color: "#aaa",
    marginTop: 2,
    fontSize: 13,
  },

  botaoVerTudo: {
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 20,
  },

  textoVerTudo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },

  tocandoAgora: {
    position: "absolute",
    bottom: 60,
    left: 10,
    right: 10,
    backgroundColor: "#222",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },

  tocandoAgoraInfo: {
    flex: 1,
    flexDirection: "row",
  },

  musicaAgora: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    includeFontPadding: false,
  },

  artistaAgora: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 2,
    includeFontPadding: false,
  },

  tocandoAgoraImg: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },

  tocandoAgoraIcon: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 10,
  },

  tocandoAgoraPlay: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});