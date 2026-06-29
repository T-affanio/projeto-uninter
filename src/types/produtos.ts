export type Produto = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: number;
  available: boolean;

  section?:
    | "hora-do-rango"
    | "vai-um-doce"
    | "pra-refrescar"
    | "mais-pedidos";
};