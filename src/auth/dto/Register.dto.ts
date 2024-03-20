import { UserRole } from "src/users/user-role.enum"

export class RegisterDto {
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