import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/styles";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

export default function UserProfileHeader({ user,isSubscribed, setIsSubscribed }) {
  
  const router = useRouter();

  return (
    <View>
      <ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>
        <View style={styles.overlay} />
        <SafeAreaView
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color="white"
            onPress={() => router.back()}
          />
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: 500,
                marginBottom: 5,
              }}
            >
              {user.name}{" "}
            </Text>
            <Text style={{ color: "white" }}>
              1.4K Posts · 64.3K Likes · 15.3K Fans
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: -50,
          }}
        >
          <Image src={user.avatar} style={styles.userImage} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 20,
            }}
          >
            <View style={styles.profileIcon}>
              <FontAwesome name="share-square-o" size={24} color="#00AFF0" />
            </View>
            <View style={styles.profileIcon}>
              <MaterialCommunityIcons
                name="message-minus-outline"
                size={24}
                color="#00AFF0"
              />
            </View>
            <View style={styles.profileIcon}>
              <AntDesign name="staro" size={24} color="#00AFF0" />
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 20, fontWeight: 600, marginVertical: 5 }}>
          {user.name}{" "}
        </Text>
        <Text style={{ color: "gray", marginBottom: 10 }}>@{user.handle} </Text>
        <Text style={{ lineHeight: 20 }}>{user.bio} </Text>

        <Text style={{ color: "gray", marginTop: 20, fontWeight: "bold" }}>
          SUBSCRIPTION
        </Text>
        <Pressable
          style={[
            styles.btn,
            { backgroundColor: isSubscribed ? "white" : "#00AFF0" },
          ]}
          onPress={() => setIsSubscribed(!isSubscribed)}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isSubscribed ? "#00AFF0" : "white" },
            ]}
          >
            {isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
          </Text>
          <Text
            style={[
              styles.buttonText,
              { color: isSubscribed ? "#00AFF0" : "white" },
            ]}
          >
            {user.subscriptionPrice === 0
              ? "FOR FREE"
              : ` $${user.subscriptionPrice} / month`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
