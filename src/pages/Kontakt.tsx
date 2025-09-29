import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Meddelande skickat!",
      description: "Tack för ditt meddelande. Vi återkommer så snart som möjligt.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Kontakta Oss</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vi ser fram emot att höra från dig!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="shadow-[var(--shadow-soft)]">
                <CardHeader>
                  <CardTitle>Skicka ett meddelande</CardTitle>
                  <CardDescription>
                    Fyll i formuläret så återkommer vi inom 24 timmar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Namn</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ditt namn"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-post</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="din@email.se"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Ämne</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Vad gäller det?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Meddelande</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Ditt meddelande..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Skicka meddelande <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="shadow-[var(--shadow-soft)]">
                  <CardHeader>
                    <CardTitle>Kontaktinformation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">E-post</h3>
                        <p className="text-muted-foreground">info@ecocard.se</p>
                        <p className="text-sm text-muted-foreground mt-1">Vi svarar inom 24 timmar</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefon</h3>
                        <p className="text-muted-foreground">+46 70 123 45 67</p>
                        <p className="text-sm text-muted-foreground mt-1">Vardagar 09:00-17:00</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Adress</h3>
                        <p className="text-muted-foreground">Kungsgatan 123</p>
                        <p className="text-muted-foreground">111 22 Stockholm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-0 shadow-[var(--shadow-soft)]">
                  <CardHeader>
                    <CardTitle>Vanliga frågor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold mb-1">Hur blir man sponsor?</p>
                        <p className="text-muted-foreground">
                          Kontakta oss via formuläret så berättar vi mer om våra sponsorpaket.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Kan min organisation delta?</p>
                        <p className="text-muted-foreground">
                          Absolut! Alla miljöorganisationer är välkomna. Hör av dig så hjälper vi er komma igång.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Hur får man QR-kort?</p>
                        <p className="text-muted-foreground">
                          När ni registrerar er organisation får ni tillgång till era unika QR-kort digitalt och kan beställa fysiska kort.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
