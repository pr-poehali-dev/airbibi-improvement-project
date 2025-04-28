import { Search, Globe, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 py-4 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <svg className="h-8 w-auto text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
          <span className="ml-2 text-xl font-bold text-primary">airbibi</span>
        </Link>

        {/* Search Bar - Only on large screens */}
        <div className="hidden md:flex items-center justify-center flex-1 max-w-md mx-4">
          <div className="hero-search w-full">
            <Button variant="ghost" className="text-black hover:bg-transparent hover:text-primary font-medium">Везде</Button>
            <div className="h-6 border-r border-gray-300 mx-1"></div>
            <Button variant="ghost" className="text-black hover:bg-transparent hover:text-primary font-medium">Любая неделя</Button>
            <div className="h-6 border-r border-gray-300 mx-1"></div>
            <Button variant="ghost" className="text-black hover:bg-transparent hover:text-primary font-medium">Гости</Button>
            <Button className="rounded-full ml-auto p-2 h-8 w-8 bg-primary hover:bg-primary/90">
              <Search className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/become-a-host" className="text-sm font-medium hover:bg-secondary rounded-full px-4 py-2">
                  Сдать жильё
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="h-5 w-5" />
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="outline" className="rounded-full border-gray-300 flex items-center gap-2 px-3">
                  <Menu className="h-4 w-4" />
                  <User className="h-5 w-5" />
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
