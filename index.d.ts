type API = string;
type Json = string | number | boolean | null | { [property: string]: Json } | Json[];

type TProductId = number;

type TProductCategory = {
  id: string;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

type TProduct = {
  id: TProductId;
  category: TProductCategory;
  creationAt: string;
  description: string;
  id: number;
  images: Array;
  price: number;
  title: string;
  updatedAt: string;
};

type Context = {
  state: initState | {},
  addToCart: Function,
  removeFromCart: Function,
}

interface initState {
  cart: TProduct[]
}
