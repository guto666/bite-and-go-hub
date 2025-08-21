import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Users, FileText, BarChart3, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Agendamento", href: "#agendamento", icon: Calendar },
    { name: "Pacientes", href: "#pacientes", icon: Users },
    { name: "Prontuários", href: "#prontuarios", icon: FileText },
    { name: "Relatórios", href: "#relatorios", icon: BarChart3 },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-hero p-2 rounded-lg shadow-glow">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-montserrat">DentalCare Pro</h1>
              <p className="text-xs text-muted-foreground">Gestão Odontológica</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-3 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </a>
                );
              })}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;