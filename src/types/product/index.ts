export type IProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: IRating;
};

export type IRating = {
  rate: number;
  count: number;
};
