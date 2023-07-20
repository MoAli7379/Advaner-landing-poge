import React from "react";
import Money from "../Assets/monett_PNG-removebg-preview.png";
import Mesaj from "../Assets/mesajlas-removebg-preview.png";
import Tutors from "../Assets/best_tutors-removebg-preview.png";
import Hold from "../Assets/hodd_PNG-removebg-preview.png";
import { FiArrowRight } from "react-icons/fi";


const Work = () => {
  const workInfoData = [
    {
      image: Tutors,
      text: "İhtiyaçlarına ve ilgi alanlarına en uygun eğitmeni bularak konuşmaya başlayabilirsin.90 gün boyunca eğitmenlerle konuşarak akıcı şekilde İngilizce konuşabileceksin. İlk deneme dersi ücretsizdir,dilediğiniz zaman rezervasyon yaparak derse başlayabilir ve derslerin nasıl işlendiğini görebilirsiniz.",
    },
    {
      image: Mesaj,
      text: "Programa Katılan 100'den fazla öğrencinin derslerinden kesitler izleyerek, derslerin işlenişi hakkında bilgi sahibi olabilirsin. Öğrencilerimiz İngilizce konuşmayı Advancer 90 günlük program ile çok çabuk öğreniyorlar çünkü sizin de olanlar gibi tek ihtiyacınız olan profesyonel öğretmenlerle pratik yapmak.",
    },
    {
      image: Money,
      text: "Her bütçeye uygun toplu ders paketlerimiz mevcuttur. Aboneliğini istediğin zaman iptal edebilirsin ve ödemen gününde size iade edilir. Haftada kaç ders almak istediğine karar ver ve aylık olarak toplu ders alımını gerçekleştir. Ödemeler kredi kartı veya banka tranferi ile gerçekleştirebilirsin.",
    },
    {
      image: Hold,
      text: "Ders öncesi ve sonrası konuşma pratiği yapman için öğretmenin seninle videolar paylaşacak. Derste eğitmeninle videolar üzerinden pratik yapıp eğitmeninin sorularına cevap vererek her ders 200 cümle konuşabilirsin! 90 günlük konuşma programı ile 1000'den fazla konuşma pratiği yapacaksın, orta düzeyde konuşmanızı sağlayacak.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
        
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
