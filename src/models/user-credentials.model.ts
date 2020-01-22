import {Entity, model, property, belongsTo} from '@loopback/repository';
import { User, UserWithRelations } from './user.model';

@model({settings: {strict: false}})
export class UserCredentials extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

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
  updatedAt: string;
  
  @belongsTo(() => User)
  userId: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserCredentials>) {
    super(data);
  }
}

export interface UserCredentialsRelations {
  // describe navigational properties here
  user?: UserWithRelations;
}

export type UserCredentialsWithRelations = UserCredentials & UserCredentialsRelations;
