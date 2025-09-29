import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">EcoCard UF</h3>
            <p className="text-muted-foreground">
              Hållbara informationskort som stärker både miljön och demokratin. Sponsrade av engagerade företag.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Snabblänkar</h4>
            <div className="space-y-2">
              <Link to="/sponsorer" className="block text-muted-foreground hover:text-primary transition-colors">
                Bli Sponsor
              </Link>
              <Link to="/organisationer" className="block text-muted-foreground hover:text-primary transition-colors">
                För Föreningar
              </Link>
              <Link to="/kalender" className="block text-muted-foreground hover:text-primary transition-colors">
                Kalender
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@ecocard.se</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+46 70 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Stockholm, Sverige</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} EcoCard. Alla rättigheter reserverade.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
