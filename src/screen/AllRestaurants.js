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

const AllRestaurants = () => {
  const Data = [
    {
      id: 1,
      rate: 4.3,
      background: require("../assets/images/pizzaRes.png"),
      restaurant: "Pizza",
      time: "5-10 min",
      ship: "Free delivery",
      dish1: "Pizza",
      dish2: "Burger",
      dish3: "Chicken",
    },
    {
      id: 2,
      rate: 4.5,
      background: require("../assets/images/burgerFood.png"),
      restaurant: "Berger",
      time: "5-10 min",
      ship: "Free delivery",
      dish1: "Pizza",
      dish2: "Burger",
      dish3: "Chicken",
    },
    {
      id: 3,
      rate: 4.7,
      background: require("../assets/images/detail.png"),
      restaurant: "Chicken",
      time: "5-10 min",
      ship: "Free delivery",
      dish1: "Pizza",
      dish2: "Burger",
      dish3: "Chicken",
    },
    {
      id: 4,
      rate: 4.9,
      background: require("../assets/images/restaurant.png"),
      restaurant: "Bánh mì",
      time: "5-10 min",
      ship: "Free delivery",
      dish1: "Pizza",
      dish2: "Burger",
      dish3: "Chicken",
    },
  ];
  const Header = () => (
    <ImageBackground
      style={styles.container1}
      source={require("../assets/images/pizzaRes.png")}
    >
      <View style={styles.formView8}>
        <Text style={styles.formTxt1}>All Restaurants</Text>
        <Text style={styles.formTxt2}>7 results</Text>
      </View>
    </ImageBackground>
  );
  const Body = ({ item }) => (
    <TouchableOpacity style={styles.container}>
      <View style={styles.inContainer}>
        <ImageBackground
          source={item.background}
          resizeMode="cover"
          imageStyle={{
            height: 120,
            width: "100%",
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
        >
          <View style={styles.formView1}>
            <View style={styles.formView2}>
              <Text style={{ fontWeight: "600" }}>{item.rate}</Text>
              <Image
                source={require("../assets/images/star.png")}
                style={{ height: 12, width: 12, marginLeft: 8 }}
              ></Image>
            </View>
            <Image
              source={require("../assets/images/heart.png")}
              style={{ height: 30, width: 30 }}
            ></Image>
          </View>
        </ImageBackground>
      </View>
      <Text style={{ fontSize: 17, fontWeight: "500", margin: 8 }}>
        {item.restaurant}
      </Text>
      <View style={styles.formView3}>
        <View style={styles.formView4}>
          <Image
            style={styles.formImage}
            source={require("../assets/images/scooter.png")}
          ></Image>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>{item.ship}</Text>
        </View>
        <View style={styles.formView5}>
          <Image
            style={[styles.formImage, { tintColor: "#fd9174" }]}
            source={require("../assets/images/clock.png")}
          ></Image>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.formView6}>
        <View style={styles.formView7}>
          <Text style={{ color: "#b6b6bd" }}>{item.dish1}</Text>
        </View>
        <View style={styles.formView7}>
          <Text style={{ color: "#b6b6bd" }}>{item.dish2}</Text>
        </View>
        <View style={styles.formView7}>
          <Text style={{ color: "#b6b6bd" }}>{item.dish3}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container2}>
      <Header></Header>
      <FlatList
        data={Data}
        renderItem={Body}
        horizontal={false}
        contentContainerStyle={{ alignItems: "center", marginTop: 50 }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: { flex: 1, alignItems: "center", backgroundColor:'white' },
  container1: {
    height: 330,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 240,
    width: 340,
    marginVertical: 15,
    borderRadius: 15,
    backgroundColor: "white",
  },
  inContainer: {
    height: 120,
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  formView1: {
    height: 48,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  formView2: {
    backgroundColor: "white",
    height: 30,
    width: 60,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  formView3: {
    height: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  formView4: {
    height: "100%",
    width: "32%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  formView5: {
    height: "100%",
    width: "25%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 18,
  },
  formView6: {
    height: 50,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  formView7: {
    height: 30,
    width: 60,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9e9e9",
    marginHorizontal: 10,
  },
  formView8: {
    height: "100%",
    width: "95%",
    justifyContent: "flex-end",
  },
  formTxt1: {
    fontSize: 30,
    fontWeight: "700",
    width: 90,
    marginBottom: 22,
    color: "#fe724c",
  },
  formTxt2: {
    color: "#b2b1b9",
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "500",
  },
  formImage: { height: 13, width: 13, tintColor: "#feb19c" },
});

export default AllRestaurants;
