import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, MapPin, Phone, CheckCircle } from "lucide-react";

const SchedulingSection = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");

  const services = [
    { id: "limpeza", name: "Limpeza Dental", duration: "30 min", price: "R$ 80" },
    { id: "canal", name: "Tratamento de Canal", duration: "90 min", price: "R$ 300" },
    { id: "ortodontia", name: "Consulta Ortodôntica", duration: "45 min", price: "R$ 150" },
    { id: "implante", name: "Avaliação para Implante", duration: "60 min", price: "R$ 200" },
    { id: "clareamento", name: "Clareamento Dental", duration: "60 min", price: "R$ 250" },
    { id: "emergencia", name: "Consulta de Emergência", duration: "30 min", price: "R$ 120" },
  ];

  const availableTimes = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0) { // Skip Sundays
        dates.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('pt-BR', { 
            weekday: 'short', 
            day: '2-digit', 
            month: 'short' 
          })
        });
      }
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  return (
    <section id="agendamento" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Agende sua Consulta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sistema de agendamento online rápido e prático. Escolha o melhor horário para você.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1: Choose Service */}
            <Card className="bg-card shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  1. Escolha o Serviço
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedService === service.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-foreground">{service.name}</h3>
                      {selectedService === service.id && (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </span>
                      <span className="font-medium text-primary">{service.price}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Step 2: Choose Date */}
            <Card className="bg-card shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  2. Escolha a Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {availableDates.map((dateItem) => (
                    <button
                      key={dateItem.date}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        selectedDate === dateItem.date
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                      onClick={() => setSelectedDate(dateItem.date)}
                    >
                      {dateItem.display}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Choose Time */}
            <Card className="bg-card shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  3. Escolha o Horário
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        selectedTime === time
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary & CTA */}
          {selectedService && selectedDate && selectedTime && (
            <Card className="mt-8 bg-gradient-primary text-primary-foreground shadow-glow">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Resumo do Agendamento</h3>
                    <div className="space-y-2 text-primary-foreground/90">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{services.find(s => s.id === selectedService)?.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(selectedDate).toLocaleDateString('pt-BR', { 
                          weekday: 'long', 
                          day: '2-digit', 
                          month: 'long' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{selectedTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Clínica Central - Centro</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <div className="mb-4">
                      <div className="text-2xl font-bold mb-1">
                        {services.find(s => s.id === selectedService)?.price}
                      </div>
                      <div className="text-sm text-primary-foreground/80">
                        Duração: {services.find(s => s.id === selectedService)?.duration}
                      </div>
                    </div>
                    
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full md:w-auto bg-white text-primary hover:bg-white/90"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Confirmar Agendamento
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;