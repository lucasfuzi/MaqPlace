export type Machine = {
  id: number;
  name: string;
  type: string;
  category: string;
  location: string;
  distance: number;
  priceHour: number;
  priceDay: number;
  provider: string;
  providerInitials: string;
  availability: "Disponível" | "Em breve" | "Indisponível";
  image: string;
  year: string;
  service: string;
  description: string;
  specs: Array<[string, string]>;
  services: string[];
};

export const heroImage = "/manus-storage/maqfacil-hero-industrial_c19fba75.jpg";
export const yardImage = "/manus-storage/maqfacil-equipment-yard_91f6b49b.jpg";
export const providerImage = "/manus-storage/maqfacil-provider-field_963c4e61.jpg";
export const logoImage = "/manus-storage/maqfacil-logo-engineered_393a7f4f.png";

export const machines: Machine[] = [
  {
    id: 1,
    name: "Escavadeira Caterpillar 320",
    type: "Escavadeira hidráulica",
    category: "Escavadeiras",
    location: "Contagem, MG",
    distance: 12,
    priceHour: 320,
    priceDay: 2380,
    provider: "Terramax Operações",
    providerInitials: "TO",
    availability: "Disponível",
    image: "/manus-storage/maqfacil-maquinas-em-obra_a8c4fdf9.webp",
    year: "2022",
    service: "Terraplenagem",
    description: "Escavadeira para escavação, carregamento e abertura de valas. Operação com profissional habilitado e acompanhamento de mobilização.",
    specs: [["Peso operacional", "21,9 t"], ["Potência", "149 hp"], ["Profundidade máx.", "6,72 m"], ["Caçamba", "1,19 m³"]],
    services: ["Escavação", "Terraplenagem", "Abertura de valas"],
  },
  {
    id: 2,
    name: "Retroescavadeira JCB 3CX",
    type: "Retroescavadeira",
    category: "Retroescavadeiras",
    location: "Betim, MG",
    distance: 18,
    priceHour: 245,
    priceDay: 1820,
    provider: "Via Forte Máquinas",
    providerInitials: "VF",
    availability: "Disponível",
    image: "/manus-storage/maqfacil-retroescavadeira-operacao_80bc2e0d.jpg",
    year: "2021",
    service: "Obras urbanas",
    description: "Equipamento versátil para operações urbanas, preparação de solo, valas e movimentação de materiais em espaços reduzidos.",
    specs: [["Peso operacional", "8,1 t"], ["Potência", "92 hp"], ["Profundidade máx.", "5,97 m"], ["Caçamba frontal", "1,0 m³"]],
    services: ["Valas", "Carregamento", "Nivelamento"],
  },
  {
    id: 3,
    name: "Trator John Deere 6110J",
    type: "Trator agrícola",
    category: "Tratores",
    location: "Nova Lima, MG",
    distance: 24,
    priceHour: 210,
    priceDay: 1560,
    provider: "Campo Alto Serviços",
    providerInitials: "CA",
    availability: "Em breve",
    image: "/manus-storage/maqfacil-tractor-operation_06b6c03f.jpg",
    year: "2020",
    service: "Preparo de solo",
    description: "Trator de alta tração para preparo de solo, apoio em áreas rurais e movimentação de implementos adequados à demanda.",
    specs: [["Potência nominal", "110 cv"], ["Tração", "4x4"], ["Transmissão", "PowerQuad"], ["Peso", "4,9 t"]],
    services: ["Gradeamento", "Roçada", "Apoio rural"],
  },
  {
    id: 4,
    name: "Caminhão Mercedes-Benz Atego",
    type: "Caminhão basculante",
    category: "Caminhões",
    location: "Belo Horizonte, MG",
    distance: 9,
    priceHour: 185,
    priceDay: 1390,
    provider: "Rota Minas Transportes",
    providerInitials: "RM",
    availability: "Disponível",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85",
    year: "2023",
    service: "Transporte de agregados",
    description: "Caminhão basculante com operação organizada para transporte de terra, brita, areia e resíduos de obra, sujeito à rota e à carga.",
    specs: [["Capacidade", "10 m³"], ["Tração", "6x2"], ["Potência", "256 cv"], ["Peso bruto total", "23 t"]],
    services: ["Remoção", "Entrega de agregados", "Bota-fora"],
  },
  {
    id: 5,
    name: "Guindaste hidráulico 30T",
    type: "Guindaste móvel",
    category: "Guindastes",
    location: "Ribeirão das Neves, MG",
    distance: 31,
    priceHour: 590,
    priceDay: 4460,
    provider: "Eleva Engenharia",
    providerInitials: "EE",
    availability: "Indisponível",
    image: "/manus-storage/maqfacil-guindaste-operacao_f1fa8895.png",
    year: "2019",
    service: "Içamento",
    description: "Guindaste móvel para içamento e posicionamento de estruturas, com equipe técnica e planejamento operacional sob consulta.",
    specs: [["Capacidade nominal", "30 t"], ["Lança principal", "34 m"], ["Contrapeso", "8,5 t"], ["Tração", "6x4"]],
    services: ["Içamento", "Montagem", "Movimentação industrial"],
  },
  {
    id: 6,
    name: "Mini escavadeira Bobcat E35",
    type: "Mini escavadeira",
    category: "Outras máquinas",
    location: "Sabará, MG",
    distance: 27,
    priceHour: 175,
    priceDay: 1290,
    provider: "Compacta Locações",
    providerInitials: "CL",
    availability: "Disponível",
    image: "/manus-storage/maqfacil-mini-escavadeira_4c12d21e.jpg",
    year: "2022",
    service: "Escavação compacta",
    description: "Mini escavadeira compacta para acessos restritos, redes de infraestrutura, jardins, fundações e pequenas demolições.",
    specs: [["Peso operacional", "3,5 t"], ["Potência", "33 hp"], ["Profundidade máx.", "3,12 m"], ["Largura", "1,75 m"]],
    services: ["Valas", "Fundações", "Paisagismo"],
  },
];

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);

export const getMachine = (id: string | number) => machines.find((machine) => machine.id === Number(id)) ?? machines[0];

export const readFavorites = (): number[] => {
  try {
    return JSON.parse(localStorage.getItem("maqfacil-favoritos") || "[]");
  } catch {
    return [];
  }
};

export const saveFavorites = (favorites: number[]) => localStorage.setItem("maqfacil-favoritos", JSON.stringify(favorites));
