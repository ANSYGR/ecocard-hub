import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Leaf, HandHeart, Network } from "lucide-react";
import heroCommunity from "@/assets/hero-community.jpg";
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroCommunity})`,
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

      {/* Storytelling Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rotate-45 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            När en förening vill nå ut – och ett företag vill bidra
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            EcoCard skapar en grönare dialog. Tillsammans bygger vi en rörelse som stärker civilsamhället och minskar klimatpåverkan – ett kort i taget.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rotate-12 blur-2xl"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-accent/5 -rotate-12 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4">Så funkar det</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Från idé till handling – en enkel process för hållbar information
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 max-w-5xl mx-auto">
            <div className="text-center group hover-scale">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-[var(--transition-smooth)]">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Föreningen skickar in sitt budskap</h3>
              <p className="text-muted-foreground">
                Ni delar ert evenemang, kampanj eller budskap med oss – vi tar hand om resten.
              </p>
            </div>
            
            <div className="text-center group hover-scale">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-[var(--transition-smooth)]">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Vi designar och trycker på återvunnet papper</h3>
              <p className="text-muted-foreground">
                Professionella kort med QR-koder, tryckta miljövänligt med sponsorlogotyper.
              </p>
            </div>
            
            <div className="text-center group hover-scale">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-[var(--transition-smooth)]">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Tillsammans sprider vi hållbar information</h3>
              <p className="text-muted-foreground">
                Sponsorer syns på baksidan – och ert budskap når ut utan att belasta miljön.
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-4">Dubbel Hållbarhet</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Vi kombinerar ekologisk ansvar med social samhörighet
          </p>
          
          <div className="relative">
            {/* Decorative geometric shapes */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-40 -right-10 w-60 h-60 bg-accent/5 rotate-45 blur-2xl"></div>
            <div className="absolute -bottom-10 left-1/3 w-32 h-32 bg-primary/10 rotate-12 rounded-lg blur-xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] hover:-translate-y-2 border-l-4 border-l-primary/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform">
                    <Leaf className="h-8 w-8 text-primary" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    Ekologiskt Hållbart
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Kort tryckta på återvunnet eller biologiskt nedbrytbart papper. Minskar avfall, resursförbrukning och klimatpåverkan jämfört med traditionella flygblad.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] hover:-translate-y-2 border-l-4 border-l-accent/50 relative overflow-hidden group md:-rotate-1 hover:rotate-0">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full translate-y-20 -translate-x-20 group-hover:scale-150 transition-transform duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center -rotate-3 group-hover:-rotate-6 transition-transform">
                    <HandHeart className="h-8 w-8 text-accent" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    Tillgängligt för Alla
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Sponsorer finansierar korten genom sin logotyp, vilket gör produkten tillgänglig även för föreningar med begränsade resurser. Dubbel nytta för alla parter.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] hover:-translate-y-2 border-l-4 border-l-primary/50 relative overflow-hidden group md:rotate-1 hover:rotate-0">
                <div className="absolute top-1/2 right-0 w-36 h-36 bg-primary/5 rotate-45 translate-x-20 group-hover:scale-150 transition-transform duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rotate-2 group-hover:rotate-12 transition-transform">
                    <Network className="h-8 w-8 text-primary" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    Social Samhörighet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Främjar yttrandefrihet, synlighet och delaktighet. Ett verktyg för engagemang som stärker civilsamhället och gör det enklare för fler att delta.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-accent/10 rotate-45 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-accent/5 -rotate-12 blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4">Vår Påverkan Hittills</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tillsammans skapar vi verklig förändring – mätbar och märkbar
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-primary mb-2">3 500+</div>
                <p className="text-lg font-medium mb-2">Kort tryckta</p>
                <p className="text-sm text-muted-foreground">på återvunnet material</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-primary mb-2">120+</div>
                <p className="text-lg font-medium mb-2">Föreningar</p>
                <p className="text-sm text-muted-foreground">har nått ut till nya medlemmar</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-primary mb-2">25+</div>
                <p className="text-lg font-medium mb-2">Sponsorer</p>
                <p className="text-sm text-muted-foreground">profilerar sig inom hållbarhet</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rotate-12 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 -rotate-6 blur-2xl"></div>
        <div className="absolute top-1/2 right-0 w-56 h-56 bg-primary/5 rounded-full blur-xl translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4">Röster från verkligheten</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hör vad våra föreningar och sponsorer säger
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardHeader>
                <CardDescription className="text-lg italic mb-4">
                  "Tack vare EcoCard kunde vi sprida vårt budskap utan att belasta miljön. Sponsorstödet gjorde det möjligt trots vår begränsade budget."
                </CardDescription>
                <CardTitle className="text-base font-normal">
                  – Klara Svensson, Klimatrörelsen Nu
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardHeader>
                <CardDescription className="text-lg italic mb-4">
                  "Som sponsor får vi visa vårt hållbarhetsengagemang där det verkligen räknas – ute i samhället, bland människor som bryr sig."
                </CardDescription>
                <CardTitle className="text-base font-normal">
                  – Maria Andersson, GreenTech Solutions
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardHeader>
                <CardDescription className="text-lg italic mb-4">
                  "Professionella kort som folk faktiskt tar med sig hem. QR-koden gjorde det enkelt att nå fler efter evenemanget."
                </CardDescription>
                <CardTitle className="text-base font-normal">
                  – David Larsson, Stockholm Pride
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardHeader>
                <CardDescription className="text-lg italic mb-4">
                  "EcoCard hjälper oss att kombinera affär med samhällsansvar på ett konkret sätt. Det är win-win för alla parter."
                </CardDescription>
                <CardTitle className="text-base font-normal">
                  – Johan Berg, EkoBank
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rotate-45 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 -rotate-12 blur-xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Bygg en rörelse med oss</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            För föreningar som vill nå ut, eller företag som vill göra skillnad - tillsammans skapar vi ett grönare och mer inkluderande samhälle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/kontakt">
                Kontakta oss idag <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/organisationer">
                Se exempel
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
