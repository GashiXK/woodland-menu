
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Leaf, ChefHat, Wine, MapPin, Clock, Phone } from "lucide-react";

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
        price: "12€",
        featured: true
      },
      {
        name: "Carpaccio Dreri",
        description: "Mish dreri i hollë, kaperi, parmesan, limon dhe vaj ulliri virgin",
        price: "14€",
        featured: false
      },
      {
        name: "Supë Kastanje me Krem",
        description: "Supë e ngrohtë kastanjesh të pyjit me krem dhe biscotte",
        price: "9€",
        featured: false
      }
    ],
    mains: [
      {
        name: "Biftek Dreri me Sos Mjedre",
        description: "Mish dreri i pjekur në perfeksion me sos mjedre dhe perime sezonale",
        price: "28€",
        featured: true
      },
      {
        name: "Salmoni i Egër me Kërpudha",
        description: "Salmon i egër me kërpudha porcini dhe spinaq të egër",
        price: "24€",
        featured: true
      },
      {
        name: "Risotto me Truffle të Zezë",
        description: "Risotto kremoz me truffle të zezë dhe parmesan 24-mujsh",
        price: "22€",
        featured: false
      },
      {
        name: "Gjeli i Lirë me Erëza Pyjore",
        description: "Gjel i lirë me erëza të pyjit, patate të vogla dhe salcë rozmarinë",
        price: "20€",
        featured: false
      }
    ],
    desserts: [
      {
        name: "Tiramisu Pyjore",
        description: "Tiramisu traditional me aromë kafe dhe mascarpone, e zbukuruar me gjethe",
        price: "8€",
        featured: true
      },
      {
        name: "Tart Pjeshkash me Mjaltë",
        description: "Tart e ngrohtë me pjeshka sezonale dhe mjaltë mali",
        price: "7€",
        featured: false
      },
      {
        name: "Akullore Vanilie me Arra",
        description: "Akullore artizanale vanilie me copa arrash dhe karamel",
        price: "6€",
        featured: false
      }
    ],
    beverages: [
      {
        name: "Çaj Pyjore",
        description: "Përzierje e veçantë çajesh mali me mënt, kamilomil dhe limon",
        price: "4€",
        featured: false
      },
      {
        name: "Verë e Kuqe Reserve",
        description: "Verë e kuqe lokale e vitit 2019, e pjekur në fuçi dushku",
        price: "18€",
        featured: true
      },
      {
        name: "Koktej Woodland",
        description: "Whiskey, mjaltë mali, limon dhe erëza të freskëta",
        price: "10€",
        featured: true
      }
    ]
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
          <div className="flex flex-wrap justify-center gap-6 text-green-200">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <span className="font-medium">Michelin Recommended</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Leaf className="h-5 w-5 text-green-400" />
              <span className="font-medium">Përbërës Lokalë</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
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

      {/* Menu Content */}
      <main className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-gray-900 mb-4">
                {menuCategories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-4">
                          <h3 className="text-2xl font-serif text-gray-900 group-hover:text-green-600 transition-colors">
                            {item.name}
                          </h3>
                          {item.featured && (
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 px-3 py-1">
                              <Star className="h-3 w-3 mr-1 fill-current" />
                              E Veçantë
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

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
