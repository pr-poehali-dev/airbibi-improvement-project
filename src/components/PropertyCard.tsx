import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="property-card group">
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="property-image"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 h-8 w-8 rounded-full text-white hover:text-primary bg-transparent hover:bg-white/90"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="mt-3">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-base text-gray-900">{title}</h3>
          <div className="flex items-center gap-1 text-sm">
            <span>★</span>
            <span>{rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-1">{location}</p>
        <p className="text-sm text-gray-500 mt-1">{dates}</p>
        
        <p className="mt-2 font-medium">
          {price.toLocaleString('ru-RU')} ₽ <span className="font-normal">за ночь</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
