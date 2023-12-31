import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import UserCard from "./src/component/UserCard";
import users from "./assets/data/users";
import styles from "./src/styles/styles";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href={"/newPost"}>New post</Link>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
