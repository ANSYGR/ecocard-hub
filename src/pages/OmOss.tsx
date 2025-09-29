import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, Heart } from "lucide-react";

const OmOss = () => {
  const values = [
    {
      icon: Target,
      title: "Dubbel Hållbarhet",
      description: "Vi kombinerar ekologisk hållbarhet (minskad resursförbrukning) med social hållbarhet (stärkt demokrati och delaktighet).",
    },
    {
      icon: Users,
      title: "Målgrupper",
      description: "Vi riktar oss till föreningar, ideella organisationer, studentföreningar, fackförbund och evenemangsarrangörer - samt företag som vill sponsra.",
    },
    {
      icon: Lightbulb,
      title: "Sponsormodell",
      description: "Företag finansierar korten genom att få sin logotyp synlig. Detta gör produkten tillgänglig även för organisationer med begränsade resurser.",
    },
    {
      icon: Heart,
      title: "Hållbart Material",
      description: "Alla kort trycks på återvunnet eller biologiskt nedbrytbart material - ett konkret alternativ till flygblad och broschyrer.",
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
              Vi bygger broer mellan företag och civilsamhälle - för både miljön och demokratin
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
                  EcoCard UF erbjuder ett hållbart och kostnadseffektivt sätt för föreningar, organisationer och 
                  evenemangsarrangörer att sprida information. Genom att ersätta traditionella flygblad och broschyrer 
                  med kort tryckta på återvunnet eller biologiskt nedbrytbart material bidrar vi till ekologisk hållbarhet.
                </p>
                <p>
                  Samtidigt stärker vi social hållbarhet genom att främja yttrandefrihet, delaktighet och synlighet för 
                  civilsamhället. Med stöd från sponsorer som får sin logotyp på korten kan vi hålla kostnaderna låga för 
                  föreningar och organisationer.
                </p>
                <p>
                  Vår långsiktiga vision är att bygga en rörelse som stärker demokratin och bidrar till ett grönare och 
                  mer inkluderande samhälle. Vi visar att små, smarta innovationer kan skapa stora förändringar - både 
                  för miljön och för demokratin.
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
                Genom kreativitet och engagemang bygger vi en plattform som gör skillnad.
              </p>
              <p className="text-muted-foreground">
                Med hjälp av sponsorer och föreningar vill vi skapa en rörelse för ett starkare civilsamhälle och 
                en hållbar framtid - både ekologiskt och demokratiskt.
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
