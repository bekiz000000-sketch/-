import warehouseImg from "@/assets/warehouse.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <p className="font-heading text-primary tracking-[0.2em] text-sm mb-2">О КОМПАНИИ</p>
            <h2 className="text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              НАДЁЖНЫЙ ПАРТНЁР<br />В ЛОГИСТИКЕ
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Феникс-Прайм</strong> — транспортно-логистическая компания, специализирующаяся на грузоперевозках и доставке продуктов питания для бизнеса. Мы помогаем компаниям оптимизировать транспортные расходы без снижения качества и сроков доставки.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Нам доверяют перевозку продуктов питания, потому что мы гарантируем соблюдение температурного режима, своевременность доставки и полную сохранность груза. Наш автопарк оснащён современным оборудованием для перевозки скоропортящихся товаров.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "500+", label: "Клиентов" },
                { num: "10K+", label: "Доставок" },
                { num: "99%", label: "В срок" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-muted">
                  <div className="font-heading text-2xl md:text-3xl text-primary">{stat.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative">
              <img
                src={warehouseImg}
                alt="Склад компании Феникс-Прайм"
                className="rounded-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg font-heading">
                <div className="text-3xl">7+</div>
                <div className="text-xs tracking-wider">ЛЕТ ОПЫТА</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
