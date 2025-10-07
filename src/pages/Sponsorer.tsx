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
      description: "Ledande inom hållbar teknologi och förnybar energi. Vi stödjer civilsamhället genom EcoCard.",
      website: "https://greentech.se",
      logo: "🌱",
      contribution: "Sponsrar 500 informationskort per månad",
    },
    {
      id: 2,
      name: "EkoBank",
      description: "Sveriges första helt klimatneutrala bank. Vi tror på ett starkare civilsamhälle.",
      website: "https://ekobank.se",
      logo: "🏦",
      contribution: "Sponsrar 1000 informationskort per månad",
    },
    {
      id: 3,
      name: "NatureFirst Transport",
      description: "Eldrivna transporter och logistiklösningar. Vi stödjer demokrati och hållbarhet.",
      website: "https://naturefirst.se",
      logo: "🚛",
      contribution: "Sponsrar 300 informationskort per månad",
    },
    {
      id: 4,
      name: "Circular Fashion",
      description: "Mode utan kompromisser. Vi vill stärka både miljö och demokrati.",
      website: "https://circularfashion.se",
      logo: "👔",
      contribution: "Sponsrar 400 informationskort per månad",
    },
    {
      id: 5,
      name: "Solar Power AB",
      description: "Solenergilösningar för hem och företag. Vi tror på lokal organisering.",
      website: "https://solarpower.se",
      logo: "☀️",
      contribution: "Sponsrar 600 informationskort per månad",
    },
    {
      id: 6,
      name: "BioDynamics",
      description: "Ekologisk matproduktion i stor skala. Från jord till bord med omtanke och respekt.",
      website: "https://biodynamics.se",
      logo: "🌾",
      contribution: "Sponsrar 700 informationskort per månad",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Bli Sponsor</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stöd civilsamhället och visa ert engagemang för hållbarhet
            </p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Varför bli sponsor?</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ge er synlighet, visa ert hållbarhetsengagemang och stärk civilsamhället
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <Card className="shadow-[var(--shadow-soft)]">
                <CardHeader>
                  <CardTitle className="text-lg">Synlighet & Profil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Er logotyp syns på tusentals kort som delas ut på evenemang över hela landet. Nå ut till engagerade människor.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-[var(--shadow-soft)]">
                <CardHeader>
                  <CardTitle className="text-lg">Hållbarhetsprofil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Associera ert varumärke med ekologisk och social hållbarhet. Visa att ni tar samhällsansvar på riktigt.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-[var(--shadow-soft)]">
                <CardHeader>
                  <CardTitle className="text-lg">Stärk Civilsamhället</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ge föreningar med begränsade resurser möjlighet att nå ut. Bidra till samhörighet och delaktighet.</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold text-center mb-4">Exempel på Sponsorsamarbeten</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Företag som bidrar till ett mer hållbart och inkluderande samhälle
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsors.map((sponsor) => (
                <Card 
                  key={sponsor.id} 
                  className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]"
                >
                  <CardHeader>
                    <div className="text-6xl mb-4">{sponsor.logo}</div>
                    <CardTitle>{sponsor.name}</CardTitle>
                    <CardDescription className="mb-2">{sponsor.description}</CardDescription>
                    <p className="text-sm text-primary font-medium">{sponsor.contribution}</p>
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

        {/* How it Works */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Hur fungerar sponsring?</h3>
            <Card className="max-w-3xl mx-auto shadow-[var(--shadow-soft)]">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Kontakta oss</h4>
                      <p className="text-muted-foreground">
                        Boka ett kostnadsfritt möte där vi diskuterar era mål och hur ett partnerskap skulle kunna se ut.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Anpassat erbjudande</h4>
                      <p className="text-muted-foreground">
                        Vi skapar ett sponsorpaket som passar er budget och era mål - ingen standardlösning, utan skräddarsytt för er.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Er logotyp sprids</h4>
                      <p className="text-muted-foreground">
                        Era kort trycks och delas ut på föreningsevenemang. Ni får löpande rapporter om er räckvidd och påverkan.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Redo att göra skillnad?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Kontakta oss för att diskutera hur vi kan skapa ett sponsorsamarbete som passar er
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/kontakt">Boka möte</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/kontakt">Beställ provkort</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsorer;
