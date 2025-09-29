import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, Heart } from "lucide-react";

const OmOss = () => {
  const values = [
    {
      icon: Target,
      title: "Vår Mission",
      description: "Att skapa en plattform där sponsorer, organisationer och aktivister kan samarbeta för en hållbar framtid.",
    },
    {
      icon: Users,
      title: "Samarbete",
      description: "Vi tror på kraften i gemenskap och samverkan mellan olika aktörer i samhället.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Genom smarta digitala lösningar gör vi det enklare att engagera sig i miljöfrågor.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Vi brinner för miljön och arbetar varje dag för att göra skillnad, både stort och smått.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Om EcoCard</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vi bygger broar mellan människor som vill göra skillnad
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Vår Historia</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  EcoCard grundades 2024 med en enkel men kraftfull idé: att göra det enklare för människor att 
                  upptäcka och engagera sig i miljöinitiativ i sin närhet.
                </p>
                <p>
                  Vi såg att det fanns många engagerade organisationer och aktivister som gjorde fantastiskt arbete, 
                  men som hade svårt att nå ut till en bredare publik. Samtidigt fanns det företag som ville stödja 
                  miljöarbete men saknade rätt plattform.
                </p>
                <p>
                  Genom att kombinera QR-teknologi med en digital plattform har vi skapat en lösning som gynnar alla: 
                  organisationer får synlighet, företag kan visa sitt engagemang, och människor får enkelt tillgång 
                  till information om hur de kan göra skillnad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Våra Värderingar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index}
                    className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Teamet</h2>
              <p className="text-muted-foreground mb-8">
                Vi är ett dedikerat team av utvecklare, designers och miljöentusiaster som arbetar för 
                att göra EcoCard till den bästa plattformen för miljöengagemang i Sverige.
              </p>
              <p className="text-muted-foreground">
                Tillsammans har vi bred erfarenhet från tech, hållbarhet och community building, vilket 
                gör att vi kan skapa lösningar som verkligen fungerar för våra användare.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OmOss;
