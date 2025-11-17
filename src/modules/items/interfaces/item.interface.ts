export interface Item {
  id: string;
  name: string;
  price: number;
  brandId?: string;
  categoryId?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

