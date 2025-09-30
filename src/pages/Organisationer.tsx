import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import eventPalestine from "@/assets/event-palestine.jpg";
import eventPride from "@/assets/event-pride.jpg";
import eventClimate from "@/assets/event-climate.jpg";
import eventRights from "@/assets/event-rights.jpg";
import eventStrike from "@/assets/event-strike.jpg";
import eventCampaign from "@/assets/event-campaign.jpg";

const Organisationer = () => {
  const events = [
    {
      id: 1,
      organization: "Palestina Solidaritet Sverige",
      eventName: "Manifestation för fred och rättvisa",
      date: "15 April 2025",
      location: "Sergels torg, Stockholm",
      participants: 800,
      description: "Fredlig demonstration för mänskliga rättigheter och internationell rätt. Tillsammans höjer vi våra röster för fred och rättvisa.",
      tags: ["Demonstration", "Mänskliga Rättigheter", "Fred"],
      image: eventPalestine,
    },
    {
      id: 2,
      organization: "Stockholm Pride",
      eventName: "Pride Parade 2025",
      date: "22 April 2025",
      location: "Stockholms innerstad",
      participants: 5000,
      description: "Fira kärlek, mångfald och lika rättigheter! En färgstark parad genom Stockholm för alla HBTQI+ personer och allierade.",
      tags: ["Pride", "HBTQI+", "Rättigheter"],
      image: eventPride,
    },
    {
      id: 3,
      organization: "Klimatrörelsen Nu",
      eventName: "Klimaträttvisa manifestation",
      date: "1 Maj 2025",
      location: "Mynttorget, Stockholm",
      participants: 1200,
      description: "Kräv klimaträttvisa nu! Vi samlas för att kräva omedelbar klimatomställning och rättvisa klimatpolitik.",
      tags: ["Klimat", "Aktivism", "Politik"],
      image: eventClimate,
    },
    {
      id: 4,
      organization: "Rättighetscentrum",
      eventName: "Demonstration för asylrätt",
      date: "8 Maj 2025",
      location: "Medborgarplatsen, Stockholm",
      participants: 600,
      description: "Stå upp för asylrätten och mänskliga rättigheter. Alla människor har rätt till ett säkert liv och rättvis behandling.",
      tags: ["Asylrätt", "Juridik", "Solidaritet"],
      image: eventRights,
    },
    {
      id: 5,
      organization: "Fridays for Future Stockholm",
      eventName: "Klimatstrejk",
      date: "15 Maj 2025",
      location: "Sergels torg, Stockholm",
      participants: 2000,
      description: "Veckovis klimatstrejk för att uppmärksamma klimatkrisen. Unga röster för planetens framtid - tal, musik och engagemang.",
      tags: ["Strejk", "Ungdom", "Klimat"],
      image: eventStrike,
    },
    {
      id: 6,
      organization: "Demokrati i Rörelse",
      eventName: "Valkampanj - Rösta för förändring",
      date: "20 Maj 2025",
      location: "Hötorget, Stockholm",
      participants: 400,
      description: "Engagera dig i demokratin! Informationskampanj om vikten av att rösta och vara en aktiv medborgare.",
      tags: ["Val", "Demokrati", "Engagemang"],
      image: eventCampaign,
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
