import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { categories } from "../../config-data/categories";

const CatalogSlider: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "ru" | "uz";

  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          {t("catalog.title")}
        </h2>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={5}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper: SwiperType) => {
              if (typeof swiper.params.navigation === "object") {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {categories.map((catalog) => (
              <SwiperSlide key={catalog.id}>
                <Link to={`/category/${catalog.id}`}>
                  <div className="bg-white cursor-pointer rounded-xl h-full overflow-hidden group transform transition-transform duration-300">
                    <div className="relative h-48">
                      <img
                        src={catalog.image}
                        alt={catalog.name[currentLang]}
                        className="w-full h-full object-cover bg-white"
                      />
                    </div>
                    <div className="px-4 py-2 h-12 flex flex-col justify-center items-center">
                      <h3 className="text-base font-semibold text-gray-800 text-center line-clamp-2">
                        {catalog.name[currentLang]}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={navigationPrevRef}
            className="custom-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-2 z-10 cursor-pointer bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center"
          >
            <IoChevronBack size={24} className="text-gray-600" />
          </div>
          <div
            ref={navigationNextRef}
            className="custom-swiper-button-next absolute top-1/2 -translate-y-1/2 right-2 z-10 cursor-pointer bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center"
          >
            <IoChevronForward size={24} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogSlider;
