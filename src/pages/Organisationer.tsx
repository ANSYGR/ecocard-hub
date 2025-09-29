import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

const Organisationer = () => {
  const events = [
    {
      id: 1,
      organization: "Klimataktivister Sverige",
      eventName: "Storstädning av Mälaren",
      date: "15 April 2025",
      location: "Mälaren, Stockholm",
      participants: 120,
      description: "Tillsammans städar vi Mälarens stränder och samlar in plast och skräp. Ta med egna handskar och påsar!",
      tags: ["Städning", "Vatten", "Community"],
    },
    {
      id: 2,
      organization: "GreenPeace Stockholm",
      eventName: "Klimatmanifestation Riksdagen",
      date: "22 April 2025",
      location: "Riksdagen, Stockholm",
      participants: 500,
      description: "Fredlig demonstration för snabbare klimatomställning och ambitiösare klimatmål.",
      tags: ["Demonstration", "Politik", "Klimat"],
    },
    {
      id: 3,
      organization: "Naturskyddsföreningen",
      eventName: "Trädplantering Hagaparken",
      date: "1 Maj 2025",
      location: "Hagaparken, Stockholm",
      participants: 80,
      description: "Plantera träd och återställ grönområden. Alla är välkomna, familjevänligt!",
      tags: ["Plantering", "Skog", "Familj"],
    },
    {
      id: 4,
      organization: "Ocean Warriors",
      eventName: "Strandstädning Östersjön",
      date: "8 Maj 2025",
      location: "Sandhamn, Stockholm",
      participants: 60,
      description: "Skydda vår Östersjö genom att samla skräp från stränder och dokumentera plastnedskräpning.",
      tags: ["Städning", "Ocean", "Dokumentation"],
    },
    {
      id: 5,
      organization: "Fridays for Future",
      eventName: "Klimatstrejk Sergels torg",
      date: "15 Maj 2025",
      location: "Sergels torg, Stockholm",
      participants: 1000,
      description: "Veckovis klimatstrejk för att uppmärksamma klimatkrisen. Tal, musik och gemenskap.",
      tags: ["Strejk", "Ungdom", "Klimat"],
    },
    {
      id: 6,
      organization: "Urban Gardening Collective",
      eventName: "Bygga Odlingslådor",
      date: "20 Maj 2025",
      location: "Rålambshovsparken, Stockholm",
      participants: 40,
      description: "Workshop för att bygga och installera odlingslådor i staden. Material tillhandahålls.",
      tags: ["Workshop", "Mat", "Urban"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Föreningar & Organisationer</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upptäck aktiva föreningar och deras evenemang - allt tack vare sponsrade EcoCard-kort
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event) => (
                <Card 
                  key={event.id} 
                  className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]"
                >
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

        {/* Info Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Har din förening ett evenemang?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Få hållbara informationskort sponsrade av företag. Sprida ert budskap kostnadseffektivt och miljövänligt!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Organisationer;
