import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { brands } from "../../config-data/brands";

import "swiper/css";
import "swiper/css/navigation";

const BrandSlider: React.FC = () => {
  const { t } = useTranslation();

  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          {t("brands.title")}
        </h2>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={7}
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
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 30,
              },
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="h-24 flex items-center justify-center p-4 filter grayscale hover:grayscale-0 transition-all duration-300">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={navigationPrevRef}
            className="custom-swiper-button-prev absolute top-1/2 -translate-y-1/2 -left-4 z-10 cursor-pointer bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center"
          >
            <IoChevronBack size={24} className="text-gray-600" />
          </div>
          <div
            ref={navigationNextRef}
            className="custom-swiper-button-next absolute top-1/2 -translate-y-1/2 -right-4 z-10 cursor-pointer bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center"
          >
            <IoChevronForward size={24} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
