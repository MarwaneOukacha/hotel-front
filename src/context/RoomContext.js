import React,{createContext,useEffect,useState} from 'react';
import {roomData} from '../data';

export const RoomContext=createContext();

const RoomProvider = ({children}) => {
  
  
  const [rooms,setRooms]=useState(roomData);

  return <RoomContext.Provider value={{ rooms, setRooms }}>
        {children}
    </RoomContext.Provider>;
};

export default RoomProvider;
