export type Unidade = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  openHour: string;
  closeHour: string;
  active: boolean;
  image: string;
};

export const unidades: Unidade[] = [
  {
    id: "matriz-centro",
    name: "Raízes do Nordeste - Matriz Centro",
    city: "Recife - PE",
    address: "Av. Guararapes, 1200 - Centro",
    phone: "(81) 99123-4567",
    openHour: "10:00",
    closeHour: "22:30",
    active: true,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "boa-viagem",
    name: "Raízes do Nordeste - Boa Viagem",
    city: "Recife - PE",
    address: "Av. Boa Viagem, 3450 - Beira Mar",
    phone: "(81) 99876-1122",
    openHour: "11:00",
    closeHour: "23:30",
    active: true,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "olinda-historico",
    name: "Raízes do Nordeste - Olinda Histórico",
    city: "Olinda - PE",
    address: "Largo do Mosteiro, 88 - Sítio Histórico",
    phone: "(81) 98765-4455",
    openHour: "10:30",
    closeHour: "22:00",
    active: true,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "paulista",
    name: "Raízes do Nordeste - Paulista",
    city: "Paulista - PE",
    address: "Av. Marechal Floriano, 2100",
    phone: "(81) 99654-7788",
    openHour: "11:00",
    closeHour: "22:00",
    active: false,
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "jaboatao-express",
    name: "Raízes do Nordeste - Zona Sul Express",
    city: "Jaboatão dos Guararapes - PE",
    address: "Shopping Guararapes - Loja 42",
    phone: "(81) 99333-2211",
    openHour: "09:00",
    closeHour: "21:00",
    active: true,
    image:
      "https://images.unsplash.com/photo-1466979939565-131c4b0e1a7d?auto=format&fit=crop&w=1200&q=80",
  },
];