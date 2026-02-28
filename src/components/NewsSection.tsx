import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar } from "lucide-react";

const news = [
  {
    date: "20 февраля 2026",
    title: "Рост спроса на доставку продуктов питания в регионы",
    desc: "По данным аналитиков, объём перевозок продуктов питания вырос на 18% по сравнению с прошлым годом.",
  },
  {
    date: "14 февраля 2026",
    title: "Новые стандарты температурного контроля",
    desc: "Вступили в силу обновлённые требования к перевозке скоропортящихся товаров автомобильным транспортом.",
  },
  {
    date: "5 февраля 2026",
    title: "Цифровизация логистики: тренды 2026",
    desc: "Эксперты отмечают рост внедрения AI-решений для оптимизации маршрутов и снижения затрат.",
  },
];

const NewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="news" className="section-padding bg-muted">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-12">
          <p className="font-heading text-primary tracking-[0.2em] text-sm mb-2">НОВОСТИ</p>
          <h2 className="text-3xl md:text-5xl text-foreground">НОВОСТИ ЛОГИСТИКИ</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <article
              key={i}
              className={`bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={14} />
                  {n.date}
                </div>
                <h3 className="font-heading text-base text-foreground mb-2 normal-case group-hover:text-primary transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
