export interface Product {
  id: number;
  name: string;
  pluralName: string;
  type: string;
  price: number;
  img: string;
  otherImages: string[];
  releaseDate: Date;
}
