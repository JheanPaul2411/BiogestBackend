import { UserRole } from "../user-role.enum"

export class User {
    nombre: string
    apellido: string
    cedula: string
    fecha_nacimiento: Date
    email: string
    password: string
    contacto: string
    photoUrl?:string
    rol: UserRole //
}