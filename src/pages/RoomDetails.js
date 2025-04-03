import React, { useContext } from 'react';
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import { RoomContext } from '../context/RoomContext';
import { FaCheck } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';
import { useParams } from 'react-router-dom';



const RoomDetails = () => {
  const {rooms}=useContext(RoomContext);
  const {id}=useParams();
  const room=rooms.find((room)=>{
    return room.id===Number(id);
  })
  const {name,description,facilities,imageLg}=room;

  return <section className='bg-pink-200'>
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
          <div className='absolute w-full h-full'>

          </div>
          <h1 className='text-6xl text-white z-20 font-primary text-center'>{name} Details</h1>
      </div>
  </section>;
};

export default RoomDetails;
