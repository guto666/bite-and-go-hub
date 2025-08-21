import { Heart, Mail, Phone, MapPin, Shield, Award, Clock } from "lucide-react";

const Footer = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Dados protegidos com criptografia avançada"
    },
    {
      icon: Award,
      title: "Certificado",
      description: "Conforme normas de proteção de dados médicos"
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Atendimento disponível quando você precisar"
    }
  ];

  const links = {
    produto: [
      { name: "Agendamento Online", href: "#agendamento" },
      { name: "Gestão de Pacientes", href: "#pacientes" },
      { name: "Prontuários Digitais", href: "#prontuarios" },
      { name: "Relatórios", href: "#relatorios" }
    ],
    empresa: [
      { name: "Sobre Nós", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Carreiras", href: "#" },
      { name: "Contato", href: "#" }
    ],
    suporte: [
      { name: "Central de Ajuda", href: "#" },
      { name: "Documentação", href: "#" },
      { name: "Status do Sistema", href: "#" },
      { name: "Privacidade", href: "#" }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Features Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-lg shadow-glow">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground font-montserrat">DentalCare Pro</h3>
                <p className="text-sm text-muted-foreground">Gestão Odontológica</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              A solução completa para modernizar seu consultório odontológico com agendamento online, 
              gestão de pacientes e relatórios inteligentes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(11) 3000-1234</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contato@dentalcarepro.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
            <ul className="space-y-2">
              {links.produto.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              {links.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2">
              {links.suporte.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 DentalCare Pro. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;