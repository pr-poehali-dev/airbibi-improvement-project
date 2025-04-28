
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  dates: string;
}

const PropertyCard = ({ id, title, location, image, price, rating, dates }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      className="property-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = `/property/${id}`}
    >
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="property-image"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleFavorite}
          className={`absolute top-2 right-2 h-8 w-8 rounded-full ${isFavorite ? 'text-primary bg-white' : 'text-white hover:text-primary bg-black/20 hover:bg-white/90'}`}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
        
        {rating >= 4.8 && (
          <Badge className="absolute top-2 left-2 bg-white text-black hover:bg-white/90">
            Топ рейтинг
          </Badge>
        )}
      </div>
      
      <div className="mt-3">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-base text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-primary">★</span>
            <span>{rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-1">{location}</p>
        <p className="text-sm text-gray-500 mt-1">{dates}</p>
        
        <p className="mt-2 font-medium flex items-baseline">
          {price.toLocaleString('ru-RU')} ₽ <span className="font-normal text-sm ml-1">за ночь</span>
        </p>
        
        {isHovered && (
          <Button 
            variant="ghost" 
            className="w-full mt-2 hover:bg-primary/10 hover:text-primary text-sm font-medium transition-all px-0 py-1 h-8"
          >
            Подробнее
          </Button>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
