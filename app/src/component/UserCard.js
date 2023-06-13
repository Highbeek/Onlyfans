import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import styles from "../styles/styles";

export default function UserCard({ user }) {
  return (
    <View>
      <ImageBackground
        source={{ uri: user.coverImage }}
        style={styles.userCard}
      >
        <View style={styles.overlay} />
        {/* Image */}
        <Image source={{ uri: user.avatar }} style={styles.userImage} />
        <View>
          {/* Name and handle */}
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userHandle}>@{user.handle}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
