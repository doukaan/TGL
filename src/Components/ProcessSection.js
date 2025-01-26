import React from "react";
import { FaCog, FaClipboardCheck, FaHandshake, FaSearch, FaArrowRight } from "react-icons/fa";

const ProcessSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-950 to-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center p-6 md:p-12 rounded-3xl">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#61d3f8] leading-tight">
            Çalışma Sürecimiz
          </h2>
          <p className="mt-4 text-gray-300 text-sm md:text-base">
            Strateji, yenilikçi fikirler ve teknoloji arasındaki kesişimde, müşterilerimizi sayısız yönde yeniden yapılandırıyoruz.
          </p>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-4">
          {/* Discovery */}
          <div className="text-center max-w-xs">
            <div className="bg-blue-700 text-white p-6 rounded-full inline-block mb-4">
              <FaSearch className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold">Keşif</h3>
            <p className="text-gray-300 mt-4 text-sm md:text-base">
              Sürecin ilk aşaması, hedeflerinizi belirleyip strateji oluşturma.
            </p>
          </div>

          {/* Arrow for Large Screens */}
          <FaArrowRight className="hidden md:block text-4xl text-white" />

          {/* Vertical Arrow for Mobile */}
          <div className="block md:hidden text-center">
            <FaArrowRight className="text-4xl text-white rotate-90" />
          </div>

          {/* Project Planning */}
          <div className="text-center max-w-xs">
            <div className="bg-blue-700 text-white p-6 rounded-full inline-block mb-4">
              <FaClipboardCheck className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold">Projelendirme</h3>
            <p className="text-gray-300 mt-4 text-sm md:text-base">
              Hedeflerinize ulaşmak için detaylı proje planları oluşturuyoruz.
            </p>
          </div>

          {/* Arrow for Large Screens */}
          <FaArrowRight className="hidden md:block text-4xl text-white" />

          {/* Vertical Arrow for Mobile */}
          <div className="block md:hidden text-center">
            <FaArrowRight className="text-4xl text-white rotate-90" />
          </div>

          {/* Offer and Supply */}
          <div className="text-center max-w-xs">
            <div className="bg-blue-700 text-white p-6 rounded-full inline-block mb-4">
              <FaHandshake className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold">Teklif ve Tedarik</h3>
            <p className="text-gray-300 mt-4 text-sm md:text-base">
              Proje gereksinimlerinize en uygun teklifleri sunuyoruz.
            </p>
          </div>

          {/* Arrow for Large Screens */}
          <FaArrowRight className="hidden md:block text-4xl text-white" />

          {/* Vertical Arrow for Mobile */}
          <div className="block md:hidden text-center">
            <FaArrowRight className="text-4xl text-white rotate-90" />
          </div>

          {/* Production Process */}
          <div className="text-center max-w-xs">
            <div className="bg-blue-700 text-white p-6 rounded-full inline-block mb-4">
              <FaCog className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold">Üretim Süreci</h3>
            <p className="text-gray-300 mt-4 text-sm md:text-base">
              Proje uygulamaları başlatılır ve süreç devam eder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;    