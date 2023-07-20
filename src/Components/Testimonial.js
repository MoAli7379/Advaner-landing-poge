import React from "react";
import ProfilePic from "../Assets/Naz.png";
import ProfilePic2 from "../Assets/Dilek.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Yorumlar</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Birkaç aydır haftada üç gün Advancer ile İngilizce dersi yapıyor Irmak. Evde olmadığımız zaman telefonla, evdeysek bilgisayar 
        başında. Öğretmeni Diana ile bol bol sohbet ediyor. Çok da seviyor. Advancer, İngilizce konuşmaya teşvik ederek öğrenmenin etkili bir yolunu sunuyor. 
        İlk derslerde seviye belirleniyor ve ona göre bir program çıkartılıyor. Adı ders, ancak ders gibi değil. Çocuklar sıkılmiyor çünkü 30 dakikayı geçmiyor. 
        Biliyorsunuz yıllardır ingilizce'nin üzerinde çok duran ve elinden geleni yapan biri olarak ben de çok seviyorum Advancer'ı.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
       
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic2} alt="" />
        <p>
        Advancer, İngilizce eğitimi açıkçası bu seneye kadar benim için 2. plandaydı, adaptasyon süreci uzun süren çocuklar olduğu için 
        bu sene bu konuda özel ders aldırmak istesem de, okul dışında çocukları fazla sıkmak istemediğim için kararsız kalmıştım. Bir arkadaşımın 
        tavsiyesi ile deneme dersi aldığım Advancer ile başladık ve ben çok çok memnun kaldım, öğretmenimizin uygun saatlerine göre düzenlenen 30 
        dakikalık derslerde interaktif ve birebir eğitimle, Ada kendi bilgisayarı ile derslere bağlandı, hem çok keyif aldı hem de kelime dağarcığını şimdiden geliştirdi.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
       
      </div>
    </div>
  );
};

export default Testimonial;
