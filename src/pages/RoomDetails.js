import React, { useContext,useState } from 'react';
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import { RoomContext } from '../context/RoomContext';
import { FaCheck } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';
import { useParams } from 'react-router-dom';
import { icons } from 'react-icons';



const RoomDetails = () => {
  const {rooms}=useContext(RoomContext);
  const {id}=useParams();
  
  
  const room=rooms.find((room)=>{
    return room.id===Number(id);
  })
  const {name,description,facilities,imageLg,price}=room;
  const images = [
    room.imageLg,
    room.imageLg,
    room.imageLg,
    room.imageLg,
    room.imageLg,
    room.imageLg
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  return <section className=''>
      <div className='bg-chambre bg-cover bg-center h-[560px] relative flex justify-center items-center'>
          <div className='absolute w-full h-full'>
            
          </div>
          <h1 className='text-6xl text-white z-20 font-primary text-center'>{name} Details</h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          <div className='w-full h-full lg:w-[60%] px-6'>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative max-w-3xl w-full p-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Room facilities</h3>
              <p className='mb-12'>
                {description}
              </p>
              <div className='grid grid-cols-2 gap-6 mb-12'>
                {facilities.map((item,index)=>{
                  const {name,icon}=item;
                  return <div className='flex items-center gap-x-3 flex-1'  key={index}>
                    <div className='text-3xl text-accent' >{icon}</div>
                    <div className='text-3xl text-base' >{name}</div>
                  </div>
                })}
              </div>
            </div>
          </div>
          <div className='w-full h-full lg:w-[40%]'>
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Your Reservation </h3>
                <div className='h-[60px]'>
                  <CheckIn/>
                </div>
                <div className='h-[60px]'>
                  <CheckOut/>
                </div>
                <div className='h-[60px]'>
                  <AdultsDropdown/>
                </div>
                <div className='h-[60px]'>
                  <KidsDropdown/>
                </div>
              </div>
              <button className='btn btn-lg btn-primary w-full'>Book now for ${price}</button>

            </div>
            <div>
              <h3 className='h3'>Hotel rules</h3>
              <p className='mb-6'>
                {description}
              </p>
              <ul className='flex  flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent'/>
                  Check-in: 3:00 PM - 9:00 PM 
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent'/>
                  Check-out: 10:30 AM 
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent'/>
                  No pets
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent'/>
                  No smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </section>;
};

export default RoomDetails;
