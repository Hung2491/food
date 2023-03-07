import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import HalfEnd from "./HalfEnd";

const Upper = () => {
  const Data = [
    {
      id: 1,
      icon: require("../../assets/images/burger.png"),
      description: "Burger",
    },
    {
      id: 2,
      icon: require("../../assets/images/donut.png"),
      description: "Dessert",
    },
    {
      id: 3,
      icon: require("../../assets/images/hotdog.png"),
      description: "HotDog",
    },
    {
      id: 4,
      icon: require("../../assets/images/pizza.png"),
      description: "Pizza",
    },
  ];
  const Hearder = () => (
    <View style={styles.container}>
      <View style={{ height: "100%", width: "90%" }}>
        <View style={styles.formView}>
          <Image
            style={styles.image}
            source={require("../../assets/images/list.png")}
          ></Image>
          <Image
            style={styles.image}
            source={require("../../assets/images/profilePhoto.png")}
          ></Image>
        </View>
        <Text style={styles.formTxt}>What would you like to order</Text>
        <View style={styles.formView1}>
          <View style={styles.formView2}>
            <Image
              style={{ height: 25, width: 25, marginHorizontal: 15 }}
              source={require("../../assets/images/search.png")}
            ></Image>
            <TextInput
              placeholder="Find for food or restaurant..."
              style={styles.formInput}
            ></TextInput>
          </View>
          <TouchableOpacity>
            <Image
              style={{ height: 55, width: 55 }}
              source={require("../../assets/images/list.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  const Body = ({ item }) => (
    <TouchableOpacity style={styles.bodyView}>
      <Image
        source={item.icon}
        style={{ height: 60, width: 60, borderRadius: 50, marginBottom: 10 }}
      ></Image>
      <Text style={{ marginBottom: 20, color:"white",fontSize:13 }}>{item.description}</Text>
    </TouchableOpacity>
  );
  const RenderUpperHalf = () => (
    <FlatList
      ListHeaderComponent={Hearder}
      data={Data}
      renderItem={Body}
      numColumns={4}
      columnWrapperStyle={{ justifyContent: "center" }}
    ></FlatList>
  );
  return (
    <View style={{ backgroundColor: "#fefefe" }}>
      <RenderUpperHalf></RenderUpperHalf>
      <HalfEnd></HalfEnd>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: { height: 43, width: 43, borderRadius: 15 },
  formView: {
    height: 95,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  formView1: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formView2: {
    height: 55,
    width: "80%",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#eeeeee",
    borderColor: "#b2b1b9",
  },
  formInput: {
    width: "80%",
    height: "100%",
    fontSize: 15,
    padding: 10,
  },
  formTxt: { fontSize: 30, fontWeight: "600", marginVertical: 8 },
  bodyView: {
    height: 125,
    width: 70,
    borderRadius: 50,
    backgroundColor: "#fe724c",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 9,
  },
});

export default Upper;
