import React from "react";
import "../App.css";
import Image from '../Assets/WhatsApp Image 2023-07-25 at 12.42.53 (1).jpeg';
import Image4 from '../Assets/WhatsApp Image 2023-07-25 at 12.42.53.jpeg';
import Image5 from '../Assets/WhatsApp Image 2023-07-25 at 12.42.56.jpeg';
import Image6 from '../Assets/WhatsApp Image 2023-07-25 at 12.42.55.jpeg';
import Image2 from '../Assets/WhatsApp Image 2023-07-25 at 12.42.55 (1).jpeg';
import Navbar from "../Components/Navbar";

const MyCard = ({ renderImage, title, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="mn-w-xs mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden my-4">
      <div className="p-4">
        {renderImage()}
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mt-2">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 mt-1">
          {description}
        </p>
      </div>
    </div>
  </a>
);



const part1Data = [
  {
    title: 'English Conversation 101',
    description: 'Sıfırdan başlayanlar için başlangıç derslerine katıl.',
    image: Image4,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'English Conversation 102',
    description: 'Sıfırdan başlayanlar için uygun ders.',
    image: Image5,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },{
    title: 'English for Travel',
    description: 'Seyahat ederken kullanabileceğin pratik ingilizce!',
    image: Image,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'Intermediate Conversation Topics Part 2',
    description: 'Fikirlerini İngilizce ifade etme konusunda daha fazla pratik yap.',
    image: Image6,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'Advanced Conversation Topics',
    description: 'Soyut konularda konuşurken akıcılık kazan.',
    image: Image2,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
];

const part2Data = [
  {
    title: 'English Conversation 101',
    description: 'Sıfırdan başlayanlar için başlangıç derslerine katıl.',
    image: Image4,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'English Conversation 102',
    description: 'Sıfırdan başlayanlar için uygun ders.',
    image: Image5,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },{
    title: 'English for Travel',
    description: 'Seyahat ederken kullanabileceğin pratik ingilizce!',
    image: Image,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'Intermediate Conversation Topics Part 2',
    description: 'Fikirlerini İngilizce ifade etme konusunda daha fazla pratik yap.',
    image: Image6,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'Advanced Conversation Topics',
    description: 'Soyut konularda konuşurken akıcılık kazan.',
    image: Image2,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
];

const part3Data = [
  {
    title: 'English Conversation 101',
    description: 'Sıfırdan başlayanlar için başlangıç derslerine katıl.',
    image: Image4,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'English Conversation 102',
    description: 'Sıfırdan başlayanlar için uygun ders.',
    image: Image5,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },{
    title: 'English for Travel',
    description: 'Seyahat ederken kullanabileceğin pratik ingilizce!',
    image: Image,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'Intermediate Conversation Topics Part 2',
    description: 'Fikirlerini İngilizce ifade etme konusunda daha fazla pratik yap.',
    image: Image6,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'Advanced Conversation Topics',
    description: 'Soyut konularda konuşurken akıcılık kazan.',
    image: Image2,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
];

const part4Data = [
   {
    title: 'English Conversation 101',
    description: 'Sıfırdan başlayanlar için başlangıç derslerine katıl.',
    image: Image4,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'English Conversation 102',
    description: 'Sıfırdan başlayanlar için uygun ders.',
    image: Image5,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },{
    title: 'English for Travel',
    description: 'Seyahat ederken kullanabileceğin pratik ingilizce!',
    image: Image,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'Intermediate Conversation Topics Part 2',
    description: 'Fikirlerini İngilizce ifade etme konusunda daha fazla pratik yap.',
    image: Image6,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
  {
    title: 'Advanced Conversation Topics',
    description: 'Soyut konularda konuşurken akıcılık kazan.',
    image: Image2,
    link: 'https://advancerenglish.teachable.com/courses/advancer/lectures/38021665'
  },
];

// Function to render Part 1 cards
const renderPart1 = () => {
  const rows = [];
  for (let i = 0; i < part1Data.length; i += 5) {
    const row = part1Data.slice(i, i + 5);
    rows.push(
      <div key={i} className="flex flex-wrap justify-between">
        {row.map((item, index) => (
          <MyCard
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            renderImage={() => <img width={200} height={200} src={item.image} alt={item.title} />}
          />
        ))}
      </div>
    );
  }
  return <div>{rows}</div>;
};

const renderPart2 = () => {
  const rows = [];
  for (let i = 0; i < part2Data.length; i += 5) {
    const row = part2Data.slice(i, i + 5);
    rows.push(
      <div key={i} className="flex flex-wrap justify-between">
        {row.map((item, index) => (
          <MyCard
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            renderImage={() => <img width={200} height={200} src={item.image} alt={item.title} />}
          />
        ))}
      </div>
    );
  }
  return <div>{rows}</div>;
};

const renderPart3 = () => {
  const rows = [];
  for (let i = 0; i < part3Data.length; i += 5) {
    const row = part3Data.slice(i, i + 5);
    rows.push(
      <div key={i} className="flex flex-wrap justify-between">
        {row.map((item, index) => (
          <MyCard
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            renderImage={() => <img width={200} height={200} src={item.image} alt={item.title} />}
          />
        ))}
      </div>
    );
  }
  return <div>{rows}</div>;
};

const renderPart4 = () => {
  const rows = [];
  for (let i = 0; i < part4Data.length; i += 5) {
    const row = part4Data.slice(i, i + 5);
    rows.push(
      <div key={i} className="flex flex-wrap justify-between">
        {row.map((item, index) => (
          <MyCard
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            renderImage={() => <img width={200} height={200} src={item.image} alt={item.title} />}
          />
        ))}
      </div>
    );
  }
  return <div>{rows}</div>;
};

const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className="text-2xl font-bold text-center text-orange-500 my-8">
        All Courses</div>
      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px', marginTop: '20px' }}>Popüler Film ve Dizi Kesitleri</h2>
        <p>Popüler film ve TV şovlarından parçalar izleyin. Film karakterleri size neyi, ne zaman ve nasıl söyleyeceğinizi gösterecek ve gündelik konuşma dili yardımıyla en sık kullanılan 2000 kelimeyi ve cümleyi kısa sürede öğreneceksiniz ve konuşmaya başlayacaksınız.
        </p>
        <div className="slider-container">
          {renderPart1()}
        </div>
      </div>
      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h2 style={{ fontSize: '28px', marginTop: '20px', marginBottom: '20px' }}>Metaverse ve 360° Sanal Gerçeklik ile İngilizce Dersler</h2>
        <p>Metaverse'de İngilizce Öğrenin. Advancer ile sanal gerçeklikle eğitmenlerinizle buluşup yüzyüze interaktif dersler yapmaya başlayın.
        </p>
        <div className="slider-container">
          {renderPart2()}
        </div>
      </div>
      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h2 style={{ fontSize: '28px', marginTop: '20px', marginBottom: '20px' }}>Genel İngilizce</h2>
        <p>İngilizce konuşurken öz güven ve akıcılık kazan. Tüm seviyeler için, temel günlük konuşmalardan karmaşık konularla ilgili görüş bildirmeye kadar, pek çok konuyu kapsayan bu ders programlarında herkese uygun içerikler var.
        </p>
        <div className="slider-container">
          {renderPart3()}
        </div>
      </div>
      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h2 style={{ fontSize: '28px', marginTop: '20px', marginBottom: '20px' }}>İş İngilizcesi</h2>
        <p>Uluslararası bir ortamda işle alakalı iletişim kurabilmek için güçlü İngilizce becerilerinden daha fazlası gerekir. Hem sözlü hem yazılı etkin kültürlerarası iletişim, kariyerinde ilerlemek için kullanabileceğin güçlü bir araçtır.
        </p>
        <div className="slider-container">
          {renderPart4()}
        </div>
      </div>
    </div>
  );
};

export default Courses;