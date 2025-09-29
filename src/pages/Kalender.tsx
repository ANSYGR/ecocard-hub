import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, MapPin, Users } from "lucide-react";

const Kalender = () => {
  const events = [
    {
      id: 1,
      date: "15 Apr",
      eventName: "Storstädning av Mälaren",
      organization: "Klimataktivister Sverige",
      location: "Mälaren, Stockholm",
      participants: 120,
      category: "Städning",
    },
    {
      id: 2,
      date: "22 Apr",
      eventName: "Klimatmanifestation Riksdagen",
      organization: "GreenPeace Stockholm",
      location: "Riksdagen, Stockholm",
      participants: 500,
      category: "Demonstration",
    },
    {
      id: 3,
      date: "1 Maj",
      eventName: "Trädplantering Hagaparken",
      organization: "Naturskyddsföreningen",
      location: "Hagaparken, Stockholm",
      participants: 80,
      category: "Plantering",
    },
    {
      id: 4,
      date: "8 Maj",
      eventName: "Strandstädning Östersjön",
      organization: "Ocean Warriors",
      location: "Sandhamn, Stockholm",
      participants: 60,
      category: "Städning",
    },
    {
      id: 5,
      date: "15 Maj",
      eventName: "Klimatstrejk Sergels torg",
      organization: "Fridays for Future",
      location: "Sergels torg, Stockholm",
      participants: 1000,
      category: "Strejk",
    },
    {
      id: 6,
      date: "20 Maj",
      eventName: "Bygga Odlingslådor",
      organization: "Urban Gardening Collective",
      location: "Rålambshovsparken, Stockholm",
      participants: 40,
      category: "Workshop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Evenemangskalender</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Se alla kommande miljöevenemang på ett ställe
            </p>
          </div>
        </section>

        {/* Calendar View */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">April - Maj 2025</h2>
              <p className="text-muted-foreground">Alla evenemang i Stockholm-regionen</p>
            </div>

            <div className="space-y-4">
              {events.map((event) => (
                <Card 
                  key={event.id}
                  className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-primary">{event.date.split(' ')[0]}</div>
                        <div className="text-sm text-muted-foreground">{event.date.split(' ')[1]}</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl">{event.eventName}</CardTitle>
                          <Badge variant="secondary">{event.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{event.organization}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{event.participants} deltagare</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Kartvy</h2>
            <Card className="h-96 flex items-center justify-center bg-muted/50">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Interaktiv karta kommer snart</p>
                <p className="text-sm text-muted-foreground mt-2">Här kan du se alla evenemang på en karta</p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kalender;
