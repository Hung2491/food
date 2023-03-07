import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Button from "../components/button";
import Input from "../components/fromTextInput";

const CustomerOder = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" , backgroundColor:'white'}}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/account.png")}
          style={styles.image}
        ></Image>
        <Text style={[styles.txt, { fontSize: 18, fontWeight: "600" }]}>
          Phạm Quốc Hùng
        </Text>
        <Text style={[styles.txt, { color: "#b2b1b9" }]}>Edit Profile</Text>
      </View>
      <View style={styles.formView}>
        <Input title={"Full Name"} placeholder={"Phạm Quốc Hùng"}></Input>
        <Input
          title={"E-mail"}
          placeholder={"phamhung240901@gmail.com"}
        ></Input>
        <Input title={"Phone Number"} placeholder={"0975969982"}></Input>
      </View>
      <Button title={"Orders"}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: { marginVertical: 5 },
  container: {
    height: 270,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: { height: 85, width: 85 },
  formView: { width: "90%", height: 380, justifyContent: "space-around" },
});
export default CustomerOder;
