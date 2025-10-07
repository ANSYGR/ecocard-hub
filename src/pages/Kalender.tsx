import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, MapPin, Users } from "lucide-react";
import eventGarden from "@/assets/event-garden.jpg";
import eventFestival from "@/assets/event-festival.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";
import eventSports from "@/assets/event-sports.jpg";
import eventCulture from "@/assets/event-culture.jpg";
import eventFair from "@/assets/event-fair.jpg";

const Kalender = () => {
  const events = [
    {
      id: 1,
      date: "15 Apr",
      eventName: "Gemensam trädgårdsdag",
      organization: "Stadsodling Stockholm",
      location: "Tantolunden, Stockholm",
      participants: 120,
      category: "Hållbarhet",
      image: eventGarden,
    },
    {
      id: 2,
      date: "22 Apr",
      eventName: "Mångkulturell Festival",
      organization: "Kulturföreningen Mosaik",
      location: "Rålambshovsparken, Stockholm",
      participants: 800,
      category: "Kultur",
      image: eventFestival,
    },
    {
      id: 3,
      date: "1 Maj",
      eventName: "Workshop: Hållbart Liv",
      organization: "EkoLiv Sverige",
      location: "Kulturhuset Stadsteatern, Stockholm",
      participants: 85,
      category: "Utbildning",
      image: eventWorkshop,
    },
    {
      id: 4,
      date: "8 Maj",
      eventName: "Familjesportdag",
      organization: "Idrottsföreningen Together",
      location: "Gärdet, Stockholm",
      participants: 250,
      category: "Idrott",
      image: eventSports,
    },
    {
      id: 5,
      date: "15 Maj",
      eventName: "Studenternas Kulturkväll",
      organization: "Studentkåren Kultur",
      location: "Medborgarhuset, Stockholm",
      participants: 150,
      category: "Student",
      image: eventCulture,
    },
    {
      id: 6,
      date: "20 Maj",
      eventName: "Hållbarhetsmässa",
      organization: "Grön Framtid Nätverket",
      location: "Stockholmsmässan, Älvsjö",
      participants: 1200,
      category: "Mässa",
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
            <h1 className="text-5xl font-bold mb-6">Evenemangskalender</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kultur, hållbarhet, idrott och inkludering – upptäck vad som händer
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
                  className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] overflow-hidden"
                >
                  <CardHeader className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center gap-0">
                      <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-32 relative">
                        <img 
                          src={event.image} 
                          alt={event.eventName} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-card/95 backdrop-blur-sm rounded-lg p-2 flex flex-col items-center justify-center min-w-[60px]">
                          <div className="text-2xl font-bold text-primary">{event.date.split(' ')[0]}</div>
                          <div className="text-xs text-muted-foreground">{event.date.split(' ')[1]}</div>
                        </div>
                      </div>
                      
                      <div className="flex-1 p-6">
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
