import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ShoppingCartItem extends Entity {
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
