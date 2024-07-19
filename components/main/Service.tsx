import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Robotics Solutions',
    description: 'We design and develop custom robots for various fields such as healthcare, education, and industry.',
    image: '/robot-automation.jpg', // Update with the actual image path
  },
  {
    title: 'IoT Development',
    description: 'We create innovative IoT solutions to connect and automate systems in smart homes, industries, and more.',
    image: '/iot-automation.png', // Update with the actual image path
  },
  {
    title: 'Workshops and Training',
    description: 'We organize workshops and training sessions on IoT and robotics to help individuals and organizations stay ahead in technology.',
    image: '/workshop.jpg', // Update with the actual image path
  },
  {
    title: 'Lab Setup',
    description: 'We provide comprehensive lab setup services for educational institutions and organizations to foster hands-on learning in robotics and IoT.',
    image: '/lab-setup.png', // Update with the actual image path
  },
];

const Services = () => {
  return (
    <section id='services' className='flex flex-col items-center justify-center py-20 z-40 relative cursor-pointer '>
      <h2 className='text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>Our Services</h2>
      <div className='flex flex-wrap justify-center gap-10 z-60 relative '>
        {services.map((service, index) => (
          <div key={index} className='max-w-sm bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110'>
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-2xl font-bold mb-2 text-white'>{service.title}</h3>
              <p className='text-white opacity-75'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
