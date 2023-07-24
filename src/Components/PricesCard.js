import React from 'react';
import { FaCheck, FaClock, FaUser, FaBookOpen, FaInfinity, FaCalendar } from 'react-icons/fa';
import { Tab } from '@headlessui/react';

const PricesCard = () => {
    return (
      <div className="relative flex flex-col items-center p-8 bg-white rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 w-80 mx-2 my-4 md:mx-0">
        <div className="absolute top-0 right-0 mt-2 mr-2 bg-[#FF4500] text-white text-xs font-semibold py-1 px-2 rounded-bl-full">15% OFF</div>
        <h2 className="mt-4 mb-2 text-3xl tracking-wide title-font font-bold text-black text-center">PLAN</h2>
        <p className="text-gray-500 text-center">A brief description about the plan can go here...</p>
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
        <button className="mt-6 bg-[#FF4500] text-white py-2 px-4 w-full rounded-md shadow-md focus:outline-none hover:bg-[#FF6347] transition-colors duration-300">Select Plan</button>
      </div>
    );
};

const PriceItem = ({ label, price, Icon }) => (
  <div className="flex justify-between w-full items-center text-lg mb-2">
    {Icon && <Icon className="text-gray-500 mr-2" />}
    <span className="text-gray-500 font-medium">{label}</span>
    <span className="text-[#FF4500] text-2xl font-bold">{price}</span>
  </div>
);

const ListItem = ({ text, Icon }) => (
  <li className="flex items-center text-lg w-full">
    {Icon ? <Icon className="text-gray-500 mr-2" /> : <FaCheck className="text-gray-500 mr-2" />}
    <span className="text-gray-500 font-medium">{text}</span>
  </li>
);

const PlanDisplay = () => {
    return (
      <Tab.Group>
        <div className="w-full">
          <Tab.List className="flex justify-center p-1 space-x-1 mb-4 border-b-2 border-gray-200">
            <Tab className={({ selected }) => (
              `py-2 px-4 uppercase tracking-wider font-semibold text-sm rounded-md transition-colors 
              ${selected ? 'border-b-2 border-[#FF4500] text-[#FF4500]' : 'text-gray-500'}`
            )}>
              Standard Plan
            </Tab>
            <Tab className={({ selected }) => (
              `py-2 px-4 uppercase tracking-wider font-semibold text-sm rounded-md transition-colors 
              ${selected ? 'border-b-2 border-[#FF4500] text-[#FF4500]' : 'text-gray-500'}`
            )}>
              Premium Plan
            </Tab>
          </Tab.List>
        </div>
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
    );
};

export default PlanDisplay;
