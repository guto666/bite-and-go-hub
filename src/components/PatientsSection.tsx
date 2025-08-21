import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Search, Plus, Eye, Edit, Calendar, Phone, Mail, MapPin } from "lucide-react";

const PatientsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const patients = [
    {
      id: 1,
      name: "Maria Silva Santos",
      email: "maria.silva@email.com",
      phone: "(11) 99999-1234",
      birthDate: "1985-03-15",
      address: "R. das Flores, 123 - Centro",
      lastVisit: "2024-01-15",
      nextAppointment: "2024-02-20",
      status: "Ativo",
      treatments: ["Limpeza", "Obturação"],
      notes: "Paciente regular, sem alergias conhecidas"
    },
    {
      id: 2,
      name: "João Carlos Oliveira",
      email: "joao.carlos@email.com",
      phone: "(11) 98888-5678",
      birthDate: "1978-08-22",
      address: "Av. Principal, 456 - Jardins",
      lastVisit: "2024-01-10",
      nextAppointment: "2024-02-25",
      status: "Ativo",
      treatments: ["Canal", "Coroa"],
      notes: "Alérgico a lidocaína"
    },
    {
      id: 3,
      name: "Ana Paula Costa",
      email: "ana.paula@email.com",
      phone: "(11) 97777-9012",
      birthDate: "1992-12-03",
      address: "R. Nova, 789 - Vila Nova",
      lastVisit: "2023-12-20",
      nextAppointment: null,
      status: "Inativo",
      treatments: ["Ortodontia"],
      notes: "Tratamento ortodôntico em andamento"
    },
    {
      id: 4,
      name: "Pedro Henrique Lima",
      email: "pedro.lima@email.com",
      phone: "(11) 96666-3456",
      birthDate: "1988-06-18",
      address: "R. do Sol, 321 - Bela Vista",
      lastVisit: "2024-01-18",
      nextAppointment: "2024-02-22",
      status: "Ativo",
      treatments: ["Implante", "Limpeza"],
      notes: "Paciente em recuperação pós-implante"
    },
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  const getStatusColor = (status: string) => {
    return status === "Ativo" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
  };

  return (
    <section id="pacientes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Gestão de Pacientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sistema completo para gerenciar informações, histórico e agendamentos dos seus pacientes.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Patients List */}
            <div className="lg:col-span-2">
              <Card className="bg-card shadow-elegant">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      Lista de Pacientes
                    </CardTitle>
                    <Button size="sm" className="gap-2">
                      <Plus className="h-4 w-4" />
                      Novo Paciente
                    </Button>
                  </div>
                  
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Buscar por nome, email ou telefone..."
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="space-y-2">
                    {filteredPatients.map((patient) => (
                      <div
                        key={patient.id}
                        className={`p-4 border-b border-border hover:bg-secondary/50 cursor-pointer transition-colors ${
                          selectedPatient?.id === patient.id ? "bg-primary/5 border-l-4 border-l-primary" : ""
                        }`}
                        onClick={() => setSelectedPatient(patient)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-foreground">{patient.name}</h3>
                              <Badge className={getStatusColor(patient.status)}>
                                {patient.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Phone className="h-3 w-3" />
                                  {patient.phone}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Mail className="h-3 w-3" />
                                  {patient.email}
                                </span>
                              </div>
                              <div className="flex items-center gap-4">
                                <span>Última consulta: {new Date(patient.lastVisit).toLocaleDateString('pt-BR')}</span>
                                {patient.nextAppointment && (
                                  <span className="text-primary">
                                    Próxima: {new Date(patient.nextAppointment).toLocaleDateString('pt-BR')}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Patient Details */}
            <div>
              {selectedPatient ? (
                <Card className="bg-card shadow-elegant sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Eye className="h-5 w-5 text-primary" />
                      </div>
                      Detalhes do Paciente
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Personal Info */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">{selectedPatient.name}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span className="text-muted-foreground">{selectedPatient.email}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span className="text-muted-foreground">{selectedPatient.phone}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span className="text-muted-foreground">{selectedPatient.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            Nascimento: {new Date(selectedPatient.birthDate).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Status</h4>
                      <Badge className={getStatusColor(selectedPatient.status)}>
                        {selectedPatient.status}
                      </Badge>
                    </div>

                    {/* Treatments */}
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Tratamentos</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedPatient.treatments.map((treatment: string, index: number) => (
                          <Badge key={index} variant="outline">
                            {treatment}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Observações</h4>
                      <p className="text-sm text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                        {selectedPatient.notes}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <Button className="w-full gap-2">
                        <Calendar className="h-4 w-4" />
                        Agendar Consulta
                      </Button>
                      <Button variant="outline" className="w-full gap-2">
                        <Edit className="h-4 w-4" />
                        Editar Paciente
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card shadow-elegant">
                  <CardContent className="p-8 text-center">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium text-foreground mb-2">Selecione um Paciente</h3>
                    <p className="text-sm text-muted-foreground">
                      Clique em um paciente da lista para ver os detalhes completos.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientsSection;