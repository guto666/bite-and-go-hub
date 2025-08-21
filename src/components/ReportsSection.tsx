import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar, 
  DollarSign, 
  Clock,
  Download,
  Filter
} from "lucide-react";

const ReportsSection = () => {
  const stats = [
    {
      title: "Consultas do Mês",
      value: "248",
      change: "+12%",
      trend: "up",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Receita Mensal",
      value: "R$ 18.450",
      change: "+8%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Novos Pacientes",
      value: "32",
      change: "+25%",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Taxa de Ocupação",
      value: "87%",
      change: "+3%",
      trend: "up",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const recentAppointments = [
    {
      patient: "Maria Silva Santos",
      service: "Limpeza Dental",
      time: "09:00",
      status: "Concluída",
      value: "R$ 80"
    },
    {
      patient: "João Carlos Oliveira",
      service: "Tratamento de Canal",
      time: "10:30",
      status: "Em Andamento",
      value: "R$ 300"
    },
    {
      patient: "Ana Paula Costa",
      service: "Consulta Ortodôntica",
      time: "14:00",
      status: "Agendada",
      value: "R$ 150"
    },
    {
      patient: "Pedro Henrique Lima",
      service: "Implante Dental",
      time: "15:30",
      status: "Agendada",
      value: "R$ 800"
    }
  ];

  const topServices = [
    { name: "Limpeza Dental", count: 45, percentage: 35 },
    { name: "Obturação", count: 32, percentage: 25 },
    { name: "Consulta Ortodôntica", count: 28, percentage: 22 },
    { name: "Tratamento de Canal", count: 18, percentage: 14 },
    { name: "Implante Dental", count: 5, percentage: 4 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluída":
        return "bg-green-100 text-green-800";
      case "Em Andamento":
        return "bg-blue-100 text-blue-800";
      case "Agendada":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="relatorios" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Relatórios e Analytics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe o desempenho do seu consultório com relatórios detalhados e insights valiosos.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-card shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                        </div>
                      </div>
                      <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                        <Icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Appointments */}
            <div className="lg:col-span-2">
              <Card className="bg-card shadow-elegant">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      Consultas de Hoje
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4" />
                        Filtrar
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                        Exportar
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="space-y-2">
                    {recentAppointments.map((appointment, index) => (
                      <div key={index} className="p-4 border-b border-border hover:bg-secondary/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-foreground">{appointment.patient}</h3>
                              <Badge className={getStatusColor(appointment.status)}>
                                {appointment.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <span>{appointment.service} • {appointment.time}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-foreground">{appointment.value}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Services */}
            <div>
              <Card className="bg-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    Serviços Mais Realizados
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {topServices.map((service, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{service.name}</span>
                        <span className="text-sm text-muted-foreground">{service.count}</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${service.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Relatórios Personalizados</h3>
                  <p className="text-primary-foreground/90">
                    Gere relatórios detalhados por período, serviço ou paciente para análises mais profundas.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Gerar Relatório
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar Dados
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;