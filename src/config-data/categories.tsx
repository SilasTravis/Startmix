import React from "react";

// Import all icon components
import ElectricityIcon from "../components/icons/ElectricityIcon";
import GardenIcon from "../components/icons/GardenIcon";
import HandToolIcon from "../components/icons/HandToolIcon";
import PlumbingIcon from "../components/icons/PlumbingIcon";
import PowerIcon from "../components/icons/PowerIcon";
import ToolIcon from "../components/icons/ToolIcon";

import img11 from "../../public/images/products/1-1.jpg";
import img12 from "../../public/images/products/1-2.png";
import img13 from "../../public/images/products/1-3.jpg";
import img21 from "../../public/images/products/2-1.jpg";
import img22 from "../../public/images/products/2-2.jpg";
import img31 from "../../public/images/products/3-1.jpg";
import img32 from "../../public/images/products/3-2.jpg";
import img33 from "../../public/images/products/3-3.jpg";
import img41 from "../../public/images/products/4-1.jpg";
import img42 from "../../public/images/products/4-2.jpg";
import img43 from "../../public/images/products/4-3.jpg";
import img51 from "../../public/images/products/5-1.jpg";
import img61 from "../../public/images/products/6-1.jpg";
import img62 from "../../public/images/products/6-2.jpg";

// Interfaces for our data structure
export interface Product {
  id: number;
  name: {
    en: string;
    ru: string;
    uz: string;
  };
  description: {
    en: string;
    ru: string;
    uz: string;
  };
  mainImage: string;
  gallery: string[];
  brand: {
    name: string;
    icon: string;
  };
  characteristics: {
    [key: string]: string;
  };
}

export interface Category {
  id: number;
  name: {
    en: string;
    ru: string;
    uz: string;
  };
  image: string;
  icon: React.ReactNode;
  products: Product[];
}

// Helper function to generate mock products
// const generateProducts = (
//   categoryId: number,
//   categoryName: { en: string; ru: string; uz: string },
//   count: number
// ): Product[] => {
//   const products: Product[] = [];
//   for (let i = 1; i <= count; i++) {
//     products.push({
//       id: categoryId * 100 + i,
//       name: {
//         en: `${categoryName.en} Product ${i}`,
//         ru: `${categoryName.ru}, продукт ${i}`,
//         uz: `${categoryName.uz} mahsuloti ${i}`,
//       },
//       description: {
//         en: `This is a detailed description for ${categoryName.en} Product ${i}. It highlights key features, benefits, and specifications.`,
//         ru: `Это подробное описание для продукта ${categoryName.ru} ${i}. В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
//         uz: `Bu ${categoryName.uz} mahsuloti ${i} uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
//       },
//       mainImage: [
//         "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "https://images.pexels.com/photos/6473973/pexels-photo-6473973.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "https://images.pexels.com/photos/8487376/pexels-photo-8487376.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "https://images.pexels.com/photos/7492879/pexels-photo-7492879.jpeg?auto=compress&cs=tinysrgb&w=600",
//       ][Math.floor(Math.random() * 4)],
//       gallery: [
//         "https://images.pexels.com/photos/6473973/pexels-photo-6473973.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "https://images.pexels.com/photos/7492879/pexels-photo-7492879.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "https://images.pexels.com/photos/8487376/pexels-photo-8487376.jpeg?auto=compress&cs=tinysrgb&w=600",
//       ],
//       brand: {
//         name: "BrandName",
//         icon: `https://via.placeholder.com/100x40.png?text=Brand`,
//       },
//       characteristics: {
//         Weight: `${i * 1.2} kg`,
//         Dimensions: `${i * 10}x${i * 5}x${i * 2} cm`,
//         Material: "High-Quality Steel",
//         Warranty: "2 years",
//       },
//     });
//   }
//   return products;
// };

