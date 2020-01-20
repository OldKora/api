import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ShoppingCartItem extends Entity {

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'number',
    require: true
  })
  qty: number;

  @property({
    type: 'number',
    require: true
  })
  price?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ShoppingCartItem>) {
    super(data);
  }
}

export interface ShoppingCartItemRelations {
  // describe navigational properties here
}

export type ShoppingCartItemWithRelations = ShoppingCartItem & ShoppingCartItemRelations;
