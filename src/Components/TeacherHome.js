import React from 'react';
import TutorCard from './TutorCard';
import { AiOutlineArrowRight } from "react-icons/ai";
import caption3 from "../Assets/caption3.jpeg"
import caption4 from "../Assets/caption4.jpeg"
import caption1 from "../Assets/caption1.jpeg"
import caption2 from "../Assets/caption2.jpeg"
const TeacherHome = () => {
  const handleViewAllTutors = () => {
    console.log("View All Tutors button clicked.");
  };

  return (
    <div className="font-sans text-center my-10">
      <h2 className="text-7xl font-bold mb-3">Bizim Öğretmenlerimiz</h2>
<p className="m-14 text-lg text-gray-600">
  Öğretmenlerimizin tamamı ana dili İngilizce olan ve Advancer müfredatını öğretmekte uzman kişilerdir. Birçokları, ABD, İngiltere ve Kanada'daki üst düzey üniversitelerden yüksek lisans derecesine sahiptir. Öğretmenlerimizden sürekli olarak etkilenmekteyiz ve sizin de etkileneceğinizi düşünüyoruz!
</p>
<button
  className="bg-[#FF5542] text-white font-bold py-3 mb-10 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
  onClick={handleViewAllTutors}
>
  <span className="flex items-center">
    Tüm öğretmenleri görmek için kaydolun <AiOutlineArrowRight />
  </span>
</button>

      <div className="flex overflow-x-scroll scrollbar-hide space-x-4 px-4 py-2 md:justify-center whitespace-nowrap">
      <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Kaan"
                        videoUrl="https://www.youtube.com/watch?v=gIAR-lp7y58"
                        count={150}
                        rating={4.7}
                        avatarUrl={caption1}
                        description="Seeking professional English skills? I'm an experienced coach in English and other languages, offering engaging lessons tailored to your needs. We'll use varied resources and activities for memorable learning. For exams like TOEFL or IELTS, I teach using problem-solving tactics. Sign up quickly, slots are filling fast!"
                        captionUrl={caption1}  // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Sophia"
                        videoUrl="https://www.youtube.com/watch?v=gVFBCrYd9ds"
                        count={100}
                        rating={4.99}
                        avatarUrl={caption3}
                        description="I'm Sophia, an English tutor focusing on individual needs. I improve students' reading, speaking, writing, and listening skills. For exam prep, I identify student shortcomings and prepare targeted lessons for practice."
                        captionUrl={caption3} // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Dara"
                        videoUrl="https://www.youtube.com/watch?v=x-WMdldjGvg"
                        count={200}
                        rating={4.8}
                        avatarUrl={caption4}
                        description="Jane is a passionate tutor..."
                        captionUrl={caption4} // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Saffet"
                        videoUrl="https://www.youtube.com/watch?v=dgLtzheT79s&list=TLGGQq2hxfj610syNDA3MjAyMw&t=1s"
                        count={150}
                        rating={4.7}
                        avatarUrl={caption2}
                        description="Bob is an experienced tutor who loves helping students succeed..."
                        captionUrl={caption2}  // URL to your caption image
                    />
                </div>

                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Kaan"
                        videoUrl="https://www.youtube.com/watch?v=gIAR-lp7y58"
                        count={150}
                        rating={4.7}
                        avatarUrl={caption1}
                        description="Seeking professional English skills? I'm an experienced coach in English and other languages, offering engaging lessons tailored to your needs. We'll use varied resources and activities for memorable learning. For exams like TOEFL or IELTS, I teach using problem-solving tactics. Sign up quickly, slots are filling fast!"
                        captionUrl={caption1}  // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Sophia"
                        videoUrl="https://www.youtube.com/watch?v=gVFBCrYd9ds"
                        count={100}
                        rating={4.99}
                        avatarUrl={caption3}
                        description="I'm Sophia, an English tutor focusing on individual needs. I improve students' reading, speaking, writing, and listening skills. For exam prep, I identify student shortcomings and prepare targeted lessons for practice."
                        captionUrl={caption3} // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Dara"
                        videoUrl="https://www.youtube.com/watch?v=x-WMdldjGvg"
                        count={200}
                        rating={4.8}
                        avatarUrl={caption4}
                        description="Jane is a passionate tutor..."
                        captionUrl={caption4} // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Saffet"
                        videoUrl="https://www.youtube.com/watch?v=dgLtzheT79s&list=TLGGQq2hxfj610syNDA3MjAyMw&t=1s"
                        count={150}
                        rating={4.7}
                        avatarUrl={caption2}
                        description="Bob is an experienced tutor who loves helping students succeed..."
                        captionUrl={caption2}  // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Kaan"
                        videoUrl="https://www.youtube.com/watch?v=gIAR-lp7y58"
                        count={150}
                        rating={4.7}
                        avatarUrl={caption1}
                        description="Seeking professional English skills? I'm an experienced coach in English and other languages, offering engaging lessons tailored to your needs. We'll use varied resources and activities for memorable learning. For exams like TOEFL or IELTS, I teach using problem-solving tactics. Sign up quickly, slots are filling fast!"
                        captionUrl={caption1}  // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Sophia"
                        videoUrl="https://www.youtube.com/watch?v=gVFBCrYd9ds"
                        count={100}
                        rating={4.99}
                        avatarUrl={caption3}
                        description="I'm Sophia, an English tutor focusing on individual needs. I improve students' reading, speaking, writing, and listening skills. For exam prep, I identify student shortcomings and prepare targeted lessons for practice."
                        captionUrl={caption3} // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Dara"
                        videoUrl="https://www.youtube.com/watch?v=x-WMdldjGvg"
                        count={200}
                        rating={4.8}
                        avatarUrl={caption4}
                        description="Jane is a passionate tutor..."
                        captionUrl={caption4} // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Saffet"
                        videoUrl="https://www.youtube.com/watch?v=dgLtzheT79s&list=TLGGQq2hxfj610syNDA3MjAyMw&t=1s"
                        count={150}
                        rating={4.7}
                        avatarUrl={caption2}
                        description="Bob is an experienced tutor who loves helping students succeed..."
                        captionUrl={caption2}  // URL to your caption image
                    />
                </div>  <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Kaan"
                        videoUrl="https://www.youtube.com/watch?v=gIAR-lp7y58"
                        count={150}
                        rating={4.7}
                        avatarUrl={caption1}
                        description="Seeking professional English skills? I'm an experienced coach in English and other languages, offering engaging lessons tailored to your needs. We'll use varied resources and activities for memorable learning. For exams like TOEFL or IELTS, I teach using problem-solving tactics. Sign up quickly, slots are filling fast!"
                        captionUrl={caption1}  // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Sophia"
                        videoUrl="https://www.youtube.com/watch?v=gVFBCrYd9ds"
                        count={100}
                        rating={4.99}
                        avatarUrl={caption3}
                        description="I'm Sophia, an English tutor focusing on individual needs. I improve students' reading, speaking, writing, and listening skills. For exam prep, I identify student shortcomings and prepare targeted lessons for practice."
                        captionUrl={caption3} // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Dara"
                        videoUrl="https://www.youtube.com/watch?v=x-WMdldjGvg"
                        count={200}
                        rating={4.8}
                        avatarUrl={caption4}
                        description="Jane is a passionate tutor..."
                        captionUrl={caption4} // URL to your caption image
                    />
                </div>
                <div style={{ minWidth: '100px', flexShrink: 0 }}>
                    <TutorCard
                        name="Saffet"
                        videoUrl="https://www.youtube.com/watch?v=dgLtzheT79s&list=TLGGQq2hxfj610syNDA3MjAyMw&t=1s"
                        count={150}
                        rating={4.7}
                        avatarUrl={caption2}
                        description="Bob is an experienced tutor who loves helping students succeed..."
                        captionUrl={caption2}  // URL to your caption image
                    />
                </div>
        
        
      </div>
    </div>
  );
};

export default TeacherHome;
