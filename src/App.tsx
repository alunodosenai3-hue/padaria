import { useState, useEffect } from "react";
import {
  Flame,
  Award,
  Clock,
  Check,
  ChevronDown,
  Star,
  Menu,
  X,
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Coffee,
  ShieldCheck,
  ArrowRight,
  ShoppingBag,
  UtensilsCrossed
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  FAQ_ITEMS,
  PORTFOLIO_ITEMS,
  TESTIMONIAL_ITEMS,
  BENEFITS_ITEMS,
  FAQItem,
  PortfolioItem,
  TestimonialItem,
  BenefitItem
} from "./data";

export default function App() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FAQ accordion state: active item index (-1 means none, or we can allow multiple open)
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(-1);

  // Portfolio interactive category filter
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  // Urgency Timer state (15 minutes in seconds = 900 seconds)
  const [timeLeft, setTimeLeft] = useState(900);

  // Sound/Vibration effect feedback mock
  const [reservationCount, setReservationCount] = useState(47);

  // Live Timer Countdown Hook
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 900; // Reset back to 15:00 for perpetual marketing urgency
        }
        return prev - 1;
      });
    }, 1000);

    // Dynamic user feedback counter simulation
    const counterSim = setInterval(() => {
      setReservationCount((prev) => {
        const randomChance = Math.random();
        if (randomChance > 0.7) {
          return prev + 1;
        } else if (randomChance < 0.2 && prev > 40) {
          return prev - 1;
        }
        return prev;
      });
    }, 7000);

    return () => {
      clearInterval(timer);
      clearInterval(counterSim);
    };
  }, []);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Filter portfolio items
  const categories = ["Todos", "Fermentação Natural", "Confeitaria Fina", "Padaria Especial"];
  
  const filteredPortfolio = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === "Todos") return true;
    if (activeCategory === "Fermentação Natural") return item.category.includes("Fermentação");
    if (activeCategory === "Confeitaria Fina") return item.category.includes("Confeitaria") || item.category.includes("Folhados");
    if (activeCategory === "Padaria Especial") return item.category.includes("Especial");
    return true;
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-[#0d0a05] text-amber-50/90 font-sans selection:bg-amber-600 selection:text-white overflow-x-hidden relative">
      
      {/* GLOWING AMBIENT BACKGROUNDS (SaaS Premium Visuals) */}
      <div className="absolute top-[10%] left-[15%] w-[40rem] h-[40rem] rounded-full bg-[#d97706]/15 blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute top-[40%] right-[5%] w-[35rem] h-[35rem] rounded-full bg-amber-950/20 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[10%] w-[45rem] h-[45rem] rounded-full bg-[#d97706]/10 blur-[150px] pointer-events-none z-0" />

      {/* STICKY GLASS HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0d0a05]/85 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#d97706] to-amber-500 flex items-center justify-center shadow-lg shadow-[#d97706]/20 transition-transform group-hover:scale-110">
              <Coffee className="w-6 h-6 text-[#0d0a05] stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-xl tracking-tight text-white group-hover:text-amber-500 transition-colors leading-none">
                Panis & Co.
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#d97750] mt-1">
                Artisanal
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#beneficios" className="text-sm font-medium hover:text-[#d97706] transition-colors">
              Nossa Técnica
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-[#d97706] transition-colors">
              Menu & Forno
            </a>
            <a href="#oferta" className="text-sm font-medium hover:text-[#d97706] transition-colors">
              Clube do Pão
            </a>
            <a href="#depoimentos" className="text-sm font-medium hover:text-[#d97706] transition-colors">
              Avaliações
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-[#d97706] transition-colors">
              Perguntas Frequentes
            </a>
          </nav>

          {/* Header CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#oferta"
              className="py-2.5 px-5 rounded-full border border-[#d97706]/40 hover:border-[#d97706] text-sm font-semibold hover:bg-[#d97706]/10 transition-all duration-300 flex items-center gap-2"
            >
              <span>Garantir Vaga</span>
              <ArrowRight className="w-4 h-4 text-[#d97706]" />
            </a>
          </div>

          {/* Hamburger Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#d97706]/50 bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#d97706]"
            aria-label="Abrir menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/5 bg-[#0d0a05] w-full"
            >
              <div className="px-6 py-6 flex flex-col gap-5 text-lg">
                <a
                  href="#beneficios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-white/5 hover:text-[#d97706] transition-colors"
                >
                  Nossa Técnica
                </a>
                <a
                  href="#portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-white/5 hover:text-[#d97706] transition-colors"
                >
                  Menu & Forno
                </a>
                <a
                  href="#oferta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-white/5 hover:text-[#d97706] transition-colors whitespace-nowrap"
                >
                  Clube do Pão (10% OFF)
                </a>
                <a
                  href="#depoimentos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-white/5 hover:text-[#d97706] transition-colors"
                >
                  Avaliações
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#d97706] transition-colors"
                >
                  Dúvidas Frequentes
                </a>
                
                <a
                  href="https://wa.me/5511999990002?text=Gostaria%20de%20encomendar%20paes%20frescos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 py-3.5 bg-gradient-to-r from-[#d97706] to-amber-600 text-black font-bold text-center rounded-xl flex items-center justify-center gap-2 glow-gold shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Encomendar pelo WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION - HIGH-IMPACT PSYCHOLOGICAL COPIWRITING */}
      <section className="relative pt-8 lg:pt-16 pb-20 lg:pb-32 px-6 overflow-hidden z-10" id="hero">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Copy content left side (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tag Trust Anchor */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#d97706]/30 mb-6 bg-amber-950/20"
            >
              <Sparkles className="w-4 h-4 text-[#d97706]" />
              <span className="font-mono text-xs uppercase tracking-wider text-amber-200">
                Lote Limitado de Assinatura Semanal
              </span>
            </motion.div>

            {/* Main Title display (Fraunces Font) with primary gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-extrabold text-white tracking-tight leading-[1.1] mb-6"
            >
              O verdadeiro sabor da{" "}
              <span className="bg-gradient-to-r from-[#d97706] via-amber-400 to-white bg-clip-text text-transparent">
                panificação artesanal
              </span>{" "}
              quente direto do forno
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-amber-100/70 font-sans leading-relaxed max-w-2xl mb-10 font-light"
            >
              Tradição em fermentação lenta (levain), miolos incrivelmente aerados e crostas crocantes feitas à mão diariamente.
            </motion.p>

            {/* Trust Reviews Badge (Anchor proof) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10 py-3 px-4 glass rounded-2xl w-full sm:w-auto"
            >
              <div className="flex -space-x-2">
                <img className="w-9 h-9 rounded-full object-cover border-2 border-[#0d0a05] grayscale-[20%]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" alt="Cliente" referrerPolicy="no-referrer" />
                <img className="w-9 h-9 rounded-full object-cover border-2 border-[#0d0a05] grayscale-[20%]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Cliente" referrerPolicy="no-referrer" />
                <img className="w-9 h-9 rounded-full object-cover border-2 border-[#0d0a05] grayscale-[20%]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Cliente" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d97706] text-[#d97706]" />
                  ))}
                  <span className="font-bold text-sm text-white ml-1">4.9/5</span>
                </div>
                <p className="text-xs text-amber-200/60">Eleito por +1.400 clientes como a melhor panificação de S.P.</p>
              </div>
            </motion.div>

            {/* Strong Direct CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              {/* Primary Pulsing Neon Gold Button */}
              <a
                href="#oferta"
                className="py-4.5 px-8 rounded-xl bg-gradient-to-r from-[#d97706] to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-black text-lg text-center shadow-lg transition-all duration-300 transform hover:scale-[1.03] animate-pulse hover:animate-none flex items-center justify-center gap-2 glow-gold"
              >
                <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
                <span>Assinar Clube do Pão — 10% OFF</span>
              </a>

              {/* Secondary Clean WhatsApp Icon Button */}
              <a
                href="https://wa.me/5511999990002?text=Gostaria%20de%20encomendar%20paes%20frescos"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4.5 px-8 rounded-xl glass hover:bg-white/5 border border-white/10 hover:border-[#d97706]/40 text-white font-bold text-center text-lg transition-all duration-300 flex items-center justify-center gap-2 glow-gold-hover"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                <span>Encomendar pelo WhatsApp</span>
              </a>
            </motion.div>

            {/* Quick Micro-benefits indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 text-xs text-amber-100/50 font-mono text-left"
            >
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#d97706]" /> Fornadas Diárias
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#d97706]" /> 0% Química Industrial
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#d97706]" /> Receita Original Francesa
              </span>
            </motion.div>

          </div>

          {/* Interactive Hero Image Mockup (5 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a05] via-[#0d0a05]/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
                alt="Panis & Co. Artisanal Bakery Sourdough"
                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlapping Floating badge detailing "A partir das 06:30" */}
              <div className="absolute bottom-6 left-6 right-6 glass p-5 rounded-xl z-20 border border-white/5 glow-gold shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#d97706]/20 flex items-center justify-center text-[#d97706]">
                    <Clock className="w-6 h-6 animate-spin-slow" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-[10px] uppercase text-amber-400 font-bold tracking-widest leading-none mb-1">
                      ESTADO DA FORNADA
                    </p>
                    <p className="font-serif font-extrabold text-[#ffffff] text-lg leading-tight">
                      Aqueça seu dia às 06:30h
                    </p>
                    <p className="text-xs text-amber-100/65 leading-normal mt-0.5">
                      Pão rústico quentinho na sua porta.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Absolute radial background to shape the card */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#d97706]/20 to-transparent blur-md opacity-50 pointer-events-none -z-10" />
          </motion.div>

        </div>
      </section>

      {/* ADDITIONAL SECTION: POR QUE ESCOLHER NOSSA FERMENTAÇÃO NATURAL? (Glassmorphism layout) */}
      <section className="py-20 lg:py-32 px-6 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0d0a05]" id="beneficios">
        <div className="max-w-7xl mx-auto">
          
          {/* Section heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d97706] font-bold">
              Método Francês de Tradição
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white mt-3 mb-6">
              Por que escolher nossa Fermentação Natural?
            </h2>
            <div className="w-20 h-1 bg-[#d97706] mx-auto rounded-full mb-6" />
            <p className="text-lg text-amber-100/70 font-light">
              Nossos pães usam técnicas francesas tradicionais e maturação longa para garantir digestibilidade total e sabor insuperável.
            </p>
          </div>

          {/* Cards modern grid - glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS_ITEMS.map((benefit, index) => {
              // Select direct premium icons based on index
              const icons = [
                <Clock className="w-7 h-7 text-white" />,
                <ShieldCheck className="w-7 h-7 text-white" />,
                <Award className="w-7 h-7 text-white" />
              ];
              return (
                <div
                  key={benefit.id}
                  className="glass group p-8 lg:p-10 rounded-2xl relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] border border-white/10 glow-gold-hover hover:border-[#d97706]/30"
                  id={`benefit-card-${benefit.id}`}
                >
                  {/* Colored decorative sphere inside card */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#d97706]/10 rounded-full blur-2xl transition-all group-hover:bg-[#d97706]/15 group-hover:scale-125" />

                  {/* Icon Container with radial gold gradients */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#d97706] to-amber-400 flex items-center justify-center mb-8 shadow-md shadow-[#d97706]/15 group-hover:scale-105 transition-transform duration-300">
                    {icons[index]}
                  </div>

                  {/* Card Typography */}
                  <h3 className="text-xl lg:text-2xl font-serif font-extrabold text-white mb-4 leading-tight group-hover:text-amber-400 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-amber-100/65 font-light leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Sourdough Quote Badge */}
          <div className="mt-16 text-center">
            <div className="glass inline-flex items-center gap-3 px-5 py-4 rounded-xl border border-white/5 max-w-2xl mx-auto">
              <UtensilsCrossed className="w-5 h-5 text-[#d97706] shrink-0" />
              <p className="text-xs md:text-sm text-amber-200/80 italic font-mono text-left">
                "O verdadeiro pão de levain não é apressado. Ele respira, evolui e ganha vida no tempo ideal." — Atelier Panis & Co.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PORTFOLIO SECTION / RECENT BAKINGS */}
      <section className="py-20 lg:py-32 px-6 relative z-10 border-t border-white/5" id="portfolio">
        <div className="max-w-7xl mx-auto">
          
          {/* Section heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-[#d97706] font-bold">
                Galeria de Fornadas Diárias
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white mt-3">
                Conectados à Tradição Padeira
              </h2>
              <p className="text-amber-100/65 mt-2 font-light max-w-xl">
                Fermentação natural autêntica e folhados estaladiços feitos e fotografados no nosso ateliê artesanal.
              </p>
            </div>

            {/* Dynamic Filter Categories with touch-friendly 44px margins */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#d97706] ${
                    activeCategory === cat
                      ? "bg-[#d97706] text-[#0d0a05] font-black glow-gold shadow-md"
                      : "glass text-amber-100/70 hover:text-white border border-white/10"
                  }`}
                  style={{ minHeight: "44px" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid (6 Items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="glass group rounded-2xl overflow-hidden border border-white/10 glow-gold-hover hover:border-[#d97706]/40 flex flex-col h-full"
                  id={`portfolio-item-${item.id}`}
                >
                  {/* Photo with scale-105 zoom effects on hover */}
                  <div className="relative overflow-hidden aspect-[4/3] w-full bg-amber-950/20">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark Hover Mask overlay with absolute persuasion button */}
                    <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 p-8">
                      <p className="font-serif font-bold text-center text-[#d97706] text-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {item.title}
                      </p>
                      <p className="text-amber-100/80 text-xs text-center leading-relaxed transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {item.description}
                      </p>
                      <a
                        href="#oferta"
                        className="py-2.5 px-5 bg-[#d97706] text-[#0d0a05] text-xs font-mono uppercase font-black tracking-wider rounded-lg hover:bg-amber-500 transition-all shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100"
                        style={{ minHeight: "44px" }}
                      >
                        Reservar Fornada
                      </a>
                    </div>

                    {/* Category Label Tag on normal view */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-[#0d0a05]/90 backdrop-blur-md rounded-md text-[10px] font-mono font-bold tracking-widest text-amber-400 border border-white/10 uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Brief visible information Card body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-extrabold text-[#ffffff] text-xl group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-amber-100/60 text-sm font-light mt-2 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <a
                      href="#oferta"
                      className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-mono tracking-wider font-bold mt-4 hover:text-white transition-colors"
                      style={{ minHeight: "44px" }}
                    >
                      <span>Quero ver preços da assinatura</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* OFFER SECTION & LIVE URGENCY TIMER - HIGH PSYCHOLOGICAL URGENCY (GLASSMORPHISM) */}
      <section className="py-20 lg:py-32 px-6 relative z-10 border-t border-white/5 bg-gradient-to-b from-[#0d0a05] via-amber-950/10 to-[#0d0a05]" id="oferta">
        <div className="max-w-5xl mx-auto">
          
          <div className="glass rounded-3xl overflow-hidden border-2 border-[#d97706]/35 shadow-2xl relative">
            
            {/* Elegant Golden ambient glowing light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[#d97706]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* Offer content container */}
            <div className="p-8 md:p-14 text-center">
              
              <span className="px-4 py-1.5 rounded-full bg-[#d97706]/20 text-[#f59e0b] font-mono text-xs uppercase tracking-widest font-bold border border-[#d97706]/30 inline-block mb-6 animate-pulse">
                🔥 OFERTA EXCLUSIVA DO DIA
              </span>

              <h2 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight mb-4">
                Assinatura Mensal Clube do Pão
              </h2>
              
              <p className="text-xl md:text-2xl font-sans font-extrabold text-[#f59e0b] tracking-wide mb-8">
                com 10% de desconto definitivo + Prioridade de Forno
              </p>

              <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full mb-10" />

              {/* REALISTIC 15:00 MIN COUNTDOWN TIMER */}
              <div className="max-w-md mx-auto bg-black/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm mb-10 shadow-inner">
                <p className="font-mono text-xs uppercase text-amber-200/50 tracking-widest mb-3">
                  ⚠️ ESTE DESCONTO COMERCIAL EXPIRA EM:
                </p>
                
                {/* Timer Clock Interface */}
                <div className="flex justify-center items-center gap-5 my-2">
                  <div className="flex flex-col items-center">
                    <span className="font-mono text-4xl md:text-5xl font-black text-[#d97706] tracking-tight bg-black/60 px-4 py-2 rounded-lg border border-white/5 shadow min-w-[70px]">
                      {formatTime(timeLeft).split(":")[0]}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-amber-100/40 mt-1">Minutos</span>
                  </div>
                  <span className="font-mono text-4xl font-extrabold text-[#d97706] animate-pulse">:</span>
                  <div className="flex flex-col items-center">
                    <span className="font-mono text-4xl md:text-5xl font-black text-[#d97706] tracking-tight bg-black/60 px-4 py-2 rounded-lg border border-white/5 shadow min-w-[70px]">
                      {formatTime(timeLeft).split(":")[1]}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-amber-100/40 mt-1">Segundos</span>
                  </div>
                </div>

                {/* Urgent dynamic count indicator */}
                <p className="text-xs text-amber-300 font-mono mt-4 flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                  Resta apenas 1 vaga disponível para entregas gratuitas na sua região!
                </p>
              </div>

              {/* Pricing comparison / details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10 text-left">
                <div className="p-5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Frequência Personalizada</h4>
                    <p className="text-xs text-amber-100/65 mt-1">Receba 2 ou mais pães e croissants semanais de acordo com o seu perfil.</p>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Entrega Prioritária Matinal</h4>
                    <p className="text-xs text-amber-100/65 mt-1">Fornadas quentinhas saindo a partir de 06:30h da manhã entregues em sacola térmica.</p>
                  </div>
                </div>
              </div>

              {/* Sub-phrase of Urgency and delivery timeline guarantee */}
              <p className="text-sm md:text-base text-amber-100/70 max-w-xl mx-auto leading-relaxed mb-8 font-light">
                <strong className="text-white">Garantia de atendimento e entrega em até:</strong> Fornadas quentinhas saindo a partir de 06:30h da manhã direto da pedra do nosso forno vulcânico.
              </p>

              {/* Big pulsing WA CTA button with glowing shadows */}
              <div className="flex flex-col items-center">
                <a
                  href="https://wa.me/5511999990002?text=Quero%20garantir%20minha%20Assinatura%20do%20Clube%20do%20Pao%20com%2010%25%20de%20desconto%20da%20oferta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-lg py-5 px-8 rounded-2xl bg-[#d97706] hover:bg-amber-500 font-serif font-black text-xl text-[#0d0a05] text-center shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] glow-gold flex items-center justify-center gap-3"
                  style={{ minHeight: "56px" }}
                >
                  <MessageCircle className="w-6 h-6 fill-[#0d0a05] text-[#0d0a05]" />
                  <span>Ativar Benefício com Desconto no WhatsApp</span>
                </a>
                
                <p className="text-xs text-amber-200/50 mt-4 font-mono uppercase tracking-widest">
                  🛡️ Pagamento seguro via recorrência inteligente • Cancele quando quiser
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* REVIEWS & GOOGLE-STYLE SOCIAL PROOF */}
      <section className="py-20 lg:py-32 px-6 relative z-10 border-t border-white/5 fallback-bg" id="depoimentos">
        <div className="max-w-7xl mx-auto">
          
          {/* Header & Simulated Review Summary */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d97706] font-bold">
              Avaliações de Clientes Verificados
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white mt-3 mb-6">
              A Opinião de Quem Ama Pão de Verdade
            </h2>
            <div className="w-20 h-1 bg-[#d97706] mx-auto rounded-full mb-6" />

            {/* Google review average rating display widget */}
            <div className="glass inline-flex flex-col sm:flex-row items-center gap-6 py-4 px-6 rounded-2xl border border-white/10 shadow-lg justify-center">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl font-extrabold text-white">4.9</span>
                <div>
                  <div className="flex text-[#d97706]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-amber-100/55 font-mono">Nota no Google Meu Negócio</span>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="text-left">
                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Selo de Confiança Verificada
                </p>
                <p className="text-xs text-amber-100/60 font-sans mt-0.5">Mais de 1.480 avaliações autênticas 5 estrelas</p>
              </div>
            </div>
          </div>

          {/* Testimonial Cards (6 items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIAL_ITEMS.map((item) => (
              <div
                key={item.id}
                className="glass p-8 rounded-2xl border border-white/5 relative flex flex-col justify-between h-full hover:border-[#d97706]/20 transition-all duration-300"
                id={`testimonial-${item.id}`}
              >
                <div>
                  {/* Metadata and stars */}
                  <div className="flex justify-between items-start mb-6 w-full">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-[#d97706] text-[#d97706]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-amber-100/40">{item.date}</span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-amber-100/80 text-sm md:text-base leading-relaxed italic font-light mb-8">
                    "{item.text}"
                  </p>
                </div>

                {/* Patient Signature */}
                <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#d97706]/30 select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-black text-white text-sm">{item.name}</h4>
                    <p className="text-xs text-amber-100/55">{item.role}</p>
                    
                    {/* Verified Customer Tag */}
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold mt-1 bg-emerald-500/10 px-2 py-0.5 rounded">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      Cliente Verificado
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE FAQ ACCORDION SECTION (Exactly 10 items) */}
      <section className="py-20 lg:py-32 px-6 relative z-10 border-t border-white/5" id="faq">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-16 lg:mb-20">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d97706] font-bold">
              Central de Esclarecimentos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white mt-1 mb-6">
              Perguntas Frequentes
            </h2>
            <div className="w-20 h-1 bg-[#d97706] mx-auto rounded-full mb-6" />
            <p className="text-lg text-amber-100/70 font-light max-w-2xl mx-auto">
              Retiramos todas as suas dúvidas sobre prazos de forneamento, ingredientes saudáveis, pagamentos corporativos e logística de entrega matinal.
            </p>
          </div>

          {/* Accordion Container with 10 questions */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="glass rounded-xl border border-white/5 overflow-hidden transition-all duration-300"
                  id={`faq-item-${index}`}
                >
                  
                  {/* Header Trigger Accordion */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 transition-colors hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#d97706]"
                    style={{ minHeight: "44px" }}
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif font-bold text-base md:text-lg text-white pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#d97706]/10 border-[#d97706]/40" : ""}`}>
                      <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? "text-[#d97706]" : "text-amber-100/80"}`} />
                    </div>
                  </button>

                  {/* Body Content of Accordion */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[500px] border-t border-white/5" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 text-sm md:text-base text-amber-100/70 leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom FAQ CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-amber-100/50 mb-4 font-mono">Possui outra dúvida específica?</p>
            <a
              href="https://wa.me/5511999990002?text=Tenho%20uma%20duvida%20sobre%20a%20panificacao%20e%20a%20entrega"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-lg glass hover:bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#d97706] font-bold hover:text-[#d97750] transition-colors inline-block"
              style={{ minHeight: "44px" }}
            >
              Falar com o Padeiro de Plantão
            </a>
          </div>

        </div>
      </section>

      {/* CONTACT / GOOGLE MY BUSINESS SECTOR & OPERATIONAL MAP */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-[#040301]" id="contato">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Contact details left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#d97706] font-bold">
                  Agende sua Encomenda ou Visita
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-black text-white mt-3 mb-6">
                  Contatos e Canais de Atendimento
                </h2>
                
                <p className="text-amber-100/65 font-light leading-relaxed mb-8">
                  Nossos pães são preparados em um atelier artesanal com processos controlados. Agende sua Assinatura Mensal, visite o nosso balcão ou faça pedidos corporativos pelos canais oficiais:
                </p>

                {/* Info links list */}
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#d97706]/10 border border-[#d97706]/30 flex items-center justify-center text-[#d97706] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-white text-sm">Google Meu Negócio</h4>
                      <p className="text-xs text-amber-100/60 mt-0.5">Panis & Co. Padaria Artesanal — Visite nossa pedra!</p>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-amber-400 mt-1 inline-block hover:underline">Como chegar no Ateliê</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#d97706]/10 border border-[#d97706]/30 flex items-center justify-center text-[#d97706] shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-white text-sm">WhatsApp de Encomendas</h4>
                      <p className="text-xs text-amber-100/60 mt-0.5">(11) 99999-0002</p>
                      <a href="https://wa.me/5511999990002?text=Gostaria%20de%20encomendar%20paes%20frescos" target="_blank" rel="noopener noreferrer" className="text-xs text-amber-400 mt-1 inline-block hover:underline">Abrir conversa direta</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#d97706]/10 border border-[#d97706]/30 flex items-center justify-center text-[#d97706] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-white text-sm">E-mail de Suporte</h4>
                      <p className="text-xs text-amber-100/60 mt-0.5">pedidos@panisandco.com.br</p>
                      <span className="text-xs text-amber-200/40">Tempo médio de resposta: 1 hora</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social links */}
              <div className="pt-8 mt-8 border-t border-white/5 flex gap-4">
                <a
                  href="https://instagram.com/panis.artisanal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#d97706]/15 hover:text-[#d97706] flex items-center justify-center border border-white/10 transition-all duration-300"
                  aria-label="Acesse nosso Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/panisartesanal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#d97706]/15 hover:text-[#d97706] flex items-center justify-center border border-white/10 transition-all duration-300"
                  aria-label="Acesse nosso Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5511999990002?text=Gostaria%20de%20encomendar%20paes%20frescos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#d97706]/10 hover:bg-[#d97706]/20 text-[#d97706] flex items-center justify-center border border-[#d97706]/35 transition-all duration-300"
                  aria-label="WhatsApp da empresa"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>

            </div>

            {/* Interactive address Card / Map mockup right column */}
            <div className="lg:col-span-7">
              <div className="glass h-full rounded-2xl overflow-hidden border border-white/10 p-4 flex flex-col justify-between">
                
                {/* Visual Map Mockup / Curated layout */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:flex-1 w-full bg-[#181510] border border-white/5 mb-4 group min-h-[250px]">
                  {/* Textured pattern simulating clean dark map */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0d0a05] to-amber-950/10 z-10" />
                  
                  {/* Subtle map imagery or visual layout */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                    <div className="w-16 h-16 rounded-full bg-[#d97706]/10 border border-[#d97706]/40 flex items-center justify-center text-[#d97706] mb-4 shadow-xl animate-bounce">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <p className="font-serif font-extrabold text-[#ffffff] text-lg">
                      Panis & Co. Artisanal
                    </p>
                    <p className="text-xs text-amber-100/65 max-w-xs mt-1 leading-relaxed font-light">
                      Vila Madalena, São Paulo - SP, CEP: 05415-010 • Pães frescos assados em pedra de manhã.
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 px-4 py-2.5 bg-[#d97706] hover:bg-amber-500 text-black text-xs font-mono font-bold rounded-lg uppercase transition-colors"
                      style={{ minHeight: "44px" }}
                    >
                      Ver no Google Maps
                    </a>
                  </div>
                </div>

                {/* Operations details grid */}
                <div className="grid grid-cols-2 gap-4 p-2 text-left">
                  <div className="border-r border-white/5 pr-4">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-[#d97706] font-bold">HORÁRIO ATELIÊ</p>
                    <p className="text-xs text-white mt-1 font-semibold">Terça a Domingo: 06:30 às 13:00</p>
                    <p className="text-[11px] text-amber-100/50">Fechado às Segundas-feiras</p>
                  </div>
                  <div className="pl-2">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-[#d97706] font-bold">PEDIDOS E ASSINATURA</p>
                    <p className="text-xs text-white mt-1 font-semibold">Semanal 24h via WhatsApp</p>
                    <p className="text-[11px] text-amber-100/50">Entrega de pão fresco a partir de 06:30</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DETAILED FOOTER LOGISTIC */}
      <footer className="bg-[#050402] border-t border-white/10 relative z-20 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#d97706] flex items-center justify-center text-[#0d0a05]">
              <Coffee className="w-5 h-5 stroke-[2.2]" />
            </div>
            <p className="font-serif font-extrabold text-white text-base">
              Panis & Co. <span className="text-amber-500 font-mono text-xs uppercase font-light ml-1">Artisanal</span>
            </p>
          </div>

          {/* Legal / operational info */}
          <div className="text-xs text-amber-100/40">
            <p>© 2026 Panis & Co. Padaria Artesanal Ltda. CNPJ: 14.332.949/0001-53.</p>
            <p className="mt-1">Todos os direitos reservados. Fotos do Ateliê registradas por fotógrafo profissional.</p>
          </div>

          {/* Tech badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-amber-100/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            <span>Fornos Acesos em 3000 • Vila Madalena</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
