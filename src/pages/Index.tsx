import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SchedulingSection from "@/components/SchedulingSection";
import PatientsSection from "@/components/PatientsSection";
import ReportsSection from "@/components/ReportsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SchedulingSection />
        <PatientsSection />
        <ReportsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;