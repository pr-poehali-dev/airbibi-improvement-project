import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Search, MapPin, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const HeroSearch = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    console.log("Searching for:", { location, date, guests });
    // Implement actual search functionality here
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="rounded-xl border border-gray-300 p-3 hover:shadow-md transition">
          <label className="text-sm font-medium text-gray-700">Место</label>
          <div className="flex items-center mt-1">
            <MapPin className="h-5 w-5 text-gray-400 mr-2" />
            <Input 
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Куда едем?" 
              className="border-none p-0 h-6 focus-visible:ring-0 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="rounded-xl border border-gray-300 p-3 hover:shadow-md transition">
          <Popover>
            <PopoverTrigger asChild>
              <div className="cursor-pointer">
                <label className="text-sm font-medium text-gray-700">Прибытие</label>
                <div className="flex items-center mt-1">
                  <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className={`h-6 ${!date ? "text-gray-400" : ""}`}>
                    {date ? date.toLocaleDateString('ru-RU') : "Когда?"}
                  </span>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="rounded-xl border border-gray-300 p-3 hover:shadow-md transition">
          <label className="text-sm font-medium text-gray-700">Гости</label>
          <div className="flex items-center mt-1">
            <Users className="h-5 w-5 text-gray-400 mr-2" />
            <div className="flex items-center">
              <button 
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="h-6 w-6 rounded-full border border-gray-300 flex items-center justify-center"
              >
                -
              </button>
              <span className="mx-2">{guests}</span>
              <button 
                onClick={() => setGuests(guests + 1)}
                className="h-6 w-6 rounded-full border border-gray-300 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleSearch}
          className="h-full bg-primary hover:bg-primary/90 text-white rounded-xl flex items-center justify-center gap-2"
        >
          <Search className="h-5 w-5" />
          <span>Поиск</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroSearch;
