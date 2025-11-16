import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 8,
  },

  backIcon: {
    fontSize: 32,
    color: "#000",
  },

  logo: {
    width: 140,
    height: 50,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
    textAlign: "left",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "left",
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 15,
  },

  skeeloCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 20,
    backgroundColor: "#eaf1f3",
    gap: 12,
  },

  skeeloIconCrop: {
    width: 40,
    height: 40,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "transparent",
  },

  skeeloIconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", 
  },

  skeeloText: {
    flex: 1,
    fontSize: 14.5,
    color: "#333",
  },

  arrowIcon: {
    fontSize: 26,
    color: "#666",
  },

  nextButton: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 50,
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
