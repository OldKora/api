import {Entity, model, property} from '@loopback/repository';

@model()
export class ShoppingCart extends Entity {

  constructor(data?: Partial<ShoppingCart>) {
    super(data);
  }
}

export interface ShoppingCartRelations {
  // describe navigational properties here
}

export type ShoppingCartWithRelations = ShoppingCart & ShoppingCartRelations;
