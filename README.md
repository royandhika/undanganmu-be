# Undanganmu Backend

Backend aplikasi undangan online yang dibangun dengan Node.js, Express.js (TypeScript), dan Prisma ORM. Menggunakan SQLite untuk development.

## Fitur Utama (Saat Ini & Rencana)

*   Manajemen Pengguna (Registrasi, Login)
*   Manajemen Sesi (menggunakan database)
*   Pembuatan & Kustomisasi Undangan
*   Manajemen Saldo Pengguna & Transaksi (untuk top-up)

## Teknologi

*   **Bahasa**: TypeScript
*   **Runtime**: Node.js
*   **Framework Web**: Express.js
*   **ORM**: Prisma
*   **Database (Dev)**: SQLite

## Struktur Proyek

Proyek ini mengikuti struktur modular dengan pemisahan tanggung jawab (Routes -> Controllers -> Services) untuk skalabilitas dan kemudahan pemeliharaan.

## Setup & Menjalankan Proyek

1.  **Prasyarat**: Pastikan Anda sudah menginstal Node.js dan npm (atau yarn).
2.  **Instalasi Dependensi**:
    ```bash
    npm install
    ```
3.  **Konfigurasi Environment**:
    Buat file `.env` di root proyek Anda dan isi dengan variabel lingkungan yang diperlukan, contoh:
    ```env
    DATABASE_URL="file:./prisma/dev.db"
    PORT=3000
    ```
4.  **Setup Database (Prisma)**:
    Jalankan migrasi Prisma untuk membuat skema database Anda:
    ```bash
    npx prisma migrate dev --name initial_setup
    ```
    *(Jika Anda baru memulai atau ingin reset, Anda bisa menghapus `prisma/dev.db` dan `prisma/migrations` terlebih dahulu.)*
5.  **Menjalankan Server**:
    Untuk development:
    ```bash
    npm run dev
    ```
    Server akan berjalan di `http://localhost:3000` (atau port yang Anda tentukan).

## Endpoint Contoh

*   `GET /`
*   `GET /api/v1/users`

---
