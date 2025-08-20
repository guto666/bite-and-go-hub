import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-foreground">BurgerFlow</span>
            </div>
            
            <p className="text-muted-foreground">
              A plataforma completa para hamburguerias modernas. Cardápio digital, 
              personalização de lanches e delivery integrado.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Links Rápidos</h3>
            <nav className="space-y-3">
              <a href="#cardapio" className="block text-muted-foreground hover:text-primary transition-colors">
                Cardápio
              </a>
              <a href="#montar" className="block text-muted-foreground hover:text-primary transition-colors">
                Montar Lanche
              </a>
              <a href="#delivery" className="block text-muted-foreground hover:text-primary transition-colors">
                Delivery
              </a>
              <a href="#sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Rua das Hamburguerias, 123<br />
                  Centro - SP
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(11) 99999-9999</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contato@burgerflow.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Seg à Dom: 11h às 23h
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Newsletter</h3>
            <p className="text-muted-foreground">
              Receba ofertas exclusivas e novidades diretamente no seu email.
            </p>
            
            <div className="space-y-3">
              <Input 
                placeholder="Seu melhor email" 
                type="email"
              />
              <Button variant="default" className="w-full">
                Inscrever-se
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Ao se inscrever, você concorda em receber emails promocionais. 
              Cancele a qualquer momento.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 BurgerFlow. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;