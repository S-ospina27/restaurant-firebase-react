
import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { Button } from 'react-native-elements';

export const RestaurantsScreen =({navigation})=>{
  const goToAddRestaurants = () =>{
    navigation.navigate("AddRestaurants")
  };
  return (
    <View>
    <Text>Estamos en la vista de resutarante</Text>
    <Button title="Crear restaurantes" onPress={goToAddRestaurants}/>
    </View>
  )
};
