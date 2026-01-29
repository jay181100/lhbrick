import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero border-t border-white/10">
      <div className="container-custom section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  LH
                </span>
              </div>
              <span className="text-hero-foreground font-bold text-xl">
                LH Brickwork
              </span>
            </div>
            <p className="text-hero-foreground/60 text-sm">
              Professional bricklaying services you can trust. Building strong
              foundations across Hertfordshire and North London.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-hero-foreground font-bold mb-4">Menu</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Projects", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-hero-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-hero-foreground font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Bricklaying",
                "Extensions",
                "Garden Walls",
                "Repointing",
                "New Builds",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-hero-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-hero-foreground font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:07575585757"
                  className="text-hero-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  07575 585757
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:LewisH.brickwork@gmail.com"
                  className="text-hero-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  LewisH.brickwork@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-hero-foreground/60 text-sm">
                  South West Hertfordshire
                  <br />& North London, UK
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-hero-foreground/40 text-sm">
            © {currentYear} LH Brickwork. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-hero-foreground/40 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-hero-foreground/40 hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
