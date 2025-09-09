// Ini adalah layer terdalam yang berinteraksi langsung dengan Prisma.
// 1 // src/api/users/user.service.ts
// 2 import prisma from '../../db/prisma.js';
// 3
// 4 /**
// 5  * Mengambil semua user dari database
// 6  */
// 7 export const findAllUsers = async () => {
// 8   const users = await prisma.user.findMany();
// 9   return users;
// 10 };
// 11
// 12 // Nanti Anda bisa menambahkan fungsi lain di sini, contoh:
// 13 /*
// 14 export const findUserById = async (id: number) => {
// 15   // ...
// 16 }
// 17
// 18 export const createUser = async (userData: any) => {
// 19   // ...
// 20 }
// 21 */

import prisma from "../../db/prisma.js";

export const findAllusers = async () => {
    const users = await prisma.user.findMany();
    return users;
};
