import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { useRouter, useSearchParams } from "expo-router";
import users from "../assets/data/users";
import styles from "../src/styles/styles";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import UserProfileHeader from "../src/component/UserProfileHeader";
import posts from "../assets/data/posts";
import Post from "../src/component/Post";

export default function ProfilePage() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { id } = useSearchParams();

  const user = users.find((u) => u.id === id);
  if (!user) {
    return <Text>User not found!</Text>;
  }

  if (!isSubscribed) {
    return (
      <View>
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                color: "#00AFF0",
                paddingHorizontal: 40,
                paddingVertical: 20,
              }}
            >
              90 POSTS
            </Text>
            <Text
              style={{
                color: "gray",
                paddingHorizontal: 40,
              }}
            >
              87 MEDIA
            </Text>
          </View>
          <View
            style={{ justifyContent: "center", alignItems: "center", gap: 30 }}
          >
            <AntDesign
              name="lock"
              size={60}
              color="gray"
              style={{ opacity: 0.2 }}
            />
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                paddingHorizontal: 20,
                paddingVertical: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
              >
                <View style={styles.postIcon}>
                  <MaterialCommunityIcons
                    name="post-outline"
                    size={18}
                    color="gray"
                  />
                  <Text>90</Text>
                </View>
                <Text style={{ fontWeight: 700, fontSize: 24, color: "gray" }}>
                  ·
                </Text>
                <View style={styles.postIcon}>
                  <AntDesign name="picture" size={18} color="gray" />
                  <Text>81</Text>
                </View>
                <Text style={{ fontWeight: 700, fontSize: 24, color: "gray" }}>
                  ·
                </Text>
                <View style={styles.postIcon}>
                  <AntDesign name="videocamera" size={18} color="gray" />
                  <Text>6</Text>
                </View>
              </View>
              <Pressable style={[styles.btn, { backgroundColor: "#00AFF0" }]}>
                <Text style={{ width: "90%", backgroundColor: "#00AFF0", color:'#fff', fontWeight:600 }}>
                  SUBSCRIBE TO SEE USERS POST
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={() => (
          <UserProfileHeader
            user={user}
            isSubscribed={isSubscribed}
            setIsSubscribed={setIsSubscribed}
          />
        )}
      />
    </View>
  );
}
