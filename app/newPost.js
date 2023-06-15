import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

export default function NewPost() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const router = useRouter();

  const onPost = () => {
    console.warn("Post: ", text);
    setText("");
    Keyboard.dismiss();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
        <Ionicons
          name="arrow-back"
          size={28}
          color="black"
          onPress={() => router.back()}
        />
        <Text style={{fontWeight:'500', fontSize:20}}>New Post</Text>
      </View>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View>
          <TextInput
            placeholder="Compose new post..."
            placeholderTextColor="gray"
            value={text}
            onChangeText={setText}
            multiline
            numberOfLines={3}
          />
        </View>

        <View style={{ marginVertical: 15 }}>
          <Feather onPress={pickImage} name="image" size={24} color="gray" />
        </View>

        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: "100%", aspectRatio: 1 }}
          />
        )}

        <Button title="Post" onPress={onPost} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
