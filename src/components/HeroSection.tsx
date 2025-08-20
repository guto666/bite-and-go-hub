import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Truck, Star } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Seu <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Burguer</span> Perfeito
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Monte seu lanche ideal, faça seu pedido online e receba em casa com agilidade e qualidade incomparáveis.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="flex items-center space-x-1 text-primary mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-semibold">15min</span>
                </div>
                <p className="text-sm text-muted-foreground">Preparo rápido</p>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 text-primary mb-1">
                  <Truck className="h-4 w-4" />
                  <span className="font-semibold">30min</span>
                </div>
                <p className="text-sm text-muted-foreground">Delivery</p>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 text-primary mb-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground">Avaliação</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Fazer Pedido Agora
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Ver Cardápio
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-4 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">Mais de 10.000 clientes satisfeitos</p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-xs font-semibold text-primary-foreground"
                  >
                    {i}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-semibold">
                  +
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroBurger}
                alt="Hambúrguer gourmet delicioso"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105"
              />
            </div>
            
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 animate-pulse-glow"></div>
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;