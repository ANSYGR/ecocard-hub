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

        {/* Sponsor Packages */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Välj din sponsornivå</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alla paket ger er synlighet, hållbarhetsprofil och möjlighet att stärka civilsamhället
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
              <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] border-2">
                <CardHeader>
                  <div className="text-4xl mb-4">🌱</div>
                  <CardTitle className="text-2xl">Grön Partner</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary mt-2">
                    Från 5 000 kr/månad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Logotyp på 500 kort per månad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Synlighet på vår hemsida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Månatlig impact-rapport</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-[var(--shadow-hover)] border-2 border-primary relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Populärast
                </div>
                <CardHeader>
                  <div className="text-4xl mb-4">🌿</div>
                  <CardTitle className="text-2xl">Hållbarhetspartner</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary mt-2">
                    Från 12 000 kr/månad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Logotyp på 1 200 kort per månad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>QR-länk direkt till er hemsida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Egen sektion på hemsidan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Månatlig impact-rapport + analys</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] border-2">
                <CardHeader>
                  <div className="text-4xl mb-4">🌳</div>
                  <CardTitle className="text-2xl">Huvudpartner</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary mt-2">
                    Från 25 000 kr/månad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Logotyp på 3 000+ kort per månad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Egen kampanjsida + QR-länk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Social media-taggar & omnämnanden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Kvartalsvis strategi- & impact-rapport</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">Fördelar med att bli sponsor</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <Card className="shadow-[var(--shadow-soft)]">
                <CardHeader>
                  <CardTitle className="text-lg">Synlighet & Profil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Er logotyp syns på tusentals kort som delas ut på evenemang och manifestationer över hela landet.</p>
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
                  <p className="text-muted-foreground">Ge föreningar med begränsade resurser möjlighet att nå ut. Bidra till yttrandefrihet och delaktighet.</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold text-center mb-4">Våra Nuvarande Sponsorer</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Företag som visar vägen mot ett mer hållbart samhälle
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

        {/* Case Example */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Exempel från verkligheten</h3>
            <Card className="max-w-3xl mx-auto shadow-[var(--shadow-soft)]">
              <CardHeader>
                <CardTitle className="text-xl">GreenTech Solutions – En Framgångshistoria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Utmaning:</strong> GreenTech ville nå ut till miljömedvetna målgrupper och visa sitt hållbarhetsengagemang på ett konkret sätt.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Lösning:</strong> Som Hållbarhetspartner sponsrade GreenTech 1 200 EcoCard-kort per månad till lokala klimatorganisationer och kulturföreningar.
                </p>
                <p className="text-muted-foreground">
                  <strong>Resultat:</strong> Över 15 000 personer nåddes på 3 månader. GreenTechs varumärke blev synonymt med hållbar aktivism, och de fick 40% ökning i webbtrafikökning genom QR-länkarna på korten.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Redo att göra skillnad?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Boka ett kostnadsfritt möte för att diskutera vilket sponsorpaket som passar er bäst
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
