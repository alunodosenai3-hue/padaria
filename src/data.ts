export interface FAQItem {
  question: string;
  answer: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  date: string;
  text: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
}

export const BENEFITS_ITEMS: BenefitItem[] = [
  {
    id: 1,
    title: "Fermentação Lenta de 36h+ (Levain)",
    description: "Nossos pães passam por um processo pacientemente lento de maturação a frio. Isso quebra as proteínas complexas do glúten, resultando em um pão de altíssima digestibilidade, índice glicêmico reduzido e sabor incomparavelmente complexo."
  },
  {
    id: 2,
    title: "Zero Conservantes ou Químicos",
    description: "Água, farinha de trigo especial premium, sal marinho e o nosso fermento natural centenário. Abolimos qualquer tipo de melhorador de farinha, antimofos ou misturas pré-prontas artificiais para entregar o pão mais limpo do mercado."
  },
  {
    id: 3,
    title: "Grãos Ancestrais e Manteiga Pura",
    description: "Selecionamos trigos importados de moagem fina e grãos ancestrais ricos em nutrientes. Nossa linha de folhados e confeitaria fina utiliza exclusivamente manteiga pura de alta gordura e técnica francesa tradicional de dobras operacionais."
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Sourdough Clássico Rústico",
    category: "Fermentação Natural",
    description: "Miolo incrivelmente aerado, crosta espessa caramelizada, aroma inconfundível do levain.",
    imageUrl: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Croissant de Manteiga Pura",
    category: "Confeitaria Fina / Folhados",
    description: "Alvéolos internos perfeitos como favos de mel, folhado dourado e crocante que derrete na boca.",
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Pão de Campanha multi-grãos",
    category: "Fermentação Natural",
    description: "Mistura rica de centeio, trigo integral e sementes tostadas (girassol, sésamo, linhaça).",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Pain au Chocolat Belga",
    category: "Confeitaria Fina / Folhados",
    description: "Massa folhada Premium recheada com bastões de chocolate belga semi-amargo de altíssima qualidade.",
    imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Brioche Suíço Amanteigado",
    category: "Padaria Especial",
    description: "Massa rica super macia enriquecida com manteiga selecionada e ovos caipiras frescos.",
    imageUrl: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Éclair de Pistache e Caramelo Fleur de Sel",
    category: "Confeitaria Fina",
    description: "Massa choux clássica francesa, recheio aveludado de pistache siciliano com caramelo salgado.",
    imageUrl: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    id: 1,
    name: "Mariana Alencar",
    role: "Moradora dos Jardins / Assinante",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 1 semana",
    text: "O Clube do Pão mudou minhas manhãs! A entrega às 06:45h traz o sourdough ainda quentinho, estalando e com aquele cheiro de panificação de verdade. A digestão é levinha, nem se compara aos pães industriais. Recomendo de olhos fechados!"
  },
  {
    id: 2,
    name: "Dr. Carlos Eduardo Malta",
    role: "Nutrólogo / Cliente Fiel",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 3 dias",
    text: "Por problemas de sensibilidade ao glúten comum, eu evitava pães. O processo de fermentação ativa lenta de 36 horas da Panis & Co. realiza a hidrólise perfeita das proteinas. Consigo comer com prazer absoluto, sem desconforto algum. Qualidade técnica intocável!"
  },
  {
    id: 3,
    name: "Beatriz Nogueira",
    role: "Chef Gastronômica / Sommelier",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 2 semanas",
    text: "O croissant deles é o mais próximo que já comi do verdadeiro croissant parisiense em São Paulo. O folhado tem o som estaladiço perfeito e as dobras são limpas e areadas por causa da gordura correta. Eles dominam a confeitaria!"
  },
  {
    id: 4,
    name: "Fernando Vasconcellos",
    role: "Assinante Premium",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 5 dias",
    text: "O atendimento via WhatsApp é super ágil de verdade. Pedi um brioche especial e um combo de pães rústicos para um brunch de última hora e a entrega chegou perfeitamente embalada, quente e com um capricho que impressionou todos os convidados."
  },
  {
    id: 5,
    name: "Helena Salles",
    role: "Entusiasta de Confeitaria Fina",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 1 mês",
    text: "A Éclair de pistache é simplesmente divina. Se percebe o nível de exigência na seleção das amêndoas e na doçura na medida justa (sem aquele açúcar excessivo de padarias comuns). A Panis & Co. faz arte em forma de pão!"
  },
  {
    id: 6,
    name: "Rodrigo M. Ramos",
    role: "Gerente de Eventos corporativos",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 4 dias",
    text: "Assinei o Clube do Pão corporativo para nossas reuniões matinais de diretoria e foi a melhor escolha administrativa do trimestre. Pontualidade britânica, pães fantásticos saindo do forno no horário e feedback unânime de excelência de todos os sócios."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como funciona a Assinatura Mensal do Clube do Pão com 10% de desconto?",
    answer: "Trata-se de um plano de entregas programadas semanais ou quinzenais. Você personaliza os itens de fermentação natural e confeitaria fina que mais gosta, escolhe os dias da semana (por exemplo, segundas e sextas-feiras) e recebe em sua porta nas primeiras horas da manhã com frete prioritário e 10% de desconto fixo garantido em relação aos pedidos avulsos."
  },
  {
    question: "As fornadas realmente saem a partir das 06:30h da manhã?",
    answer: "Sim! Nossa equipe de padeiros artesanais trabalha durante toda a madrugada para garantir que as primeiras entregas saiam pontualmente às 06:30h da manhã. O pão é despachado em sacas térmicas especiais diretamente para o seu endereço para que a crosta continue estalando e o miolo chegue quente."
  },
  {
    question: "O pão de fermentação natural (sourdough) estraga rápido por não ter conservantes?",
    answer: "Muito pelo contrário! Graças à acidez natural saudável gerada pelos lactobacilos durante a fermentação lenta de 36h do Levain, nossos pães têm uma excelente conservação natural. Enrolado em um pano limpo ou saco de papel, o sourdough rústico dura até 5 a 7 dias perfeitamente macio por dentro."
  },
  {
    question: "Posso congelar os pães e folhados se sobrar?",
    answer: "Com certeza. Nossos pães congelam perfeitamente. Recomendamos fatiar o sourdough antes de congelar. Na hora de consumir, basta levar a fatia diretamente congelada para a torradeira ou forno médio pré-aquecido por alguns minutos. Ele recupera 100% da crocância externa e maciez interna como se tivesse saído do forno naquela hora."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Para compras avulsas e pacotes fechados, aceitamos PIX (com liberação imediata), Cartões de Crédito e Débito e Cartões de Benefício de refeição principais (Alelo, Sodexo, Ticket, VR). Para a Assinatura Mensal Clube do Pão, o pagamento é feito por recorrência mensal automática no cartão de crédito, sem consumir o limite total do seu cartão."
  },
  {
    question: "Qual o prazo para fazer uma encomenda avulsa para o dia seguinte?",
    answer: "Como nossa fermentação é lenta e natural, não conseguimos acelerar a maturação dos pães. Por isso, os pedidos avulsos para entrega matinal devem ser fechados até as 17:00h do dia anterior. Isso nos permite planejar a divisão e a modelagem final da massa que entrará no forno de madrugada."
  },
  {
    question: "Trabalham com opções sem glúten para celíacos?",
    answer: "ATENÇÃO: Apesar de nossos pães de fermentação natural apresentarem excelente digestibilidade devido à quebra do glúten durante as 36 horas de fermentação, nós processamos farinha de trigo em toda a nossa instalação de forma contínua. Por isso, existe risco de contaminação cruzada. Nossos produtos NÃO são indicados para pessoas com doença celíaca severa."
  },
  {
    question: "Como é calculado o custo de entrega?",
    answer: "A taxa de entrega é calculada com base na distância de nosso atelier até sua residência. Para assinantes fixos do Clube do Pão, oferecemos taxa de entrega unificada fixa ou totalmente gratuita dependendo do volume total da assinatura para garantir máxima economia e recorrência lucrativa."
  },
  {
    question: "O que vem na linha de confeitaria fina e folhados?",
    answer: "Nossa confeitaria fina segue o rigor técnico da viennoiserie francesa clássica: croissants puros, pain au chocolat belga, brioches macios e doces autorais, além de tortas finas de frutas da estação e éclairs de pistache com caramelo francês. Todos confeccionados exclusivamente com manteiga selecionada de alto teor de gordura."
  },
  {
    question: "Como posso cancelar ou modificar a minha assinatura semanal do Clube do Pão?",
    answer: "Total flexibilidade! Você pode pausar, cancelar ou trocar os pães da sua entrega com até 48 horas de antecedência de forma simples e rápida através do nosso WhatsApp ou entrando no seu painel de cliente. Não há cláusulas de fidelidade longa, queremos que você continue pela pura paixão pelo sabor!"
  }
];
