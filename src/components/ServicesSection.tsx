import { Truck, UtensilsCrossed, BarChart3, Wallet } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Truck,
    title: "Грузоперевозки",
    desc: "Перевозка грузов любого объёма по всей России. Полная и сборная загрузка, контроль на каждом этапе.",
  },
  {
    icon: UtensilsCrossed,
    title: "Доставка продуктов",
    desc: "Специализированная доставка продуктов питания с соблюдением температурного режима и санитарных норм.",
  },
  {
    icon: BarChart3,
    title: "Логистика для бизнеса",
    desc: "Комплексные логистические решения: планирование маршрутов, оптимизация цепочек поставок, складская логистика.",
  },
  {
    icon: Wallet,
    title: "Подбор транспорта под бюджет",
    desc: "Подберём оптимальный транспорт исходя из вашего бюджета и требований к доставке без ущерба качеству.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-muted">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-12">
          <p className="font-heading text-primary tracking-[0.2em] text-sm mb-2">НАШИ УСЛУГИ</p>
          <h2 className="text-3xl md:text-5xl text-foreground">ЧТО МЫ ПРЕДЛАГАЕМ</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-card rounded-lg p-6 transition-all duration-500 hover:shadow-[var(--card-shadow-hover)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                <s.icon size={24} />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2 normal-case">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
