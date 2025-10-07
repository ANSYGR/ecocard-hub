import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import eventGarden from "@/assets/event-garden.jpg";
import eventFestival from "@/assets/event-festival.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";
import eventSports from "@/assets/event-sports.jpg";
import eventCulture from "@/assets/event-culture.jpg";
import eventFair from "@/assets/event-fair.jpg";

const Organisationer = () => {
  const events = [
    {
      id: 1,
      organization: "Stadsodling Stockholm",
      eventName: "Gemensam trädgårdsdag",
      date: "15 April 2025",
      location: "Tantolunden, Stockholm",
      participants: 120,
      description: "Kom och var med när vi planterar växter och odlar tillsammans! En hållbar aktivitet för alla åldrar där vi lär oss om ekologisk odling.",
      tags: ["Hållbarhet", "Odling", "Gemenskap"],
      image: eventGarden,
    },
    {
      id: 2,
      organization: "Kulturföreningen Mosaik",
      eventName: "Mångkulturell Festival",
      date: "22 April 2025",
      location: "Rålambshovsparken, Stockholm",
      participants: 800,
      description: "En färgstark fest där olika kulturer möts genom mat, musik och konst. Fira mångfald och inkludering tillsammans med oss!",
      tags: ["Kultur", "Inkludering", "Festival"],
      image: eventFestival,
    },
    {
      id: 3,
      organization: "EkoLiv Sverige",
      eventName: "Workshop: Hållbart Liv",
      date: "1 Maj 2025",
      location: "Kulturhuset Stadsteatern, Stockholm",
      participants: 85,
      description: "Lär dig praktiska tips för ett mer hållbart liv! Vi går igenom återvinning, miljövänliga alternativ och hur små val gör stor skillnad.",
      tags: ["Utbildning", "Hållbarhet", "Livsstil"],
      image: eventWorkshop,
    },
    {
      id: 4,
      organization: "Idrottsföreningen Together",
      eventName: "Familjesportdag",
      date: "8 Maj 2025",
      location: "Gärdet, Stockholm",
      participants: 250,
      description: "Sport och glädje för hela familjen! Inkluderande aktiviteter där alla kan vara med, oavsett ålder eller förmåga.",
      tags: ["Idrott", "Familj", "Inkludering"],
      image: eventSports,
    },
    {
      id: 5,
      organization: "Studentkåren Kultur",
      eventName: "Studenternas Kulturkväll",
      date: "15 Maj 2025",
      location: "Medborgarhuset, Stockholm",
      participants: 150,
      description: "En kväll fylld av musik, poesi och kreativitet. Studenter från olika bakgrunder delar sina kulturella uttryck.",
      tags: ["Kultur", "Student", "Musik"],
      image: eventCulture,
    },
    {
      id: 6,
      organization: "Grön Framtid Nätverket",
      eventName: "Hållbarhetsmässa",
      date: "20 Maj 2025",
      location: "Stockholmsmässan, Älvsjö",
      participants: 1200,
      description: "Sveriges största hållbarhetsmässa! Träffa organisationer, företag och eldsjälar som arbetar för en grönare framtid.",
      tags: ["Hållbarhet", "Mässa", "Nätverk"],
      image: eventFair,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">För Föreningar & Organisationer</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nå ut med ert budskap på ett hållbart och kostnadseffektivt sätt – tillgängligt för alla genom sponsorstöd
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Varför välja EcoCard?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
                <CardHeader>
                  <CardTitle className="text-lg">Kostnadseffektivt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Tack vare våra sponsorer håller vi priserna låga eller gratis, så även föreningar med begränsade resurser kan delta.</p>
                  <p className="text-sm font-semibold text-primary">Från 0-300 kr för 100 kort</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
                <CardHeader>
                  <CardTitle className="text-lg">Miljövänligt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Kort tryckta på återvunnet papper istället för engångsflyblad. Mindre avfall och klimatpåverkan.</p>
                  <p className="text-sm font-semibold text-primary">70% mindre CO₂ än traditionella flygblad</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
                <CardHeader>
                  <CardTitle className="text-lg">Professionellt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Högkvalitativa kort med QR-koder och tydlig design som gör det enkelt för människor att ta del av er information.</p>
                  <p className="text-sm font-semibold text-primary">Design & tryck ingår</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold text-center mb-8">Aktuella Evenemang & Kampanjer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event) => (
                <Card 
                  key={event.id} 
                  className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] overflow-hidden"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.eventName} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{event.organization}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{event.eventName}</CardTitle>
                    <CardDescription className="mt-2">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Redo att nå ut?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Oavsett om ni planerar kultur-, idrott- eller miljöevenemang - vi hjälper er att sprida ert budskap hållbart och kostnadseffektivt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/kontakt">Beställ kort nu</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/kontakt">Räkna ut din klimatbesparing</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Organisationer;
