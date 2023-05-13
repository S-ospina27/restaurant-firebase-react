import React, { useState } from "react";
import { View } from "react-native";
import { ListItem, Text, Icon } from "react-native-elements";
import { Modal } from "../shared/Modal/Modal";
import { ChangeDisplayNameForm } from "./ChangeDisplayName/ChangeDisplayNameForm";

export const AcountOptions = ({onReload}) => {
  const [show,setShow]= useState(false);
  const [renderComponent,setRenderComponent]= useState(null);

  const selectedComponent = (key) => {
    if (key === "displayName") {
      setRenderComponent(<ChangeDisplayNameForm onReload={onReload} close={setShow} />)
    }
    if (key === "Email") {
      setRenderComponent(<Text>cambiando email</Text>)


    }
    if (key === "password") {
      setRenderComponent(<Text>cambiando password</Text>)

     
    }
    setShow(true)
  };
  const menuOptions = getMenuOptions(selectedComponent);

  return (
    <View>
      {menuOptions.map((menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
      <Modal show={show} close={()=>setShow(false)} >
     { renderComponent}
      </Modal>
    </View>
  );
};

const getMenuOptions = (selectedComponent) => {
  return [
    {
      title: "Cambiar Nombre y Apellidos",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("displayName"),
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("Email"),
    },
    {
      title: "Cambiar Contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("password"),
    },
  ];
};
