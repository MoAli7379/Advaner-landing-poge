import React from "react";
import ComputerIcon from '@mui/icons-material/Computer';
import AboutImage from "../Assets/aboutimage.png";
import TranslateIcon from '@mui/icons-material/Translate';

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
      <img src={AboutImage} alt="  " />

      </div>
      <div className="about-section-image-container">
       
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        NEDEN BİZİMLE İNGİLİZCE ÖĞRENMELİSİN?
        </h1>
        <p className="primary-text">
        <ComputerIcon style={{ color: '#ff5c6d' , fontSize: '1.9em' , marginRight:'1em' , marginTop:'0.1em'  }}/>
        Platformumuzda İngilizce dersler 7/24 boyunca 40 dakikada bir yayınlanıyor. 
        Bu derslerle İngilizcenin günlük ve profesyonel hayatta kullanımlarını öğreneceksin!
        </p>
        <p className="primary-text">
        <TranslateIcon style={{ color: '#ff5c6d' , fontSize: '1.9em' , marginRight:'1em' , marginTop:'0.1em'  }}/>
        Advancer da uluslararası sertifikalara sahip ana dili İngilizce olan eğitmenler ile çalışıyorsun. 
        Mükemmel İngilizce telaffuzun sırlarını işin uzmanlarından öğreniyorsun!
        </p>
        
      </div>
     
    </div>

  );
};

export default About;
