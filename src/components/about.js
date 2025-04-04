import React from "react";
import About01 from '../assets/img/rooms/chill01.jpg';
import About02 from '../assets/img/rooms/chill01.jpg';
import About03 from '../assets/img/rooms/spic.jpg';



const About = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-0">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="font-tertiary uppercase text-[15px] tracking-[6px] text-accent">
            About us
          </div>
          <h2 className="font-primary text-[45px] mb-4">Who We Are</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Experience luxury and tranquility in the heart of Morocco. Our hotel
            blends traditional elegance with modern comfort to provide an
            unforgettable stay.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="flex flex-col lg:flex-row items-center mb-20">
          <div className="w-full lg:w-1/2">
            <img
              src={About01}
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 text-center lg:text-left">
            <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 text-lg">
              Founded with a passion for hospitality, our hotel has been a
              sanctuary for travelers seeking authenticity and comfort. Nestled
              in the heart of Morocco, we offer a blend of tradition and
              modernity.
            </p>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="flex flex-col lg:flex-row-reverse items-center mb-20">
          <div className="w-full lg:w-1/2">
            <img
              src={About03}
              alt="Our Services"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 text-center lg:text-left">
            <h3 className="text-3xl font-semibold mb-4">Our Services</h3>
            <p className="text-gray-600 text-lg">
              From luxury accommodations to curated desert tours, we offer an
              exclusive range of services designed for your ultimate relaxation.
              Enjoy fine dining, spa treatments, and breathtaking landscapes.
            </p>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <img
              src={About02}
              alt="Our Values"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 text-center lg:text-left">
            <h3 className="text-3xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600 text-lg">
              Sustainability, cultural authenticity, and guest satisfaction are
              at the heart of everything we do. We strive to create an
              eco-friendly, welcoming environment for all guests.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
