import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, QrCode, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-protest.jpg";
import qrIcon from "@/assets/qr-icon.jpg";
import communityIcon from "@/assets/community-icon.jpg";
import calendarIcon from "@/assets/calendar-icon.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Hållbar information för ett starkare civilsamhälle
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ersätt flygblad med miljövänliga kort tryckta på återvunnet papper. Sponsrade av företag som bryr sig – tillgängliga för alla föreningar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/organisationer">
                För Föreningar & Organisationer <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              <Link to="/sponsorer">
                Bli Sponsor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Dubbel Hållbarhet</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Vi kombinerar ekologisk ansvar med social samhörighet
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardHeader>
                <div className="w-20 h-20 mb-4 rounded-lg overflow-hidden">
                  <img src={qrIcon} alt="QR Kod" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5 text-primary" />
                  Ekologiskt Hållbart
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Kort tryckta på återvunnet eller biologiskt nedbrytbart papper. Minskar avfall, resursförbrukning och klimatpåverkan jämfört med traditionella flygblad.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardHeader>
                <div className="w-20 h-20 mb-4 rounded-lg overflow-hidden">
                  <img src={communityIcon} alt="Gemenskap" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Tillgängligt för Alla
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sponsorer finansierar korten genom sin logotyp, vilket gör produkten tillgänglig även för föreningar med begränsade resurser. Dubbel nytta för alla parter.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardHeader>
                <div className="w-20 h-20 mb-4 rounded-lg overflow-hidden">
                  <img src={calendarIcon} alt="Kalender" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Social Samhörighet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Främjar yttrandefrihet, synlighet och delaktighet. Ett verktyg för engagemang som stärker civilsamhället och gör det enklare för fler att delta.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bygg en rörelse med oss</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            För föreningar som vill nå ut, eller företag som vill göra skillnad - tillsammans skapar vi ett grönare och mer inkluderande samhälle
          </p>
          <Button size="lg" asChild>
            <Link to="/kontakt">
              Kontakta oss idag <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
