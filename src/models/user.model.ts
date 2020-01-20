import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import { Order } from './order.model';
import { UserCredentials, UserCredentialsWithRelations } from './user-credentials.model';

@model({
  settings: {
    strict: false,
    indexes: {
      uniqueEmail: {
        keys: {
          email: 1,
        },
        options: {
          unique: true,
        }
      }
    }
  },
})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  userId?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  phone?: string;

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

  @hasMany(() => Order)
  orders: Order[];

  @hasOne(() => UserCredentials, {keyTo: 'userId'})
  userCredentials: UserCredentials;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
  userCredentials?: UserCredentialsWithRelations;
}

export type UserWithRelations = User & UserRelations;
