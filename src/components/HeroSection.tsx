import { Button } from "@/components/ui/button";
import { Calendar, Clock, Shield, Star, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+Cjwvc3ZnPgo=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-primary-foreground mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Sistema Seguro e Confiável</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-montserrat leading-tight">
              Modernize seu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
                Consultório Odontológico
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Sistema completo de gestão com agendamento online, prontuários digitais e relatórios inteligentes. 
              Simplifique sua rotina e melhore o atendimento aos pacientes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="cta" size="xl" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
                <Calendar className="h-5 w-5" />
                Agendar Consulta
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                Ver Demonstração
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-1">5000+</div>
                <div className="text-sm text-primary-foreground/80">Consultas Agendadas</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-1">98%</div>
                <div className="text-sm text-primary-foreground/80">Satisfação</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-1">24/7</div>
                <div className="text-sm text-primary-foreground/80">Suporte Online</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Main Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Próxima Consulta</h3>
                    <p className="text-sm text-muted-foreground">Dr. Silva - Ortodontia</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Hoje, 14:30</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Button size="sm" variant="default">
                    Ver Detalhes
                  </Button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-glow animate-bounce-slow">
                <Shield className="h-6 w-6" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-3 rounded-full shadow-elegant animate-pulse">
                <Heart className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;