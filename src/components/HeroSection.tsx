import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Грузовые перевозки"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-gradient)" }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="animate-slide-up font-heading text-secondary text-lg md:text-xl tracking-[0.3em] mb-4">
          ТРАНСПОРТНО-ЛОГИСТИЧЕСКАЯ КОМПАНИЯ
        </p>
        <h1 className="animate-slide-up-delay-1 font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-6">
          ФЕНИКС-ПРАЙМ
        </h1>
        <p className="animate-slide-up-delay-2 text-lg md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-light">
          Оптимальная логистика для вашего бизнеса — дешевле без потери качества
        </p>
        <div className="animate-slide-up-delay-3 mt-12 flex items-center justify-center gap-8 text-primary-foreground/60 text-sm font-heading tracking-wider">
          <span>ГРУЗОПЕРЕВОЗКИ</span>
          <span className="w-1 h-1 rounded-full bg-secondary" />
          <span>ЛОГИСТИКА</span>
          <span className="w-1 h-1 rounded-full bg-secondary" />
          <span>ДОСТАВКА</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
