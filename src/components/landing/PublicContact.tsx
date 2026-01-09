import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function PublicContact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Address */}
          <div className="bg-card rounded-2xl p-6 border shadow-sm text-center">
            <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-sm text-muted-foreground">
              Sharjah, United Arab Emirates
            </p>
          </div>

          {/* Phone */}
          <div className="bg-card rounded-2xl p-6 border shadow-sm text-center">
            <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">
              +971 6 XXX XXXX
            </p>
          </div>

          {/* Email */}
          <div className="bg-card rounded-2xl p-6 border shadow-sm text-center">
            <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">
              info@sea.ac.ae
            </p>
          </div>

          {/* Hours */}
          <div className="bg-card rounded-2xl p-6 border shadow-sm text-center">
            <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Working Hours</h3>
            <p className="text-sm text-muted-foreground">
              Sun - Thu: 8AM - 4PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
