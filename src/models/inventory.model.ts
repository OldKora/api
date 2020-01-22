import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Product } from '../models';
import { ProductWithRelations } from './product.model';

@model({settings: {strict: false}})
export class Inventory extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  inventoryId?: string;

  @property({
    type: 'number',
    required: true,
  })
  qty: number;

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

  @belongsTo(() => Product)
  productId: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Inventory>) {
    super(data);
  }
}

export interface InventoryRelations {
  // describe navigational properties here
  //product?: ProductWithRelations;
}

export type InventoryWithRelations = Inventory & InventoryRelations;
