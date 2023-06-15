import React from "react";
import { View, Text, Image, ImageBackground,Pressable } from "react-native";
import styles from "../styles/styles";
import { Link } from "expo-router";

export default function UserCard({ user }) {
  return (
    <View>
      <Link href={`/user/${user.id}`} asChild>
        <Pressable>
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
        </Pressable>
      </Link>
    </View>
  );
}
