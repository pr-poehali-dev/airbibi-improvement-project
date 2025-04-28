
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Beach, Mountains, Building, Castle, Trees, Home, Warehouse, Tent, Star, Wind, Palmtree, Compass } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { id: "all", name: "Все", icon: <Star className="h-6 w-6" /> },
  { id: "trending", name: "Популярное", icon: <Compass className="h-6 w-6" /> },
  { id: "beach", name: "Пляж", icon: <Beach className="h-6 w-6" /> },
  { id: "mountains", name: "Горы", icon: <Mountains className="h-6 w-6" /> },
  { id: "city", name: "Города", icon: <Building className="h-6 w-6" /> },
  { id: "castle", name: "Замки", icon: <Castle className="h-6 w-6" /> },
  { id: "nature", name: "Природа", icon: <Trees className="h-6 w-6" /> },
  { id: "tropical", name: "Тропики", icon: <Palmtree className="h-6 w-6" /> },
  { id: "house", name: "Дома", icon: <Home className="h-6 w-6" /> },
  { id: "loft", name: "Лофты", icon: <Warehouse className="h-6 w-6" /> },
  { id: "camping", name: "Кемпинг", icon: <Tent className="h-6 w-6" /> },
  { id: "seaside", name: "Вид на море", icon: <Wind className="h-6 w-6" /> },
];

interface CategoryFilterProps {
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter = ({ onSelectCategory }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Инициализация
    handleResize();
    
    // Добавляем обработчик события
    window.addEventListener('resize', handleResize);
    
    // Очистка
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onSelectCategory(categoryId);
  };

  return (
    <div className="py-6 border-b border-gray-200">
      <Carousel className="max-w-6xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((category) => (
            <CarouselItem key={category.id} className="pl-2 md:pl-4 md:basis-1/6 lg:basis-1/8">
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={`category-button group ${
                  activeCategory === category.id 
                    ? "border-b-2 border-gray-800 text-gray-800" 
                    : "text-gray-500 hover:text-primary"
                }`}
              >
                <div className={`p-2 rounded-full transition-colors ${
                  activeCategory === category.id 
                    ? "bg-gray-100" 
                    : "group-hover:bg-primary/10"
                }`}>
                  {category.icon}
                </div>
                <span className="text-xs mt-1 font-medium">{category.name}</span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        {!isMobile && (
          <>
            <CarouselPrevious className="-left-4 hover:bg-white hover:text-primary" />
            <CarouselNext className="-right-4 hover:bg-white hover:text-primary" />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default CategoryFilter;
