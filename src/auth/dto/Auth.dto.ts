import { UserRole } from "src/users/user-role.enum"

export class RegisterDto{
       nombre: string
    apellido: string 
    cedula: string
    edad: number
    email: string
    password: string
    contacto: string
    rol: UserRole //
}