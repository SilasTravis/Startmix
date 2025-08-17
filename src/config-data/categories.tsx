import React from "react";

// Import all icon components
import AutoIcon from "../components/icons/AutoIcon";
import ConsumablesIcon from "../components/icons/ConsumablesIcon";
import ElectricityIcon from "../components/icons/ElectricityIcon";
import FastenerIcon from "../components/icons/FastenerIcon";
import GardenIcon from "../components/icons/GardenIcon";
import HandToolIcon from "../components/icons/HandToolIcon";
import PlumbingIcon from "../components/icons/PlumbingIcon";
import PowerIcon from "../components/icons/PowerIcon";
import ToolIcon from "../components/icons/ToolIcon";
import WorkwearIcon from "../components/icons/WorkwearIcon";

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
const generateProducts = (
  categoryId: number,
  categoryName: { en: string; ru: string; uz: string },
  count: number
): Product[] => {
  const products: Product[] = [];
  for (let i = 1; i <= count; i++) {
    products.push({
      id: categoryId * 100 + i,
      name: {
        en: `${categoryName.en} Product ${i}`,
        ru: `${categoryName.ru}, продукт ${i}`,
        uz: `${categoryName.uz} mahsuloti ${i}`,
      },
      description: {
        en: `This is a detailed description for ${categoryName.en} Product ${i}. It highlights key features, benefits, and specifications.`,
        ru: `Это подробное описание для продукта ${categoryName.ru} ${i}. В нем освещаются ключевые особенности, преимущества и технические характеристики.`,
        uz: `Bu ${categoryName.uz} mahsuloti ${i} uchun batafsil tavsif. Unda asosiy xususiyatlar, afzalliklar va texnik tavsiflar yoritilgan.`,
      },
      mainImage: [
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6473973/pexels-photo-6473973.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8487376/pexels-photo-8487376.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7492879/pexels-photo-7492879.jpeg?auto=compress&cs=tinysrgb&w=600",
      ][Math.floor(Math.random() * 4)],
      gallery: [
        "https://images.pexels.com/photos/6473973/pexels-photo-6473973.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7492879/pexels-photo-7492879.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8487376/pexels-photo-8487376.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      brand: {
        name: "BrandName",
        icon: `https://via.placeholder.com/100x40.png?text=Brand`,
      },
      characteristics: {
        Weight: `${i * 1.2} kg`,
        Dimensions: `${i * 10}x${i * 5}x${i * 2} cm`,
        Material: "High-Quality Steel",
        Warranty: "2 years",
      },
    });
  }
  return products;
};

// Category data array
export const categories: Category[] = [
  {
    id: 1,
    name: { en: "Tools", ru: "Инструмент", uz: "Asboblar" },
    image:
      "https://images.pexels.com/photos/4312855/pexels-photo-4312855.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <ToolIcon className="w-8 h-8" />,
    products: generateProducts(
      1,
      { en: "Mustahkam beton aralashmasi", ru: "Прочный бетонный раствор", uz: "Durable concrete mix" },
      12
    ),
  },
  {
    id: 2,
    name: {
      en: "Electricity and Light",
      ru: "Электрика и свет",
      uz: "Elektr va yorug'lik",
    },
    image:
      "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <ElectricityIcon className="w-8 h-8" />,
    products: generateProducts(
      2,
      { en: "Modern ceiling panels", ru: "Современные потолочные панели", uz: "Zamonaviy shift panellari" },
      15
    ),
  },
  {
    id: 3,
    name: { en: "Hand Tools", ru: "Ручной инструмент", uz: "Qo'l asboblari" },
    image:
      "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <HandToolIcon className="w-8 h-8" />,
    products: generateProducts(
      3,
      { en: "Thermal insulation brick", ru: "Теплоизоляционный кирпич", uz: "Issiqlikni saqlovchi g‘isht" },
      10
    ),
  },
  {
    id: 4,
    name: { en: "Plumbing", ru: "Сантехника", uz: "Santexnika" },
    image:
      "https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <PlumbingIcon className="w-8 h-8" />,
    products: generateProducts(
      4,
      { en: "Moisture resistant paint", ru: "Влагостойкая краска", uz: "Namlikka chidamli bo‘yoq" },
      18
    ),
  },
  {
    id: 5,
    name: { en: "Garden", ru: "Всё для сада", uz: "Bog' uchun" },
    image:
      "https://images.pexels.com/photos/127944/pexels-photo-127944.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <GardenIcon className="w-8 h-8" />,
    products: generateProducts(5, { en: "Energy saving windows", ru: "Энергосберегающие окна", uz: "Energiya tejovchi oynalar" }, 20),
  },
  {
    id: 6,
    name: {
      en: "Power Equipment",
      ru: "Силовая техника",
      uz: "Quvvat uskunalari",
    },
    image:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <PowerIcon className="w-8 h-8" />,
    products: generateProducts(
      6,
      { en: "Power Equipment", ru: "Силовая техника", uz: "Quvvat uskunalari" },
      10
    ),
  },
  {
    id: 7,
    name: { en: "Auto Products", ru: "Автотовары", uz: "Avto mahsulotlar" },
    image: "https://via.placeholder.com/300x200.png?text=Auto+Products",
    icon: <AutoIcon className="w-8 h-8" />,
    products: generateProducts(
      7,
      { en: "Auto Products", ru: "Автотовары", uz: "Avto mahsulotlar" },
      25
    ),
  },
  {
    id: 8,
    name: { en: "Fasteners", ru: "Крепеж", uz: "Mahkamlagichlar" },
    image: "https://via.placeholder.com/300x200.png?text=Fasteners",
    icon: <FastenerIcon className="w-8 h-8" />,
    products: generateProducts(
      8,
      { en: "Fasteners", ru: "Крепеж", uz: "Mahkamlagichlar" },
      30
    ),
  },
  {
    id: 9,
    name: {
      en: "Consumables",
      ru: "Расходные материалы",
      uz: "Sarf materiallari",
    },
    image: "https://via.placeholder.com/300x200.png?text=Consumables",
    icon: <ConsumablesIcon className="w-8 h-8" />,
    products: generateProducts(
      9,
      { en: "Consumables", ru: "Расходные материалы", uz: "Sarf materiallari" },
      50
    ),
  },
  {
    id: 10,
    name: {
      en: "Workwear & PPE",
      ru: "Спецодежда и СИЗ",
      uz: "Maxsus kiyim va ShHV",
    },
    image: "https://via.placeholder.com/300x200.png?text=Workwear",
    icon: <WorkwearIcon className="w-8 h-8" />,
    products: generateProducts(
      10,
      { en: "Workwear", ru: "Спецодежда", uz: "Maxsus kiyim" },
      15
    ),
  },
];