// Category data array
export const categories: Category[] = [
  {
    id: 2,
    name: {
      en: "Primers & Preparatory Materials",
      ru: "Грунтовки и подготовительные материалы",
      uz: "Gruntovkalar",
    },
    image: "/images/categories/primers.jpg",
    icon: <ElectricityIcon className="w-8 h-8" />,
    products: [
      {
        id: 1,
        name: {
          en: `Primer`,
          ru: `Грунтовка`,
          uz: `Gruntovka`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img21,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
      {
        id: 2,
        name: {
          en: `Concrete contact`,
          ru: `Бетоноконтакт`,
          uz: `Betonokontakt`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img22,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
    ],
  },
  {
    id: 1,
    name: {
      en: "Adhesives & Binders",
      ru: "Клеи и связующие",
      uz: "Yelimlar va bog‘lovchi moddalar",
    },
    image: "/images/categories/kley.jpg",
    icon: <ToolIcon className="w-8 h-8" />,
    products: [
      {
        id: 1,
        name: {
          en: `Tile adhesive`,
          ru: `Клей для плитки`,
          uz: `Kafel yelimi`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img11,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
      {
        id: 2,
        name: {
          en: `PVA glue`,
          ru: `Клей ПВА`,
          uz: `PVA yelimi`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img12,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
      {
        id: 3,
        name: {
          en: `Mosaic adhesive`,
          ru: `Клей для мозаики`,
          uz: `Mozaika yelimi`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img13,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
    ],
  },
  {
    id: 3,
    name: {
      en: "Plastering & Leveling",
      ru: "Штукатурные и выравнивающие смеси",
      uz: "Suvog‘ va tekislash aralashmalari",
    },
    image: "/images/categories/suvoq.jpg",
    icon: <HandToolIcon className="w-8 h-8" />,
    products: [
      {
        id: 1,
        name: {
          en: `Start band / Rodban (Base plaster)`,
          ru: `Старт-бэнд / Родбанд (базовая штукатурка)`,
          uz: `Start band / Rodban (asosiy suvoq)`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img31,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
      {
        id: 2,
        name: {
          en: `Putty / Filler`,
          ru: `Шпаклёвка`,
          uz: `Shpaklyovka`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img32,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
      {
        id: 3,
        name: {
          en: `Self-leveling floor compound`,
          ru: `Наливной пол`,
          uz: `Nalyvnoy pol (o‘z-o‘zidan tekislanadigan pol aralashmasi)`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img33,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
    ],
  },
  {
    id: 4,
    name: {
      en: "Finishing Compounds",
      ru: "Отделочные смеси",
      uz: "Yakuniy pardozlash aralashmalari",
    },
    image: "/images/categories/pardoz.jpg",
    icon: <PlumbingIcon className="w-8 h-8" />,
    products: [
      {
        id: 1,
        name: {
          en: `Paint / Emulsion`,
          ru: `Краска / Эмульсия`,
          uz: `Bo‘yoq / Emulsiya`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img41,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
      {
        id: 2,
        name: {
          en: `Tile grout`,
          ru: `Затирка для плитки`,
          uz: `Kafel orasini to‘ldiruvchi (fuga)`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img42,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
      {
        id: 3,
        name: {
          en: `Waterproofing materials`,
          ru: `Гидроизоляционные материалы`,
          uz: `Gidroizolyatsiya materiallari`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img43,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
    ],
  },
  {
    id: 5,
    name: {
      en: "Accessories & Tools",
      ru: "Аксессуары и инструменты",
      uz: "Aksessuarlar va asboblar",
    },
    image: "/images/categories/assesuars.jpg",
    icon: <GardenIcon className="w-8 h-8" />,
    products: [
      {
        id: 1,
        name: {
          en: `Shower head / construction accessory`,
          ru: `Душевая лейка / строительный аксессуар`,
          uz: `Dojdik (dush lyechkasi / qurilish aksessuari)`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img51,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
    ],
  },
  {
    id: 6,
    name: {
      en: "Household & Cleaning",
      ru: "Бытовая химия и уборка",
      uz: "Maishiy kimyo va tozalash vositalari",
    },
    image: "/images/categories/clean.jpg",
    icon: <PowerIcon className="w-8 h-8" />,
    products: [
      {
        id: 1,
        name: {
          en: `Cleaning assortments (Azelit Lux, etc.)`,
          ru: `Чистящие средства (Azelit Lux и др.)`,
          uz: `Tozalash vositalari (Azelit Lux va boshqalar)`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img61,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
      {
        id: 2,
        name: {
          en: `Glass cleaning assortments`,
          ru: `Средства для чистки стёкол`,
          uz: `Shisha tozalash vositalar`,
        },
        description: {
          en: `This is a detailed description for  It highlights key features, benefits, and specifications.`,
          ru: `Это подробное описание для продукта . В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
          uz: `Bu  uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
        },
        mainImage: img62,
        gallery: [],
        brand: {
          name: "BrandName",
          icon: `https://via.placeholder.com/100x40.png?text=Brand`,
        },
        characteristics: {
          Weight: ` kg`,
          Dimensions: `cm`,
          Material: "High-Quality Steel",
          Warranty: "2 years",
        },
      },
    ],
  },
];
