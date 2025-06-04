
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Leaf, ChefHat, Wine, MapPin, Clock, Phone, ChevronDown } from "lucide-react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("fastfood");
  const [showMenu, setShowMenu] = useState(false);

  const menuCategories = [
    { id: "fastfood", name: "MENU FAST FOOD", icon: ChefHat },
    { id: "breakfast", name: "MENU MËNGJESI", icon: Star },
  ];

  const menuItems = {
    fastfood: [
      { name: "Hamburger Classic", price: "2.50€" },
      { name: "Hamburger Wood Land", price: "3.00€" },
      { name: "Hamburger Mexican", price: "2.80€" },
      { name: "Chicken Burger", price: "3.00€" },
      { name: "Double Burger", price: "4.00€" },
      { name: "Sandwich Pule", price: "2.80€" },
      { name: "Sandwich Steak", price: "3.00€" },
      { name: "Sandwich Mix", price: "3.00€" },
      { name: "Bruscheta", price: "3.00€" },
      { name: "Chicken e Vogël", price: "3.50€" },
      { name: "Chicken Mesme", price: "7.00€" },
      { name: "Chicken Madhe", price: "10.00€" },
      { name: "Mezze e Ngrohtë (vogël)", price: "4.00€" },
      { name: "Mezze e Ngrohtë (mesme)", price: "8.00€" },
      { name: "Mezze e Ngrohtë (madhe)", price: "14.00€" },
      { name: "Mezze e Ftohtë (vogël)", price: "3.50€" },
      { name: "Mezze e Ftohtë (mesme)", price: "5.50€" },
      { name: "Mezze e Ftohtë (madhe)", price: "8.50€" },
      { name: "Pomfrit", price: "2.50€" },
    ],
    breakfast: [
      { name: "Omlet me Proshutë", price: "3.00€" },
      { name: "Omlet me Djathë", price: "3.00€" },
      { name: "Omlet me Kërpudha", price: "3.00€" },
      { name: "Mëngjesi Woodland", description: "Vezë, domate, djathë, tranguj, ajvar i shtëpisë, ulliri", price: "3.50€" },
      { name: "Llokuma", price: "3.00€" },
      { name: "Supë me Perime", price: "2.00€" },
    ]
  };

  const scrollToMenu = () => {
    setShowMenu(true);
    setTimeout(() => {
      const menuSection = document.getElementById('menu-section');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/d36e8289-5825-4478-9c44-1c54be4da1de.png" 
              alt="Woodland Restaurant Logo" 
              className="h-32 w-auto mx-auto mb-6 drop-shadow-2xl"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent animate-scale-in">
            Woodland Restaurant
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Një përvojë kulinare magjike në zemër të natyrës
          </p>
          <div className="flex justify-center">
            <button
              onClick={scrollToMenu}
              className="group inline-flex items-center gap-3 text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-full font-serif text-xl tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              <span className="font-light italic">découvrir notre</span>
              <span className="font-semibold">Menu</span>
              <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      {showMenu && (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="flex justify-center py-6">
              <div className="flex bg-gray-50 rounded-2xl p-2 gap-2">
                {menuCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm ${
                        activeCategory === category.id
                          ? "bg-green-600 text-white shadow-lg transform scale-105"
                          : "text-gray-600 hover:bg-white hover:text-green-600 hover:shadow-md"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Menu Content */}
      {showMenu && (
        <main id="menu-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/30 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Elegant Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-green-600"></div>
                  <div className="relative">
                    <Leaf className="h-8 w-8 text-green-600" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full opacity-70"></div>
                  </div>
                  <div className="w-20 h-px bg-gradient-to-l from-transparent via-amber-400 to-green-600"></div>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 tracking-wide relative">
                  <span className="bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
                    {menuCategories.find(cat => cat.id === activeCategory)?.name}
                  </span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-600 to-amber-400 rounded-full opacity-60"></div>
                </h2>
                
                <p className="text-gray-600 font-light italic text-xl tracking-wide">
                  Një përzgjedhje e kujdesshme shijesash autentike
                </p>
              </div>

              {/* Elegant Menu Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Decorative top border */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-600 via-amber-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Subtle background pattern */}
                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <Leaf className="h-16 w-16 text-green-600" />
                    </div>

                    <CardContent className="p-8 relative z-10">
                      <div className="flex justify-between items-start gap-8">
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-3">
                            {/* Elegant number badge */}
                            <div className="relative">
                              <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-100 to-green-50 text-green-700 font-bold text-sm rounded-full border border-green-200 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-2xl font-serif text-gray-900 group-hover:text-green-700 transition-colors duration-300 mb-2 leading-tight">
                                {item.name}
                              </h3>
                              {item.description && (
                                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 italic leading-relaxed font-light">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Elegant price display */}
                        <div className="text-right relative">
                          <div className="relative inline-block">
                            <span className="text-3xl font-bold bg-gradient-to-r from-green-700 via-green-600 to-amber-600 bg-clip-text text-transparent">
                              {item.price}
                            </span>
                            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative bottom line */}
                      <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Subtle hover effect dots */}
                      <div className="absolute bottom-4 left-8 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <img 
                src="/lovable-uploads/d36e8289-5825-4478-9c44-1c54be4da1de.png" 
                alt="Woodland Restaurant Logo" 
                className="h-20 w-auto mx-auto mb-6 opacity-90"
              />
              <h3 className="text-2xl font-serif text-green-200 mb-2">Woodland Restaurant</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-3 text-green-300">
                  <MapPin className="h-5 w-5" />
                  <h4 className="font-semibold text-lg">Vendndodhja</h4>
                </div>
                <div className="text-gray-300 space-y-1">
                  <p>Rruga e Pyjeve 123</p>
                  <p>Tiranë, Shqipëri</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-3 text-green-300">
                  <Clock className="h-5 w-5" />
                  <h4 className="font-semibold text-lg">Orari</h4>
                </div>
                <div className="text-gray-300 space-y-1">
                  <p>E Hënë - E Shtunë: 12:00 - 23:00</p>
                  <p>E Diel: 12:00 - 22:00</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-3 text-green-300">
                  <Phone className="h-5 w-5" />
                  <h4 className="font-semibold text-lg">Kontakti</h4>
                </div>
                <div className="text-gray-300 space-y-1">
                  <p>+355 69 123 4567</p>
                  <p>reservation@woodland.al</p>
                </div>
              </div>
            </div>
            
            <Separator className="my-12 bg-gray-700" />
            <div className="text-center text-gray-400">
              <p>© 2024 Woodland Restaurant. Të gjitha të drejtat e rezervuara.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
