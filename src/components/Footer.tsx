const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/40 text-xs text-center py-6 border-t border-primary-foreground/10">
    <div className="container mx-auto px-4">
      © {new Date().getFullYear()} Феникс-Прайм. Все права защищены.
    </div>
  </footer>
);

export default Footer;
