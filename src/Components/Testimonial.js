import React from 'react';
import im from "../Assets/Dilek.png"
import im2 from "../Assets/Naz.png"

const Testimonial = ({avatar, name, profession, quote}) => {
    return (
        <div className="flex flex-col items-center overflow-hidden shadow-2xl rounded-lg bg-[#F1F5FB]">
            <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                <div className="flex-1">
                    <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">{quote}</p>
                    </blockquote>
                </div>
                <div className="flex items-center mt-8">
                    <img className="flex-shrink-0 object-cover rounded-full w-14 h-14 shadow-md" src={avatar} alt="" />
                    <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{name}</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">{profession}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {
  const testimonialsData = [
      {
          avatar: im,
          name: "Dilek",
         
          quote: "“Birkaç aydır haftada üç gün Advancer ile İngilizce dersi yapıyor Irmak. Evde olmadığımız zaman telefonla, evdeysek bilgisayar başında. Öğretmeni Diana ile bol bol sohbet ediyor. Çok da seviyor. Advancer, İngilizce konuşmaya ”"
      },
      {
          avatar: im2,
          name: "Naz",
         
          quote: "“Advancer, İngilizce eğitimi açıkçası bu seneye kadar benim için 2. plandaydı, adaptasyon süreci uzun süren çocuklar olduğu için bu sene bu konuda özel ders aldırmak istesem de, okul dışında çocukları fazla sıkmak istemediğim içi”"
      },
      {
        avatar: im2,
        name: "Naz",
     
        quote: "“Advancer, İngilizce eğitimi açıkçası bu seneye kadar benim için 2. plandaydı, adaptasyon süreci uzun süren çocuklar olduğu için bu sene bu konuda özel ders aldırmak istesem de, okul dışında çocukları fazla sıkmak istemediğim içi”"
    },
     
  ];

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">

                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Yorumlar</h2>
                    </div>
                    <div className="mt-8 text-center md:mt-16 md:order-3">
                        
                    </div>
                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{background: 'linear-gradient(90deg, #0fa0ff -0.55%, #ff007d 22.86%, #ebff70 48.36%, #ff6644 73.33%, #44ff9a 99.34%)'}}></div>
                        </div>
                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            {testimonialsData.map((testimonial, index) => 
                                <Testimonial key={index} {...testimonial} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
