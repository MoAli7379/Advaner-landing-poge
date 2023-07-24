import React from "react";
import Money from "../Assets/monett_PNG-removebg-preview.png";
import Message from "../Assets/mesajlas-removebg-preview.png";
import Tutors from "../Assets/best_tutors-removebg-preview.png";
import Hold from "../Assets/hodd_PNG-removebg-preview.png";

const Work = () => {
  const workInfoData = [
    {
      image: Tutors,
      text: "İhtiyaçlarına ve ilgi alanlarına en uygun eğitmeni bularak konuşmaya başlayabilirsin. 90 gün boyunca eğitmenlerle konuşarak akıcı şekilde İngilizce konuşabileceksin. İlk deneme dersi ücretsizdir, dilediğiniz zaman rezervasyon yaparak derse başlayabilir ve derslerin nasıl işlendiğini görebilirsiniz..",
    },
    {
      image: Message,
      text: "Programa Katılan 100'den fazla öğrencinin derslerinden kesitler izleyerek, derslerin işlenişi hakkında bilgi sahibi olabilirsin. Öğrencilerimiz İngilizce konuşmayı Advancer 90 günlük program ile çok çabuk öğreniyorlar çünkü sizin de olanlar gibi tek ihtiyacınız olan profesyonel öğretmenlerle pratik yapmak..",
    },
    {
      image: Money,
      text: "Her bütçeye uygun toplu ders paketlerimiz mevcuttur. Aboneliğini istediğin zaman iptal edebilirsin ve ödemen gününde size iade edilir. Haftada kaç ders almak istediğine karar ver ve aylık olarak toplu ders alımını gerçekleştir. Ödemeler kredi kartı veya banka tranferi ile gerçekleştirebilirsin",
    },
    {
      image: Hold,
      text: "Ders öncesi ve sonrası konuşma pratiği yapman için öğretmenin seninle videolar paylaşacak. Derste eğitmeninle videolar üzerinden pratik yapıp eğitmeninin sorularına cevap vererek her ders 200 cümle konuşabilirsin! 90 günlük konuşma programı ile 1000'den fazla konuşma pratiği yapacaksın, orta düzeyde konuşmanızı sağlayacak.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-10 space-y-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
     <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        How It Works
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {workInfoData.map((data, index) => (
          <div key={index} className="flex flex-col justify-between p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 space-y-6">
            <div>
              <img src={data.image} alt="" className="mx-auto h-24 w-24 object-cover rounded-full"/>
              <p className="text-lg font-medium text-gray-700">{data.text}</p>
            </div>
            <button className="mt-6 self-center flex items-center justify-center py-2 px-4 text-white bg-[#DC4444] rounded-full transition-all duration-300">
              Learn More
              <svg className="h-5 w-5 ml-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
