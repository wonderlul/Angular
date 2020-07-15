export interface Pizza {
  id?: number;
  name: string;
  description: string;
  photoUrl?: string;
  createdAt?: Date;
  active: boolean;
}

export interface PizzaResponse {
  size: number;
  value: Pizza[];
}
