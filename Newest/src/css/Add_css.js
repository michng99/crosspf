import { StyleSheet } from "react-native";

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    direction: "column",
    
  },
  cover: {
    width: "100%",
    height: 183,
    backgroundColor: "#EEF1F4",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#4E4B66",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  press: {
    backgroundColor: "#1877F2",
    borderRadius: 6,
    borderWidth: 1,
    width: 109,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // bottom:,

  },
});

export default myStyle;
