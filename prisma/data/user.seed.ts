import { Prisma } from '@prisma/client';

const defaultUsers: { firstName: string, lastName: string, class: string }[] = [
    { firstName: "Elsa", lastName: "Oltegen", class: "E25" },
    { firstName: "Erik", lastName: "Davidsson", class: "E24" },
    { firstName: "Theodor", lastName: "Strube", class: "E24" },
    { firstName: "Eric", lastName: "Hägerstrand", class: "E23" },
    { firstName: "Axel", lastName: "Andersson", class: "Egammalt" },
    { firstName: "Gustav", lastName: "Abrahamsson", class: "E23" },
    { firstName: "Pontus", lastName: "Sjöstedt", class: "E21"},
]
const defaultUser = defaultUsers[Math.floor(Math.random() * defaultUsers.length)]

export const users: Prisma.PrismaUserCreateInput[] = [
  {
    username: 'aa0000bb-s',
    passwordHash:
      'Y8IUptOZ0LI3sUUP6JVNtOZiNaIblxTTXBIJ4JIBFzr/PZgFoGHM0ua7hVFCb3yFSlyV/DI0/G/br7cU9qG4Ag==',
    passwordSalt: 'Z1w2IPe1l9nCKwWM6RV+PA==',
    firstName: defaultUser.firstName,
    lastName: defaultUser.lastName,
    class: defaultUser.class,
    email: 'aa0000bb-s@student.lu.se',
    luCard: '0025040000000001',
  },
  {
    username: 'bb1111cc-s',
    passwordHash:
      'Os3+GcPpLwK+PWF9mei/dstvdawQGpT0C4wP1oebTBp5JVooisVLpOJK4/ja2lsVuTLJlC6BKKJTWgummBXXtA==',
    passwordSalt: 'MNuYPYgl6wy9GlDjYKpMiw==',
    firstName: 'Leif',
    lastName: 'Persson',
    class: 'E16',
    email: 'bb1111cc-s@student.lu.se',
    luCard: '0025040000000002',
  },
  {
    username: 'no0000oh-s',
    passwordHash:
      'lQFpDvvCGSVywE3PTjpTUSzwWYfGwlE4MxJ/dGZp0YRe7N/U8zKUx6NWA2aGWD7p/c090lpWYDIEcuXnaiFz5Q==',
    passwordSalt: 'zXr+8b22sOLTvi/Zstu9Zw==',
    firstName: 'Lena',
    lastName: 'Handén',
    class: 'BME19',
    email: 'no0000oh-s@student.lu.se',
    luCard: '0025040000000003',
  },
];
