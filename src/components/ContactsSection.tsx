import { Phone, Mail, MapPin } from "lucide-react";

const ContactsSection = () => {
  return (
    <section id="contacts" className="section-padding bg-foreground text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="font-heading text-secondary tracking-[0.2em] text-sm mb-2">КОНТАКТЫ</p>
          <h2 className="text-3xl md:text-5xl">СВЯЖИТЕСЬ С НАМИ</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { icon: Phone, label: "Телефон", value: "+7 (800) 555-35-35", href: "tel:+78005553535" },
            { icon: Mail, label: "Email", value: "info@fenix-prime.ru", href: "mailto:info@fenix-prime.ru" },
            { icon: MapPin, label: "Адрес", value: "г. Москва, ул. Логистическая, д. 12", href: undefined },
          ].map((c) => (
            <div key={c.label} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <c.icon size={20} />
              </div>
              <div className="text-xs text-primary-foreground/60 mb-1 font-heading tracking-wider">{c.label}</div>
              {c.href ? (
                <a href={c.href} className="text-sm hover:text-secondary transition-colors">
                  {c.value}
                </a>
              ) : (
                <span className="text-sm">{c.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
