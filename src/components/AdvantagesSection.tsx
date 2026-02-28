import { TrendingDown, Zap, ShieldCheck, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aerialImg from "@/assets/logistics-aerial.jpg";

const advantages = [
  { icon: TrendingDown, title: "Оптимизация затрат", desc: "Снижаем расходы на логистику до 30% за счёт оптимальных маршрутов и подбора транспорта." },
  { icon: Zap, title: "Быстрая доставка", desc: "Оперативная обработка заказов и доставка в кратчайшие сроки по всей России." },
  { icon: ShieldCheck, title: "Надёжный транспорт", desc: "Современный автопарк с GPS-мониторингом и регулярным техобслуживанием." },
  { icon: Award, title: "Опыт в продуктах питания", desc: "Знаем все нюансы перевозки скоропортящихся товаров и гарантируем сохранность." },
];

const AdvantagesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="advantages" className="relative section-padding overflow-hidden">
      <img src={aerialImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div ref={ref} className="relative container mx-auto">
        <div className="text-center mb-12">
          <p className="font-heading text-primary tracking-[0.2em] text-sm mb-2">ПОЧЕМУ МЫ</p>
          <h2 className="text-3xl md:text-5xl text-foreground">НАШИ ПРЕИМУЩЕСТВА</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {advantages.map((a, i) => (
            <div
              key={a.title}
              className={`flex gap-4 p-6 rounded-lg bg-card/80 backdrop-blur-sm border border-border transition-all duration-500 hover:border-primary/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <a.icon size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1 normal-case">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
