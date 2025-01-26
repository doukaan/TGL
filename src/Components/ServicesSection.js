import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ServicesSection = () => {
  const descriptions = {
    'Alçak Gerilim': 'Düşük voltajlı sistemler, günlük yaşamda güvenli ve verimli bir enerji kullanımı için kritik öneme sahiptir. Çerkezköy, Kapaklı, Kızılpınar, Veliköy ve çevre Trakya bölgelerinde, alçak gerilim sistemlerinin tasarımı, kurulumu ve bakımı konusunda uzman ekibimizle hizmet veriyoruz. Endüstriyel tesislerden konut projelerine kadar her tür yapıya özel çözümler üretiyoruz. Standartlara uygun, enerji tasarruflu ve uzun ömürlü alçak gerilim sistemleri için bize ulaşabilirsiniz.',
    'Yüksek Gerilim': 'Yüksek gerilim tesisleri, enerji dağıtımı ve endüstriyel ihtiyaçlar için kritik bir altyapıdır. Çerkezköy ve çevresindeki işletmelere, yüksek gerilim sistemlerinin kurulumu ve düzenli bakımı konusunda profesyonel destek sunuyoruz. Trakyanın her köşesine yayılmış hizmet ağımız sayesinde Kapaklı, Veliköy ve Kızılpınar bölgelerinde de hızlı ve güvenilir çözümler sağlıyoruz Güvenlik ve verimliliği en üst düzeye çıkaran çözümlerimizle tanışın.',
    'İç-Dış Tesisat': 'İç mekanlarınızın ihtiyaçlarına uygun elektrik tesisatı kurulumundan dış mekanların zorlu koşullarına dayanıklı sistemlere kadar her türlü çözümü sunuyoruz. Çerkezköy ve çevresindeki Kapaklı, Veliköy, Kızılpınar bölgelerinde hem bireysel hem de ticari müşterilerimize güvenilir hizmet veriyoruz. Modern teknolojiler ve kaliteli malzemelerle tesisat sistemlerinizi güvence altına alın.',
    'İç-Dış Aydınlatma': 'Trakya bölgesinde evlerinizi, bahçelerinizi, işletmelerinizi aydınlatmak için estetik ve enerji tasarruflu aydınlatma çözümleri sunuyoruz. Çerkezköy merkezli hizmet ağımız, Kapaklı, Kızılpınar ve Veliköy gibi bölgeleri de kapsayarak ihtiyacınıza özel dış mekan aydınlatma tasarımları, iç mekan dekoratif aydınlatmalar ve profesyonel uygulama hizmetlerini içerir.',
    'Pano Montaj': 'Elektrik panoları, enerji akışını düzenlemek ve sistemlerin güvenliğini sağlamak için kritik öneme sahiptir. Trakya bölgesindeki tüm müşterilerimize, elektrik panolarının profesyonel montajı ve bakımını sağlıyoruz. Çerkezköy, Kapaklı, Veliköy ve Kızılpınar daki projelerinizde standartlara uygun ve güvenilir çözümler sunuyoruz.',
    'CCTV Güvenlik': 'Kapaklı, Çerkezköy, Veliköy, Kızılpınar ve Trakya’nın diğer bölgelerinde evler ve işletmeler için profesyonel CCTV güvenlik kamera sistemleri kuruyoruz. Gelişmiş teknolojilerle donatılmış sistemlerimiz, 7/24 güvenlik sağlamak için tasarlanmıştır. Hem iç mekanlar hem de dış mekanlar için uygun çözümlerle hizmetinizdeyiz.'
  };

  const serviceCards = [
    { image: 'İmages/alçakg.png', title: 'Alçak Gerilim', bgColor: 'md:bg-[#060915] bg-[#070c1c]' },
    { image: 'İmages/yüksekg.jpg', title: 'Yüksek Gerilim', bgColor: 'md:bg-[#050913] bg-[#070c1c]' },
    { image: 'İmages/ide.png', title: 'İç-Dış Tesisat', bgColor: 'md:bg-[#060914] bg-[#070c1c]' },
    { image: 'İmages/ida.jpg', title: 'İç-Dış Aydınlatma', bgColor: 'md:bg-[#0e1633] bg-[#070c1c]' },
    { image: 'İmages/pano.jpg', title: 'Pano Montaj', bgColor: 'md:bg-[#0e1733] bg-[#070c1c]' },
    { image: 'İmages/cctve.png', title: 'CCTV Güvenlik', bgColor: 'md:bg-[#0e1633] bg-[#070c1c]' }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-blue-950 text-white py-16 relative">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Sizin için neler<span className="text-blue-400"> yapabiliriz?</span>
        </h2>
        <p className="mt-2 text-gray-300 text-sm md:text-base">Altı ana alanda uzmanız.</p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 gap-6 px-16">
        {serviceCards.map((card, index) => (
          <ServiceCard 
            key={index} 
            card={card} 
            description={descriptions[card.title]} 
          />
        ))}
      </div>

      {/* Mobile View with Swiper */}
      <div className="block md:hidden px-4 pb-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 6000,
            disableOnInteraction: false
          }}
          pagination={{ 
            clickable: true,
            el: '.custom-pagination',
            renderBullet: (index, className) => {
              return `<span class="${className} bg-white"></span>`;
            }
          }}
          className="services-swiper"
        >
          {serviceCards.map((card, index) => (
            <SwiperSlide key={index}>
              <ServiceCard 
                card={card} 
                description={descriptions[card.title]} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center space-x-2 mt-4"></div>
      </div>

      <style jsx>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 0.5;
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 10px;
          opacity: 1;
          background-color: blue  !important;
        }
      `}</style>
    </section>
  );
};

const ServiceCard = ({ card, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-72 sm:h-80 mb-4"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`
        relative w-full h-full transition-all duration-500 
        ${isFlipped ? 'rotate-y-180' : ''}
      `}>
        {/* Ön yüz */}
        <div className={`
          absolute w-full h-full bg-gradient-to-b from-gray-900 to-blue-950 
          hover:from-blue-700 hover:to-blue-400 rounded-3xl p-4 text-center 
          shadow-lg transition-all duration-500
          ${isFlipped ? 'opacity-0 invisible' : 'opacity-100 visible'}
        `}>
          <div 
            className="absolute inset-0 rounded-3xl bg-cover bg-center filter brightness-75"
            style={{ backgroundImage: `url('${card.image}')` }}
          ></div>
          <div className={`absolute top-0 left-0 right-0 ${card.bgColor} w-1/2 ml-[25%] rounded-b-3xl`}>
            <h4 className="text-lg font-bold text-white py-2">{card.title}</h4>
          </div>
        </div>

        {/* Arka yüz */}
        <div className={`
          absolute w-full h-full bg-blue-950 rounded-3xl p-4 text-center 
          shadow-lg transition-all duration-500 rotate-y-180
          ${isFlipped ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}>
          <div className={`absolute top-0 left-0 right-0 ${card.bgColor} w-1/2 ml-[25%] rounded-b-3xl`}>
            <h4 className="text-lg font-bold text-white py-2">{card.title}</h4>
          </div>
          <div className="flex items-center justify-center h-full pt-8">
            <p className="text-white text-xs sm:text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;