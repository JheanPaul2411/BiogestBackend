import { RegisterDto } from "src/auth/dto/Register.dto";
enum UserRole {
    ADMIN='ADMIN',
    PACIENTE='PACIENTE',
    DOCTOR='DOCTOR'
  }
export const users:RegisterDto[] = [
    {
        nombre:"Richard",
        apellido:"Guach",
        cedula:"1754454849",
        contacto:"0983078841",
        email:"admin@admin.com",
        password:"admin",
        fecha_nacimiento: new Date('06/12/2003'),
        rol:UserRole.ADMIN
    },
    {
        nombre:"Juan",
        apellido:"Aguilar",
        cedula:"1754400019",
        contacto:"0981120841",
        email:"paciente@paciente.com",
        password:"paciente",
        fecha_nacimiento: new Date('07/12/2003'),
        rol:UserRole.PACIENTE
    },
    {
        nombre:"Emilia",
        apellido:"Paez",
        cedula:"2234454849",
        contacto:"0900298841",
        email:"doctor@doctor.com",
        password:"doctor",
        fecha_nacimiento: new Date('08/12/2003'),
        rol:UserRole.DOCTOR
    },
];