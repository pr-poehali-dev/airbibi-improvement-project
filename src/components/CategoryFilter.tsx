import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Beach, Mountains, Building, Castle, Trees, House, Warehouse, Tent } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { id: "beach", name: "Пляж", icon: <Beach className="h-6 w-6" /> },
  { id: "mountains", name: "Горы", icon: <Mountains className="h-6 w-6" /> },
  { id: "city", name: "Города", icon: <Building className="h-6 w-6" /> },
  { id: "castle", name: "Замки", icon: <Castle className="h-6 w-6" /> },
  { id: "nature", name: "Природа", icon: <Trees className="h-6 w-6" /> },
  { id: "house", name: "Дома", icon: <House className="h-6 w-6" /> },
  { id: "loft", name: "Лофты", icon: <Warehouse className="h-6 w-6" /> },
  { id: "camping", name: "Кемпинг", icon: <Tent className="h-6 w-6" /> },
];

interface CategoryFilterProps {
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter = ({ onSelectCategory }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    const newCategory = activeCategory === categoryId ? null : categoryId;
    setActiveCategory(newCategory);
    onSelectCategory(newCategory || "all");
  };

  return (
    <div className="py-4 border-b border-gray-200">
      <Carousel className="max-w-5xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((category) => (
            <CarouselItem key={category.id} className="pl-2 md:pl-4 md:basis-1/5 lg:basis-1/8">
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={`category-button ${
                  activeCategory === category.id 
                    ? "border-b-2 border-gray-800 text-gray-800" 
                    : "text-gray-500"
                }`}
              >
                <div className="p-2">{category.icon}</div>
                <span className="text-xs mt-1">{category.name}</span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default CategoryFilter;
