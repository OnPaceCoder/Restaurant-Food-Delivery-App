export type MenuTypes = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type ProductTypes = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type OrderTypes = {
  id: string;
  userEmail: string;
  products: CartItemType[];
  title: string;
  desc?: string;
  img?: string;
  price: number;
  createdAt: Date;
  intent_id?: string;
}[];

export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};
