import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Truck, Star, Phone } from "lucide-react";
import deliveryIcon from "@/assets/delivery-icon.jpg";

const deliveryZones = [
  { name: "Centro", time: "15-25 min", fee: 5.90, rating: 4.9 },
  { name: "Zona Norte", time: "20-30 min", fee: 7.90, rating: 4.8 },
  { name: "Zona Sul", time: "25-35 min", fee: 8.90, rating: 4.7 },
  { name: "Zona Oeste", time: "20-30 min", fee: 7.90, rating: 4.8 },
];

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                <span className="text-primary">Delivery</span> Rápido
              </h2>
              <p className="text-xl text-muted-foreground">
                Receba seu pedido quentinho em casa com nossa entrega expressa
              </p>
            </div>

            {/* Address Input */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Consulte sua região</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Digite seu CEP ou endereço" 
                    className="flex-1"
                  />
                  <Button variant="default">
                    Consultar
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Descubra o tempo de entrega e taxa para sua região
                </p>
              </CardContent>
            </Card>

            {/* Delivery Zones */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Áreas de entrega</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {deliveryZones.map((zone) => (
                  <Card key={zone.name} className="hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{zone.name}</h4>
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="text-muted-foreground">{zone.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{zone.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Truck className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">
                            Taxa: R$ {zone.fee.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="flex-1">
                <Truck className="h-5 w-5 mr-2" />
                Pedir Delivery
              </Button>
              <Button variant="outline" size="xl" className="flex-1">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">15min</div>
                <p className="text-sm text-muted-foreground">Preparo médio</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">4.9⭐</div>
                <p className="text-sm text-muted-foreground">Nota delivery</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">99%</div>
                <p className="text-sm text-muted-foreground">No prazo</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={deliveryIcon}
                alt="Entrega rápida de hambúrgueres"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500"
              />
            </div>
            
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-10 animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;