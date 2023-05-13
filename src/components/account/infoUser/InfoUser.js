import React, { useState } from "react";
import { View } from "react-native";
import { Avatar, Text } from "react-native-elements";
import { getAuth ,updateProfile} from "firebase/auth";
import {getDownloadURL, getStorage,ref,uploadBytes} from "firebase/storage"
import { styles } from "./infoUserStyle";
import * as ImagePiker from "expo-image-picker";
export const InfoUser = () => {
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const [avatar,setAvatar]= useState(photoURL)

  const handleChangeAvatar = async () => {
    const result = await ImagePiker.launchImageLibraryAsync({
      mediaTypes: ImagePiker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[4,3]
    })
    if (!result.canceled) uploadImage(result.assets[0].uri) 
      
    
  };

  const uploadImage = async (uri) =>{
   
    const response = await fetch(uri);
    const blob= await response.blob();
    const storage= getStorage();
    const storageRef= ref(storage,`avatar/${uid}`)
    uploadBytes(storageRef,blob).then((snapshot)=>{
      updatePhotoUrl(snapshot.metadata.fullPath)
    
    })
  }

  const updatePhotoUrl = async (imagepath)=>{
    const storage = getStorage();
    const imageRef= ref(storage,imagepath);
    const imageUrl= await getDownloadURL(imageRef);
    const auth = getAuth();
    updateProfile(auth.currentUser,{photoURL:imageUrl})
    setAvatar(imageUrl)
  }
  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={handleChangeAvatar} />
      </Avatar>
      <View>
        <Text style={styles.displayname}>{displayName || "laura"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
};
