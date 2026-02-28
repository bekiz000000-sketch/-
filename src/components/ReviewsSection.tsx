import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "ООО «ПродМаркет»",
    role: "Сеть продуктовых магазинов",
    text: "Работаем с Феникс-Прайм уже 3 года. Доставка продуктов всегда в срок, температурный режим соблюдается идеально. Сэкономили на логистике около 25%.",
  },
  {
    name: "ИП Козлов А.В.",
    role: "Производство кондитерских изделий",
    text: "Отличный подбор транспорта под наш бюджет. Перевозка деликатной продукции без единой претензии. Рекомендую как надёжного партнёра.",
  },
  {
    name: "ЗАО «ФудЛайн»",
    role: "Дистрибьютор продуктов питания",
    text: "Феникс-Прайм помогли оптимизировать наши маршруты доставки и снизить затраты. Профессиональный подход и прозрачные условия работы.",
  },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reviews" className="section-padding bg-background">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-12">
          <p className="font-heading text-primary tracking-[0.2em] text-sm mb-2">ОТЗЫВЫ</p>
          <h2 className="text-3xl md:text-5xl text-foreground">НАМ ДОВЕРЯЮТ</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`bg-card rounded-lg p-6 border border-border transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                «{r.text}»
              </p>
              <div>
                <div className="font-heading text-sm text-foreground normal-case">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
