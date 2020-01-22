import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import { Category, CategoryWithRelations } from './category.model';
import { Inventory } from './inventory.model';

@model({settings: {strict: false}})
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  productId?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;
  
  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  details?: string;

  @property({
    type: 'date',
    required: true,
    generated: true
  })
  createdAt: string;

  @property({
    type: 'date',
    required: true,
    generated: true
  })
  UpdatedAt: string;

  @belongsTo(() => Category)
  categoryId: string;

  @hasMany(() => Inventory, {keyTo: 'productId'})
  inventories?: Inventory[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  category?: CategoryWithRelations;
}

export type ProductWithRelations = Product & ProductRelations;
