import React, { useEffect, useState } from 'react'
import {getAuth,onAuthStateChanged} from "firebase/auth";
import { UserGuestScreen } from './UserGuestScreen/UserGuestScreen';
import { LoadingModal } from '../../components/shared/LoadingModal/LoadingModal';
import { useNavigation } from '@react-navigation/native';
import { UserLoggedScreen } from './UserLoggedScreen/UserLoggedScreen';


export const Account = () =>{
  const [hasLogged,setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
      setHasLogged(user ? true : false);
    })
  }, [])

  if (hasLogged === null ) {
    return <LoadingModal show text={"Cargando"}/>
  }
  
  return  hasLogged ? <UserLoggedScreen/> : <UserGuestScreen/> 
}


