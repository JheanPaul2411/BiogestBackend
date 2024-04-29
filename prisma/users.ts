import { RegisterDto } from "src/auth/dto/Register.dto";
enum UserRole {
    ADMIN = 'ADMIN',
    PACIENTE = 'PACIENTE',
    DOCTOR = 'DOCTOR'
}
export const users: RegisterDto[] = [
    {
        nombre: "Richard",
        apellido: "Guach",
        cedula: "1754454849",
        contacto: "0983078841",
        email: "admin@admin.com",
        password: "Rmga288+",
        fecha_nacimiento: new Date('06/12/2003'),
        rol: UserRole.ADMIN
    },
    {
        nombre: "Juan",
        apellido: "Aguilar",
        cedula: "1754400019",
        contacto: "0981120841",
        email: "paciente@paciente.com",
        password: "Rmga288+",
        fecha_nacimiento: new Date('07/12/2003'),
        rol: UserRole.PACIENTE
    },
    {
        nombre: "Emilia",
        apellido: "Paez",
        cedula: "2234454849",
        contacto: "0900298841",
        email: "doctor@doctor.com",
        password: "Rmga288+",
        fecha_nacimiento: new Date('08/12/2003'),
        rol: UserRole.DOCTOR
    },
    {
        nombre: "Sofía López",
        apellido: "López",
        cedula: "6666666666",
        contacto: "0444444444",
        email: "sofialopez@example.com",
        password: "password",
        fecha_nacimiento: new Date('1990-06-06'),
        rol: UserRole.PACIENTE
    },
    {
        nombre: "Diego Díaz",
        apellido: "Díaz",
        cedula: "7777777777",
        contacto: "0333333333",
        email: "diegodiaz@example.com",
        password: "password",
        fecha_nacimiento: new Date('1992-07-07'),
        rol: UserRole.PACIENTE
    },
    {
        nombre: "Laura Gómez",
        apellido: "Gómez",
        cedula: "8888888888",
        contacto: "0222222222",
        email: "lauragomez@example.com",
        password: "password",
        fecha_nacimiento: new Date('1994-08-08'),
        rol: UserRole.PACIENTE
    },
    {
        nombre: "Pablo Ruiz",
        apellido: "Ruiz",
        cedula: "9999999999",
        contacto: "0111111111",
        email: "pabloruiz@example.com",
        password: "password",
        fecha_nacimiento: new Date('1996-09-09'),
        rol: UserRole.DOCTOR
    },
    {
        nombre: "Valeria Sánchez",
        apellido: "Sánchez",
        cedula: "1010101010",
        contacto: "0000000000",
        email: "valeriasanchez@example.com",
        password: "password",
        fecha_nacimiento: new Date('1998-10-10'),
        rol: UserRole.PACIENTE
    },
    {
        nombre:"Juan Pérez",
        apellido:"Pérez",
        cedula:"1111111111",
        contacto:"0999999999",
        email:"juanperez@example.com",
        password:"password",
        fecha_nacimiento: new Date('1990-01-01'),
        rol:UserRole.PACIENTE
    },
    {
        nombre:"María Rodríguez",
        apellido:"Rodríguez",
        cedula:"2222222222",
        contacto:"0888888888",
        email:"mariarodriguez@example.com",
        password:"password",
        fecha_nacimiento: new Date('1992-02-02'),
        rol:UserRole.DOCTOR
    },
    {
        nombre:"Carlos García",
        apellido:"García",
        cedula:"3333333333",
        contacto:"0777777777",
        email:"carlosgarcia@example.com",
        password:"password",
        fecha_nacimiento: new Date('1994-03-03'),
        rol:UserRole.PACIENTE
    },
    // Los siguientes usuarios siguen el mismo formato
    {
        nombre:"Ana Martínez",
        apellido:"Martínez",
        cedula:"4444444444",
        contacto:"0666666666",
        email:"anamartinez@example.com",
        password:"password",
        fecha_nacimiento: new Date('1996-04-04'),
        rol:UserRole.PACIENTE
    },
    {
        nombre:"Luis Hernández",
        apellido:"Hernández",
        cedula:"5555555555",
        contacto:"0555555555",
        email:"luishernandez@example.com",
        password:"password",
        fecha_nacimiento: new Date('1998-05-05'),
        rol:UserRole.DOCTOR
    },

    {
        nombre:"Estefanía",
        apellido:"Martínez",
        cedula:"4449902944",
        contacto:"2220666666",
        email:"estefaniamartinez@example.com",
        password:"password",
        fecha_nacimiento: new Date('1996-04-04'),
        rol:UserRole.PACIENTE
    },
    {
        nombre:"Carlos",
        apellido:"Segovia",
        cedula:"0029902944",
        contacto:"2290666666",
        email:"carlossegovia123@example.com",
        password:"password",
        fecha_nacimiento: new Date('1996-04-04'),
        rol:UserRole.PACIENTE
    },

    
];