import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
  },
  userCard: {
    backgroundColor: "gray",
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 5,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    ...StyleSheet.absoluteFill,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    marginRight: 20,
  },
});

export default styles;
