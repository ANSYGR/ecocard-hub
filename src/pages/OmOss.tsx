import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, Heart } from "lucide-react";

const OmOss = () => {
  const values = [
    {
      icon: Target,
      title: "Ekologisk Hållbarhet",
      description: "Kort tryckta på återvunnet papper minskar avfall, resursförbrukning och klimatpåverkan. Ett konkret alternativ till flygblad.",
    },
    {
      icon: Users,
      title: "Social Samhörighet",
      description: "Vi främjar synlighet, yttrandefrihet och delaktighet. Ett verktyg för engagemang som stärker civilsamhället och inkludering.",
    },
    {
      icon: Lightbulb,
      title: "Sponsormodell",
      description: "Företag finansierar korten genom att få sin logotyp synlig. Detta gör produkten tillgänglig även för organisationer med begränsade resurser.",
    },
    {
      icon: Heart,
      title: "Vår Målgrupp",
      description: "Föreningar, ideella organisationer, studentföreningar, fackförbund och arrangörer av kultur- och klimatevenemang som vill nå ut hållbart.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Om EcoCard UF</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vi förenar miljöhänsyn med samhällsnytta - för ett grönare och mer inkluderande samhälle
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Vår Affärsidé</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  EcoCard UF erbjuder ett ekologiskt hållbart och kostnadseffektivt sätt för föreningar, organisationer 
                  och evenemangsarrangörer att sprida information. Vårt mål är att bidra till social hållbarhet och 
                  samhörighet i samhället genom att främja synlighet för olika röster och initiativ.
                </p>
                <p>
                  Detta gör vi på ett ekologiskt hållbart sätt genom att producera våra broschyrer av återvunnet papper, 
                  vilket minskar klimatpåverkan. Genom att ersätta traditionella flygblad minskar vi avfall och 
                  resursförbrukning samtidigt som vi skapar en plattform för delaktighet och engagemang.
                </p>
                <p>
                  En viktig del av vår modell är våra sponsorpartnerskap. Företag som vill profilera sig inom hållbarhet 
                  kan stötta EcoCard och få sin logotyp tryckt på korten. På så vis subventioneras kostnaden för föreningar, 
                  vilket gör produkten tillgänglig även för organisationer med begränsade resurser.
                </p>
                <p>
                  Vår långsiktiga vision är att bygga en rörelse som bidrar till ett grönare, mer inkluderande samhälle. 
                  Genom att förena ekologisk och social hållbarhet visar vi att små, smarta innovationer kan skapa stora 
                  förändringar – för både miljön och samhället.
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
              <h2 className="text-3xl font-bold mb-6">Teamet bakom EcoCard UF</h2>
              <p className="text-muted-foreground mb-8">
                Vi är ett ungt, engagerat UF-företag som tror på att förena affärsmässighet med samhällsnytta. 
                Genom kreativitet och engagemang bygger vi en plattform som gör skillnad för både miljön och samhället.
              </p>
              <p className="text-muted-foreground">
                Med hjälp av sponsorer och föreningar vill vi skapa en rörelse för ett grönare, mer inkluderande samhälle 
                där alla får möjlighet att göra sin röst hörd.
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
