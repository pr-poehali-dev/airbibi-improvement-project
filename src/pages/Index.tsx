import { useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import PropertyCard from "@/components/PropertyCard";
import HeroSearch from "@/components/HeroSearch";

// Моковые данные для недвижимости
const properties = [
  {
    id: "1",
    title: "Уютная квартира в центре",
    location: "Москва, Россия",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    price: 5800,
    rating: 4.9,
    dates: "7-12 мая",
    category: "city"
  },
  {
    id: "2",
    title: "Вилла с видом на море",
    location: "Сочи, Россия",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    price: 12500,
    rating: 4.8,
    dates: "15-20 мая",
    category: "beach"
  },
  {
    id: "3",
    title: "Шале в горах",
    location: "Красная поляна, Россия",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    price: 9300,
    rating: 4.7,
    dates: "1-6 июня",
    category: "mountains"
  },
  {
    id: "4",
    title: "Современный лофт",
    location: "Санкт-Петербург, Россия",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    price: 6700,
    rating: 4.6,
    dates: "10-15 июня",
    category: "loft"
  },
  {
    id: "5",
    title: "Домик в лесу",
    location: "Карелия, Россия",
    image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    price: 4500,
    rating: 4.8,
    dates: "20-25 июня",
    category: "nature"
  },
  {
    id: "6",
    title: "Историческая усадьба",
    location: "Владимир, Россия",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    price: 7800,
    rating: 4.9,
    dates: "5-10 июля",
    category: "castle"
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProperties = selectedCategory === "all" 
    ? properties 
    : properties.filter(property => property.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-purple-500 to-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Найдите идеальное жильё для вашего путешествия
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in">
              Бронируйте уникальные дома, квартиры и многое другое по всему миру
            </p>
          </div>
          
          <HeroSearch />
        </div>
      </div>
      
      {/* Categories Filter */}
      <div className="container mx-auto px-4 py-2">
        <CategoryFilter onSelectCategory={setSelectedCategory} />
      </div>
      
      {/* Property Listings */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProperties.map(property => (
            <PropertyCard 
              key={property.id}
              id={property.id}
              title={property.title}
              location={property.location}
              image={property.image}
              price={property.price}
              rating={property.rating}
              dates={property.dates}
            />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-10 mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Центр помощи</a></li>
                <li><a href="#" className="hover:underline">AirCover</a></li>
                <li><a href="#" className="hover:underline">Информация о безопасности</a></li>
                <li><a href="#" className="hover:underline">Поддержка людей с ограниченными возможностями</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Сообщество</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Airbibi.org: помощь</a></li>
                <li><a href="#" className="hover:underline">Борьба с дискриминацией</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Прием гостей</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Сдать жильё</a></li>
                <li><a href="#" className="hover:underline">AirCover для хозяев</a></li>
                <li><a href="#" className="hover:underline">Ресурсы для хозяев</a></li>
                <li><a href="#" className="hover:underline">Форум сообщества</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Airbibi</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Новости</a></li>
                <li><a href="#" className="hover:underline">Новые функции</a></li>
                <li><a href="#" className="hover:underline">Карьера</a></li>
                <li><a href="#" className="hover:underline">Инвесторы</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              © 2025 Airbibi, Inc. · Конфиденциальность · Условия · Карта сайта
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Globe className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Русский (RU)</span>
              <span className="mx-2">₽</span>
              <span className="text-sm font-medium">RUB</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
