import { PartialType } from '@nestjs/mapped-types';
import {  User } from './createUser';

export class UpdateUserDTO extends PartialType(User) {
    
}
