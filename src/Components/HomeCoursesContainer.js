import React from 'react';
import HomeCoursesCard from './HomeCoursesCard';

const HomeCoursesContainer = () => {
  return (
    <div>
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold mb-2">Tüm Ders Programları</h1>
        <p className="text-lg mb-4">
          Popüler Film ve Dizi Kesitleri<br/>
          Popüler film ve TV şovlarından parçalar izleyin. Film karakterleri size neyi, ne zaman ve nasıl söyleyeceğinizi gösterecek ve gündelik konuşma dili yardımıyla en sık kullanılan 2000 kelimeyi ve cümleyi kısa sürede öğreneceksiniz ve konuşmaya başlayacaksınız.
        </p>
      </div>
      <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide">
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
        <HomeCoursesCard />
      </div>
    </div>
  );
}

export default HomeCoursesContainer;
