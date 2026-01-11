export enum CoffeeRoast {
  LIGHT = 'Light',
  MEDIUM = 'Medium',
  DARK = 'Dark'
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  image?: string;
  large?: boolean;
}

export interface AiRecommendation {
  name: string;
  description: string;
  notes: string[];
  brewingMethod: string;
}