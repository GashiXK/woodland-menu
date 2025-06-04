
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Leaf, ChefHat, Wine } from "lucide-react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  const menuCategories = [
    { id: "appetizers", name: "Antipastet", icon: Leaf },
    { id: "mains", name: "Pjatat Kryesore", icon: ChefHat },
    { id: "desserts", name: "Ëmbëlsirat", icon: Star },
    { id: "beverages", name: "Pijet", icon: Wine },
  ];

  const menuItems = {
    appetizers: [
      {
        name: "Sallatë Pyjore me Kërpudha",
        description: "Kërpudha të egra, rucola të egra, arrë, djathë gorgonzola, dhe vaj ulliri truffle",
        price: "1,200 ALL",
        featured: true
      },
      {
        name: "Carpaccio Dreri",
        description: "Mish dreri i hollë, kaperi, parmesan, limon dhe vaj ulliri virgin",
        price: "1,400 ALL",
        featured: false
      },
      {
        name: "Supë Kastanje me Krem",
        description: "Supë e ngrohtë kastanjesh të pyjit me krem dhe biscotte",
        price: "900 ALL",
        featured: false
      }
    ],
    mains: [
      {
        name: "Biftek Dreri me Sos Mjedre",
        description: "Mish dreri i pjekur në perfeksion me sos mjedre dhe perime sezonale",
        price: "2,800 ALL",
        featured: true
      },
      {
        name: "Salmoni i Egër me Kërpudha",
        description: "Salmon i egër me kërpudha porcini dhe spinaq të egër",
        price: "2,400 ALL",
        featured: true
      },
      {
        name: "Risotto me Truffle të Zezë",
        description: "Risotto kremoz me truffle të zezë dhe parmesan 24-mujsh",
        price: "2,200 ALL",
        featured: false
      },
      {
        name: "Gjeli i Lirë me Erëza Pyjore",
        description: "Gjel i lirë me erëza të pyjit, patate të vogla dhe salcë rozmarinë",
        price: "2,000 ALL",
        featured: false
      }
    ],
    desserts: [
      {
        name: "Tiramisu Pyjore",
        description: "Tiramisu traditional me aromë kafe dhe mascarpone, e zbukuruar me gjethe",
        price: "800 ALL",
        featured: true
      },
      {
        name: "Tart Pjeshkash me Mjaltë",
        description: "Tart e ngrohtë me pjeshka sezonale dhe mjaltë mali",
        price: "700 ALL",
        featured: false
      },
      {
        name: "Akullore Vanilie me Arra",
        description: "Akullore artizanale vanilie me copa arrash dhe karamel",
        price: "600 ALL",
        featured: false
      }
    ],
    beverages: [
      {
        name: "Çaj Pyjore",
        description: "Përzierje e veçantë çajesh mali me mënt, kamilomil dhe limon",
        price: "400 ALL",
        featured: false
      },
      {
        name: "Verë e Kuqe Reserve",
        description: "Verë e kuqe lokale e vitit 2019, e pjekur në fuçi dushku",
        price: "1,800 ALL",
        featured: true
      },
      {
        name: "Koktej Woodland",
        description: "Whiskey, mjaltë mali, limon dhe erëza të freskëta",
        price: "1,000 ALL",
        featured: true
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-green-900 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-900 opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/d36e8289-5825-4478-9c44-1c54be4da1de.png" 
              alt="Woodland Restaurant Logo" 
              className="h-24 w-auto"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-2 text-green-50">Woodland Restaurant</h1>
            <p className="text-xl text-green-200 mb-4">Një përvojë kulinare magjike në zemër të natyrës</p>
            <div className="flex justify-center space-x-6 text-green-300">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-current" />
                <span>Michelin Recommended</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5" />
                <span>Përbërës Lokalë</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {menuCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeCategory === category.id
                      ? "bg-green-800 text-white shadow-lg transform scale-105"
                      : "text-green-800 hover:bg-green-100 hover:scale-105"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-green-900 mb-4">
              {menuCategories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <Separator className="w-24 mx-auto bg-green-600" />
          </div>

          <div className="grid gap-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 border-green-200 hover:border-green-400 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-serif text-green-900 group-hover:text-green-700 transition-colors">
                          {item.name}
                        </h3>
                        {item.featured && (
                          <Badge className="bg-green-100 text-green-800 border-green-300">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            E Veçantë
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
                        {item.description}
                      </p>
                    </div>
                    <div className="ml-6 text-right">
                      <span className="text-2xl font-serif font-bold text-green-800 group-hover:text-green-600 transition-colors">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/d36e8289-5825-4478-9c44-1c54be4da1de.png" 
              alt="Woodland Restaurant Logo" 
              className="h-16 w-auto mx-auto opacity-80"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-serif text-lg mb-3 text-green-200">Kontakti</h4>
              <p className="text-green-300">Rruga e Pyjeve 123</p>
              <p className="text-green-300">Tiranë, Shqipëri</p>
              <p className="text-green-300">+355 69 123 4567</p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-3 text-green-200">Orari</h4>
              <p className="text-green-300">E Hënë - E Shtunë: 12:00 - 23:00</p>
              <p className="text-green-300">E Diel: 12:00 - 22:00</p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-3 text-green-200">Rezervimet</h4>
              <p className="text-green-300">reservation@woodland.al</p>
              <p className="text-green-300 mt-2">Rezervim online i disponueshëm</p>
            </div>
          </div>
          <Separator className="my-8 bg-green-700" />
          <p className="text-green-400 text-sm">
            © 2024 Woodland Restaurant. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
