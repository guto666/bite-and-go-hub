import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";

const burgerBase = {
  name: "BurgerFlow Classic",
  basePrice: 29.90,
  image: "🍔"
};

const ingredients = [
  {
    category: "Pães",
    items: [
      { name: "Brioche", price: 0, selected: true },
      { name: "Australiano", price: 2.00 },
      { name: "Integral", price: 1.50 },
      { name: "Pretzel", price: 3.00 }
    ]
  },
  {
    category: "Carnes",
    items: [
      { name: "Burger 180g", price: 0, selected: true },
      { name: "Burger 200g", price: 4.00 },
      { name: "Duplo Burger", price: 8.00 },
      { name: "Frango grelhado", price: 2.00 },
      { name: "Veggie (grão-de-bico)", price: 0 }
    ]
  },
  {
    category: "Queijos",
    items: [
      { name: "Cheddar", price: 0, selected: true },
      { name: "Gouda", price: 2.00 },
      { name: "Provolone", price: 2.50 },
      { name: "Queijo vegano", price: 3.00 },
      { name: "Sem queijo", price: -2.00 }
    ]
  },
  {
    category: "Adicionais",
    items: [
      { name: "Bacon", price: 4.00 },
      { name: "Ovo", price: 2.50 },
      { name: "Cebola caramelizada", price: 2.00 },
      { name: "Cogumelos", price: 3.00 },
      { name: "Jalapeño", price: 1.50 },
      { name: "Abacaxi", price: 2.00 }
    ]
  },
  {
    category: "Molhos",
    items: [
      { name: "Molho da casa", price: 0, selected: true },
      { name: "BBQ", price: 1.00 },
      { name: "Chipotle", price: 1.50 },
      { name: "Maionese temperada", price: 0.50 },
      { name: "Mostarda honey", price: 1.00 }
    ]
  }
];

const CustomizeSection = () => {
  const [selectedIngredients, setSelectedIngredients] = useState(
    ingredients.map(category => ({
      ...category,
      items: category.items.map(item => ({ ...item, quantity: item.selected ? 1 : 0 }))
    }))
  );

  const calculateTotal = () => {
    let total = burgerBase.basePrice;
    selectedIngredients.forEach(category => {
      category.items.forEach(item => {
        if (item.quantity > 0) {
          total += item.price * item.quantity;
        }
      });
    });
    return total;
  };

  const updateIngredient = (categoryIndex: number, itemIndex: number, quantity: number) => {
    const newIngredients = [...selectedIngredients];
    newIngredients[categoryIndex].items[itemIndex].quantity = Math.max(0, quantity);
    setSelectedIngredients(newIngredients);
  };

  return (
    <section id="montar" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Monte Seu <span className="text-primary">Lanche Ideal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personalize cada detalhe do seu burger e crie a combinação perfeita
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Burger Preview */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-elegant">
              <CardHeader className="text-center">
                <div className="text-8xl mb-4">{burgerBase.image}</div>
                <CardTitle className="text-2xl">{burgerBase.name}</CardTitle>
                <p className="text-muted-foreground">Personalizado</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Selected ingredients summary */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Seus ingredientes:</h4>
                  <div className="space-y-1 max-h-40 overflow-y-auto">
                    {selectedIngredients.map((category) =>
                      category.items
                        .filter((item) => item.quantity > 0)
                        .map((item) => (
                          <div key={`${category.category}-${item.name}`} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              {item.quantity > 1 ? `${item.quantity}x ` : ""}{item.name}
                            </span>
                            <span className="text-foreground">
                              {item.price > 0 ? `+R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}` : 
                               item.price < 0 ? `-R$ ${Math.abs(item.price * item.quantity).toFixed(2).replace('.', ',')}` : 
                               'Grátis'}
                            </span>
                          </div>
                        ))
                    )}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-primary">
                      R$ {calculateTotal().toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  
                  <Button variant="cta" size="lg" className="w-full">
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ingredients Selection */}
          <div className="lg:col-span-2 space-y-6">
            {selectedIngredients.map((category, categoryIndex) => (
              <Card key={category.category} className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>{category.category}</span>
                    <Badge variant="outline" className="ml-auto">
                      {category.items.filter(item => item.quantity > 0).length} selecionados
                    </Badge>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={item.name}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                          item.quantity > 0
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {item.quantity > 0 && (
                              <CheckCircle className="h-5 w-5 text-primary" />
                            )}
                            <span className="font-medium text-foreground">{item.name}</span>
                          </div>
                          
                          <span className="text-sm font-semibold text-primary">
                            {item.price > 0 ? `+R$ ${item.price.toFixed(2).replace('.', ',')}` : 
                             item.price < 0 ? `-R$ ${Math.abs(item.price).toFixed(2).replace('.', ',')}` : 
                             'Grátis'}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateIngredient(categoryIndex, itemIndex, item.quantity - 1)}
                            disabled={item.quantity === 0}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          
                          <span className="font-semibold text-lg min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateIngredient(categoryIndex, itemIndex, item.quantity + 1)}
                            disabled={item.quantity >= 5}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;