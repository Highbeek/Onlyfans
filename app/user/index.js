import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import UserCard from "../src/component/UserCard";
import users from "../assets/data/users";
import styles from "../src/styles/styles";

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
