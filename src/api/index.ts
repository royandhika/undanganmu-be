// Router ini akan menjadi "pintu gerbang" ke semua rute API Anda. Ini membuatnya mudah untuk menambahkan
//   modul lain (misalnya products, orders) di masa depan.

//   Buat file `src/api/index.ts`:

//     1 // src/api/index.ts
//     2 import { Router } from 'express';
//     3 import userRoutes from './users/user.routes.js';
//     4
//     5 const router = Router();
//     6
//     7 // Semua rute yang berhubungan dengan user akan diawali dengan /users
//     8 router.use('/users', userRoutes);
//     9
//    10 // Jika nanti ada modul product, Anda tinggal tambahkan:
//    11 // import productRoutes from './products/product.routes.js';
//    12 // router.use('/products', productRoutes);
//    13
//    14 export default router;

import { Router } from "express";
import userRoutes from "./users/user.routes.js";

const router = Router();

router.use("/users", userRoutes);

export default router;
