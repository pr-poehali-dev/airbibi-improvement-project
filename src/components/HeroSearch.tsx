
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Search, Users } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const HeroSearch = () => {
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [guests, setGuests] = useState(1);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  const handleSearch = () => {
    console.log("Searching:", { location, dateRange, guests });
    // Реализация поиска здесь
  };

  return (
    <div className="bg-white rounded-full p-2 shadow-lg max-w-4xl mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row">
        <div className="relative flex-1 min-w-0 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="text-xs font-bold text-gray-700 mb-1">Место</div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-primary mr-2" />
            <input
              type="text"
              placeholder="Куда вы хотите поехать?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <div className="relative flex-1 min-w-0 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200 cursor-pointer">
              <div className="text-xs font-bold text-gray-700 mb-1">Даты</div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-primary mr-2" />
                <div className="text-sm">
                  {dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "dd MMM", { locale: ru })} -{" "}
                        {format(dateRange.to, "dd MMM", { locale: ru })}
                      </>
                    ) : (
                      format(dateRange.from, "dd MMM", { locale: ru })
                    )
                  ) : (
                    "Когда"
                  )}
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              initialFocus
              mode="range"
              defaultMonth={dateRange.from}
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              locale={ru}
            />
          </PopoverContent>
        </Popover>

        <Popover open={isGuestsOpen} onOpenChange={setIsGuestsOpen}>
          <PopoverTrigger asChild>
            <div className="relative flex-1 min-w-0 px-4 py-2 cursor-pointer">
              <div className="text-xs font-bold text-gray-700 mb-1">Гости</div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-primary mr-2" />
                <div className="text-sm">{guests} {guests === 1 ? "гость" : guests < 5 ? "гостя" : "гостей"}</div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-72 p-4" align="end">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Взрослые</span>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    disabled={guests <= 1}
                  >
                    -
                  </Button>
                  <span className="w-6 text-center">{guests}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => setGuests(guests + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <div className="mt-4 md:mt-0 md:ml-4 flex items-center">
          <Button 
            onClick={handleSearch}
            className="rounded-full bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 px-6 py-2 h-12 w-full md:w-auto"
          >
            <Search className="h-4 w-4 mr-2" />
            Поиск
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
