import React from 'react';
import FinishingMaterialsIcon from '../components/icons/FinishingMaterialsIcon';
import BuildingMaterialsIcon from '../components/icons/BuildingMaterialsIcon';
import WaterSystemsIcon from '../components/icons/WaterSystemsIcon';
import ElectricalIcon from '../components/icons/ElectricalIcon';
import DoorsWindowsIcon from '../components/icons/DoorsWindowsIcon';

export interface Catalog {
  id: number;
  name: {
    en: string;
    ru: string;
    uz: string;
  };
  image: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const catalogs: Catalog[] = [
  {
    id: 1,
    name: {
      en: 'Interior finishing materials',
      ru: 'Внутренние отделочные материалы',
      uz: 'Ichki pardozlash materiallari',
    },
    image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png',
    icon: FinishingMaterialsIcon,
  },
  {
    id: 2,
    name: {
      en: 'Basic building materials',
      ru: 'Основные строительные материалы',
      uz: 'Asosiy qurilish materiallari',
    },
    image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png',
    icon: BuildingMaterialsIcon,
  },
  {
    id: 3,
    name: {
      en: 'Water supply and heating systems',
      ru: 'Системы водоснабжения и отопления',
      uz: 'Suv ta\'minoti va isitish tizimlari',
    },
    image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png',
    icon: WaterSystemsIcon,
  },
  {
    id: 4,
    name: {
      en: 'Electrical equipment and cables',
      ru: 'Электрооборудование и кабели',
      uz: 'Elektr uskunalari va kabellar',
    },
    image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png',
    icon: ElectricalIcon,
  },
  {
    id: 5,
    name: {
      en: 'Doors and windows',
      ru: 'Двери и окна',
      uz: 'Eshiklar va derazalar',
    },
    image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png',
    icon: DoorsWindowsIcon,
  },
  {
    id: 6,
    name: {
      en: 'Another Category',
      ru: 'Еще одна категория',
      uz: 'Yana bir kategoriya',
    },
    image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png',
    icon: FinishingMaterialsIcon,
  },
];
