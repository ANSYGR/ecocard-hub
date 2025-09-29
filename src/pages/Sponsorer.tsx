import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Sponsorer = () => {
  const sponsors = [
    {
      id: 1,
      name: "GreenTech Solutions",
      description: "Ledande inom hållbar teknologi och förnybar energi. Vi investerar i framtidens gröna lösningar.",
      website: "https://greentech.se",
      logo: "🌱",
    },
    {
      id: 2,
      name: "EkoBank",
      description: "Sveriges första helt klimatneutrala bank. Vi finansierar bara hållbara projekt.",
      website: "https://ekobank.se",
      logo: "🏦",
    },
    {
      id: 3,
      name: "NatureFirst Transport",
      description: "Eldrivna transporter och logistiklösningar för en renare framtid.",
      website: "https://naturefirst.se",
      logo: "🚛",
    },
    {
      id: 4,
      name: "Circular Fashion",
      description: "Mode utan kompromisser. 100% återvunna och återvinningsbara material.",
      website: "https://circularfashion.se",
      logo: "👔",
    },
    {
      id: 5,
      name: "Solar Power AB",
      description: "Solenergilösningar för hem och företag. Installationer över hela Sverige.",
      website: "https://solarpower.se",
      logo: "☀️",
    },
    {
      id: 6,
      name: "BioDynamics",
      description: "Ekologisk matproduktion i stor skala. Från jord till bord med omtanke.",
      website: "https://biodynamics.se",
      logo: "🌾",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Våra Sponsorer</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Företag som delar vår vision om en hållbar framtid och stödjer miljöinitiativ
            </p>
          </div>
        </section>

        {/* Sponsors Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsors.map((sponsor) => (
                <Card 
                  key={sponsor.id} 
                  className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]"
                >
                  <CardHeader>
                    <div className="text-6xl mb-4">{sponsor.logo}</div>
                    <CardTitle>{sponsor.name}</CardTitle>
                    <CardDescription>{sponsor.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                        Besök hemsida <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Vill ditt företag bli sponsor?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Kontakta oss för att diskutera hur ni kan stödja miljöinitiativ och få synlighet
            </p>
            <Button asChild>
              <a href="/kontakt">Kontakta oss</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsorer;
