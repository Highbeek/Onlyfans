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
  userHandle: {
    color: "white",
  },
  userName: {
    color: "#fff",
  },
  cover: {
    height: 200,
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0, 0.5)",
  },
  profileIcon: {
    height: 35,
    width: 35,
    borderWidth: 0.5,
    borderColor: "#00AFF0",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#00AFF0",
    fontWeight: 600,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gainsboro",
    paddingHorizontal: 20,
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
  },
  postIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  },
});

export default styles;
