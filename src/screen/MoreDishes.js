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
import { Header } from "react-native/Libraries/NewAppScreen";

const MoreDishes = () => {
  const Data = [
    {
      id: 1,
      description: "Burger",
    },
    {
      id: 2,
      description: "Dessert",
    },
    {
      id: 3,
      description: "HotDog",
    },
    {
      id: 4,
      description: "Pizza",
    },
  ];
  const Data1 = [
    {
      id: 1,
      money: "15 $",
      description: "Combo 1",
      image: require("../assets/images/burgerFood.png"),
    },
    {
      id: 2,
      money: "20 $",
      description: "Combo 2",
      image: require("../assets/images/favoritesCard.png"),
    },
    {
      id: 3,
      money: "25 $",
      description: "Combo 3",
      image: require("../assets/images/basketFood.png"),
    },
    {
      id: 4,
      money: "30 $",
      description: "Combo 4",
      image: require("../assets/images/restaurant.png"),
    },
  ];
  const Dishes = ({ item }) => (
    <TouchableOpacity style={styles.buton1}>
      <Text style={{ color: "white" }}>{item.description}</Text>
    </TouchableOpacity>
  );
  const Header = () => (
    <View style={styles.container}>
      <View style={styles.formView1}>
        <View style={styles.formView2}>
          <View>
            <Text style={{ fontSize: 26, fontWeight: "600", marginBottom: 8 }}>
              KFC
            </Text>
            <View style={styles.formView3}>
              <Image
                source={require("../assets/images/placeholder.png")}
                style={styles.formImage1}
              ></Image>
              <TextInput
                placeholder="304 Ngô Gia Tự"
                style={{ fontSize: 15, marginLeft: 5 }}
              ></TextInput>
            </View>
          </View>
          <Image
            source={require("../assets/images/profilePhoto.png")}
            style={styles.formImage2}
          ></Image>
        </View>
      </View>
      <FlatList
        data={Data}
        renderItem={Dishes}
        horizontal
        contentContainerStyle={{ marginTop: 40, marginLeft: 20 }}
      ></FlatList>
    </View>
  );
  const Body = ({ item }) => (
    <TouchableOpacity style={styles.buton2}>
      <Image style={styles.formImage3} source={item.image}></Image>
      <View style={styles.formView4}>
        <Text style={{ fontSize: 17, fontWeight: "500", color: "white" }}>
          {item.description}
        </Text>
        <View style={styles.formView5}>
          <Text style={{ color: "white" }}>{item.money}</Text>
          <Image
            source={require("../assets/images/add.png")}
            style={styles.formImage4}
          ></Image>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      ListHeaderComponent={Header}
      numColumns={2}
      data={Data1}
      renderItem={Body}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  buton1: {
    height: 25,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: "#fe724c",
  },
  buton2: {
    height: 215,
    width: 180,
    margin: 8,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#fe724c",
  },
  container: {
    height: 220,
    width: "100%",
  },
  formView1: {
    height: 125,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  formView2: {
    height: "100%",
    width: "85%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  formView3: { flexDirection: "row" },
  formView4: {
    height: 60,
    width: "85%",
    marginTop: 8,
    justifyContent: "space-around",
  },
  formView5: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formImage1: { height: 28, width: 28 },
  formImage2: { height: 50, width: 50, borderRadius: 10 },
  formImage3: { height: 135, width: 130, borderRadius: 25, marginTop: 5 },
  formImage4: { height: 25, width: 25, tintColor: "white" },
});

export default MoreDishes;
