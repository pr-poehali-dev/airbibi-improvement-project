
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import PropertyCard from "@/components/PropertyCard";
import HeroSearch from "@/components/HeroSearch";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Globe, 
  Star, 
  Leaf, 
  Shield, 
  ArrowRight,
} from "lucide-react";

// Модель данных для недвижимости
interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  dates: string;
  category: string;
}

// Исходные данные для недвижимости
const initialProperties: Property[] = [
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
  {
    id: "7",
    title: "Апартаменты с видом на залив",
    location: "Владивосток, Россия",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    price: 8200,
    rating: 4.8,
    dates: "10-15 июля",
    category: "seaside"
  },
  {
    id: "8",
    title: "Тропическое бунгало",
    location: "Сочи, Россия",
    image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    price: 14900,
    rating: 4.9,
    dates: "15-20 июля",
    category: "tropical"
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [properties, setProperties] = useState<Property[]>(initialProperties);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filteredProperties = selectedCategory === "all" 
    ? properties 
    : properties.filter(property => property.category === selectedCategory);
  
  const visibleProperties = filteredProperties.slice(0, visibleCount);
  
  const loadMore = () => {
    setIsLoading(true);
    // Имитация загрузки данных
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 3, filteredProperties.length));
      setIsLoading(false);
    }, 800);
  };

  // Сброс счетчика видимых элементов при изменении категории
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-pink-500 to-primary overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Найдите идеальное жильё для вашего путешествия
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
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
        <h2 className="text-2xl font-bold mb-6">
          {selectedCategory === "all" 
            ? "Рекомендуемые предложения" 
            : `${selectedCategory === "beach" ? "Пляжные" : 
                selectedCategory === "mountains" ? "Горные" : 
                selectedCategory === "city" ? "Городские" : 
                selectedCategory === "loft" ? "Лофт" : 
                selectedCategory === "nature" ? "Природные" : 
                selectedCategory === "castle" ? "Исторические" :
                selectedCategory === "tropical" ? "Тропические" :
                selectedCategory === "seaside" ? "С видом на море" :
                selectedCategory === "trending" ? "Популярные" : ""} предложения`}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProperties.map(property => (
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
        
        {visibleCount < filteredProperties.length && (
          <div className="flex justify-center mt-10">
            <Button 
              onClick={loadMore} 
              variant="outline" 
              className="rounded-full px-6"
              disabled={isLoading}
            >
              {isLoading ? "Загрузка..." : "Показать больше предложений"}
            </Button>
          </div>
        )}
      </div>
      
      {/* Features Section */}
      <div className="bg-gray-50 py-16 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Почему выбирают Airbibi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Разнообразие локаций</h3>
              <p className="text-gray-600">Более 100,000 вариантов жилья по всему миру в уникальных местах</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Проверенное качество</h3>
              <p className="text-gray-600">Все объявления проходят тщательную проверку перед публикацией</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Безопасное бронирование</h3>
              <p className="text-gray-600">Защита платежей и круглосуточная поддержка для вашего спокойствия</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Eco-Tourism Banner */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-6 md:mb-0 md:pr-8">
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold text-green-800">Экологичное путешествие</h2>
            </div>
            <p className="text-green-700 mb-6">Выбирайте экологичное жильё и помогайте сохранять природу. Размещения, отмеченные знаком эко, соответствуют высоким стандартам энергоэффективности и экологичности.</p>
            <Button className="rounded-full bg-green-600 hover:bg-green-700">
              Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Эко туризм" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 pt-16 pb-8 mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-lg">Поддержка</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Центр помощи</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">AirCover</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Информация о безопасности</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Поддержка людей с ограниченными возможностями</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Отмена бронирования</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Сообщество</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Airbibi.org: помощь</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Борьба с дискриминацией</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Пригласить друзей</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Подарочные карты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Прием гостей</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Сдать жильё</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">AirCover для хозяев</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Ресурсы для хозяев</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Форум сообщества</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Гостеприимство</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Airbibi</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Новые функции</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Инвесторы</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Устойчивое развитие</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2025 Airbibi, Inc. · 
              <a href="#" className="hover:underline hover:text-primary ml-1">Конфиденциальность</a> · 
              <a href="#" className="hover:underline hover:text-primary ml-1">Условия</a> · 
              <a href="#" className="hover:underline hover:text-primary ml-1">Карта сайта</a>
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2 text-gray-700" />
              <span className="text-sm font-medium mr-4">Русский (RU)</span>
              <span className="text-sm font-medium">₽ RUB</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
