import React from 'react';
import { FaCheck, FaClock, FaUser, FaBookOpen, FaInfinity, FaCalendar } from 'react-icons/fa';
import { Tab } from '@headlessui/react';
const Header = () => (
  <div className="text-center my-4">
    <h1 className="text-4xl font-bold mb-2">Eğitim Ücretleri</h1>
    <p className="text-lg text-gray-600">Abone olmak için, istediğiniz paketi tıklayarak satın alabilirsiniz.</p>
  </div>
);

const PricesCard = () => {
    return (
      <div className="relative flex flex-col items-center p-8 bg-[#F0F5F9] rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 w-80 mx-2 my-4 md:mx-0">
        <div className="absolute top-0 right-0 mt-2 mr-2 bg-[#DC4444] text-white text-xs font-semibold py-1 px-2 rounded-bl-full">15% OFF</div>
        <h2 className="mt-4 mb-2 text-3xl tracking-wide title-font font-bold text-black text-center">PLAN</h2>
        <p className="text-gray-600 text-center">A brief description about the plan can go here...</p>
        <div className="mb-6 border-b border-gray-200 w-full"></div>
        <div className="flex flex-col items-start text-black space-y-5 w-full">
          <PriceItem label="8 lessons" price="154₺ / lesson" Icon={FaBookOpen} />
          <PriceItem label="For 4 weeks" price="180₺" Icon={FaCalendar} />
          <PriceItem label="Total cost" price="1232₺" Icon={FaInfinity} />
          <div className="border-b border-gray-200 w-full my-4"></div>
          <ul className="list-disc list-inside space-y-2 w-full">
            <ListItem text="2 lessons per week" />
            <ListItem text="Native English teachers" Icon={FaUser} />
            <ListItem text="40-minute One-on-One lessons" Icon={FaClock} />
            <ListItem text="24/7 unlimited live classes" Icon={FaInfinity} />
          </ul>
        </div>
        <button className="mt-6 bg-gradient-to-r from-[#1f0606] to-[#2a0e0e] text-white py-2 px-4 w-full rounded-md shadow-md focus:outline-none hover:from-[#DC6666] hover:to-[#DC4444] transition-colors duration-300">Select Plan</button>
      </div>
    );
};

const PriceItem = ({ label, price, Icon }) => (
  <div className="flex justify-between w-full items-center text-lg mb-2">
    {Icon && <Icon className="text-gray-800 mr-2" />}
    <span className="text-gray-800 font-medium">{label}</span>
    <span className="text-black text-2xl font-bold">{price}</span>
  </div>
);

const ListItem = ({ text, Icon }) => (
  <li className="flex items-center text-lg w-full">
    {Icon ? <Icon className="text-gray-500 mr-2" /> : <FaCheck className="text-gray-500 mr-2" />}
    <span className="text-gray-700 font-medium">{text}</span>
  </li>
);

const PlanDisplay = () => {
  return (
    <>
    <Header />
    <Tab.Group>
      <Tab.List className="flex justify-center p-1 space-x-1 mb-4">
        <Tab className={({ selected }) => (
          `py-2 px-4 uppercase tracking-wider font-semibold text-sm rounded-md transition-colors 
          ${selected ? 'border-b-2 border-[#230d0d] text-[#dbd4d4]' : 'text-gray-500 border-b-2 border-transparent'}`
        )}>
          Standard Plan
        </Tab>
        <Tab className={({ selected }) => (
          `py-2 px-4 uppercase tracking-wider font-semibold text-sm rounded-md transition-colors 
          ${selected ? 'border-b-2 border-[#0e0202] text-[#6d3f3f]' : 'text-gray-500 border-b-2 border-transparent'}`
        )}>
          Premium Plan
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-2">
        <Tab.Panel>
          <div className="flex flex-wrap justify-center items-start overflow-x-auto md:overflow-visible gap-x-[1rem] gap-y-[1rem] transition-all duration-500">
            {[...Array(3)].map((_, i) => (
              <PricesCard key={i} />
            ))}
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="flex flex-wrap justify-center items-start overflow-x-auto md:overflow-visible gap-x-[1rem] gap-y-[1rem] transition-all duration-500">
            {[...Array(2)].map((_, i) => (
              <PricesCard key={i} />
            ))}
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </>
  );
};

export default PlanDisplay;
