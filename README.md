# 🤖 GundamBuilder.io

![GundamBuilder.io](https://img.shields.io/badge/Status-In%20Development-blue.svg)
![Next.js](https://img.shields.io/badge/Frontend-Next.js-black?logo=next.js)
![Laravel](https://img.shields.io/badge/Backend-Laravel-red?logo=laravel)

**GundamBuilder.io** is a gamified web application for Gunpla builders. Track your backlogs, log your building progress, earn XP, and level up just like an RPG character. This project uses a decoupled architecture with a Next.js frontend and a Laravel backend.

## 🚀 Features (In Progress)
- **Gamified Build Logs:** Earn XP by moving kits from your backlog to 'completed'.
- **RPG Leveling System:** Level up as you build more Gunpla.
- **Cyber-Mecha UI:** A sleek, modern, dark-themed UI tailored for mecha enthusiasts.

## 🛠️ Technology Stack
- **Frontend:** Next.js (App Router), React, Tailwind CSS, TypeScript
- **Backend:** Laravel 11, PHP 8.2+, SQLite

## 📋 Prerequisites
Before you begin, ensure you have the following installed on your system:
- **Node.js** (v18.0 or newer)
- **npm** (v9.0 or newer)
- **PHP** (v8.2 or newer) - Make sure the `pdo_sqlite` and `sqlite3` extensions are enabled in your `php.ini`.
- **Composer** (v2.0 or newer)

## ⚙️ Installation & Setup

This repository is a monorepo containing both the frontend and backend. 

### 1. Backend (Laravel) Setup
Navigate to the backend directory and set up the Laravel application:
```bash
cd backend

# Install PHP dependencies
composer install

# Copy the environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Run database migrations
php artisan migrate
```

### 2. Frontend (Next.js) Setup
Navigate to the frontend directory and install dependencies:
```bash
cd frontend

# Install Node dependencies
npm install
```

## 🏃‍♂️ Running the Application

You will need two separate terminal windows to run both the backend and frontend simultaneously.

**Terminal 1 (Backend API):**
```bash
cd backend
php artisan serve
```
*The backend API will run on `http://localhost:8000`*

**Terminal 2 (Frontend Client):**
```bash
cd frontend
npm run dev
```
*The frontend application will run on `http://localhost:3000`*

## 📂 Project Structure
```text
GundamBuilder/
├── backend/       # Laravel API backend
└── frontend/      # Next.js React frontend
```
