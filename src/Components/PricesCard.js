import React from 'react';
import { FaCheck, FaClock, FaUser, FaBookOpen, FaInfinity, FaCalendar } from 'react-icons/fa';
import { Tab } from '@headlessui/react';

const PricesCard = () => {
    return (
      <div className="relative flex flex-col items-center p-6 bg-[#DC4344] rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-[#B73233] w-80 mx-2 my-4 md:mx-0">
        <div className="absolute top-0 right-0 mt-2 mr-2 bg-[#FDA90E] text-black text-xs font-semibold py-1 px-2 rounded-bl-full">15% OFF</div>
        <h2 className="mt-4 mb-2 text-2xl tracking-wide title-font font-bold text-white text-center">PLAN</h2>
        <p className="text-white text-center">A brief description about the plan can go here...</p>
        <div className="mb-6 border-b border-gray-600 w-full"></div>
        <div className="flex flex-col items-start text-white space-y-5 w-full">
          <PriceItem label="8 lessons" price="154₺ / lesson" Icon={FaBookOpen} />
          <PriceItem label="For 4 weeks" price="180₺" Icon={FaCalendar} />
          <PriceItem label="Total cost" price="1232₺" Icon={FaInfinity} />
          <div className="border-b border-gray-600 w-full my-4"></div>
          <ul className="list-disc list-inside space-y-2 w-full">
            <ListItem text="2 lessons per week" />
            <ListItem text="Native English teachers" Icon={FaUser} />
            <ListItem text="40-minute One-on-One lessons" Icon={FaClock} />
            <ListItem text="24/7 unlimited live classes" Icon={FaInfinity} />
          </ul>
        </div>
        <button className="mt-6 bg-gradient-to-r from-yellow-500 via-[#FDA90E] to-yellow-500 py-2 px-4 w-full rounded-md shadow-md focus:outline-none hover:bg-yellow-700 transition-colors duration-300">Select Plan</button>
      </div>
    );
};

const PriceItem = ({ label, price, Icon }) => (
  <div className="flex justify-between w-full items-center text-lg mb-2">
    {Icon && <Icon className="text-white mr-2" />}
    <span className="text-white font-medium">{label}</span>
    <span className="text-[#FDA90E] text-2xl font-bold">{price}</span>
  </div>
);

const ListItem = ({ text, Icon }) => (
  <li className="flex items-center text-lg w-full">
    {Icon ? <Icon className="text-white mr-2" /> : <FaCheck className="text-white mr-2" />}
    <span className="text-white font-medium">{text}</span>
  </li>
);

const PlanDisplay = () => {
    return (
      <Tab.Group>
        <div className="w-full">
          <Tab.List className="flex justify-center p-1 space-x-1 mb-4">
            <Tab className={({ selected }) => (
              `py-2 px-4 uppercase tracking-wider font-semibold text-sm rounded-lg transition-colors 
              ${selected ? 'bg-[#FDA90E] text-white' : 'bg-white text-[#FDA90E] border border-gray-200'}`
            )}>
              Standard Plan
            </Tab>
            <Tab className={({ selected }) => (
              `py-2 px-4 uppercase tracking-wider font-semibold text-sm rounded-lg transition-colors 
              ${selected ? 'bg-[#FDA90E] text-white' : 'bg-white text-[#FDA90E] border border-gray-200'}`
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