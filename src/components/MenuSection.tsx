import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star, Clock } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "BurgerFlow Classic",
    description: "Pão brioche, burger 180g, queijo cheddar, alface, tomate, cebola caramelizada",
    price: 29.90,
    image: "🍔",
    rating: 4.8,
    prepTime: "15min",
    category: "Clássicos",
    isPopular: true
  },
  {
    id: 2,
    name: "Bacon Explosion",
    description: "Duplo burger, bacon crocante, queijo gouda, molho especial da casa",
    price: 35.90,
    image: "🥓",
    rating: 4.9,
    prepTime: "18min",
    category: "Premium",
    isNew: true
  },
  {
    id: 3,
    name: "Veggie Deluxe",
    description: "Burger de grão-de-bico, queijo vegano, rúcula, tomate seco, molho tahine",
    price: 27.90,
    image: "🥬",
    rating: 4.7,
    prepTime: "12min",
    category: "Vegano",
    isVegan: true
  },
  {
    id: 4,
    name: "Spicy Fire",
    description: "Burger picante, pimenta jalapeño, queijo pepper jack, molho chipotle",
    price: 32.90,
    image: "🌶️",
    rating: 4.6,
    prepTime: "16min",
    category: "Picantes",
    isSpicy: true
  },
  {
    id: 5,
    name: "BBQ Master",
    description: "Burger defumado, molho BBQ artesanal, cebola roxa, queijo provolone",
    price: 34.90,
    image: "🔥",
    rating: 4.8,
    prepTime: "20min",
    category: "Premium"
  },
  {
    id: 6,
    name: "Smash Original",
    description: "Duplo smash burger, queijo americano, picles, molho especial",
    price: 31.90,
    image: "🍟",
    rating: 4.9,
    prepTime: "14min",
    category: "Smash",
    isPopular: true
  }
];

const categories = ["Todos", "Clássicos", "Premium", "Vegano", "Picantes", "Smash"];

const MenuSection = () => {
  return (
    <section id="cardapio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nosso <span className="text-primary">Cardápio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Burgers artesanais feitos com ingredientes selecionados e muito amor
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50">
              <CardHeader className="relative">
                <div className="flex items-start justify-between">
                  <div className="text-6xl mb-4">{item.image}</div>
                  <div className="flex flex-col gap-2">
                    {item.isPopular && (
                      <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                    )}
                    {item.isNew && (
                      <Badge className="bg-accent text-accent-foreground">Novo</Badge>
                    )}
                    {item.isVegan && (
                      <Badge variant="secondary">Vegano</Badge>
                    )}
                    {item.isSpicy && (
                      <Badge className="bg-destructive text-destructive-foreground">Picante</Badge>
                    )}
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </CardTitle>
                
                <p className="text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.prepTime}</span>
                    </div>
                  </div>
                  <Badge variant="outline">{item.category}</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Personalizar
                    </Button>
                    <Button variant="default" size="sm" className="group">
                      <Plus className="h-4 w-4 mr-1 group-hover:rotate-90 transition-transform" />
                      Adicionar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="cta" size="xl">
            Ver Cardápio Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;