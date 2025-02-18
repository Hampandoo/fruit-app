# 🍏 Nuxt 3 Fruit App

## 📌 Project Description
This project is a **Nuxt 3 + Vue 3 + Pinia** web application that allows users to browse fruits, apply dynamic nutritional filters, add fruits to favorites, and view fruit groups by family.

## 📦 **Installation & Setup**
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/nuxt3-fruit-app.git
   cd nuxt3-fruit-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create and configure the .env file: If the .env file does not exist, create it in the root directory and add the following field:**
   ```sh
   VITE_API_BASE_URL="https://www.fruityvice.com/api/"
   ```
4. **Start the local development server:**
   ```sh
   npm run dev
   ```

## 🎯 **Optimizations**
- **Using `shallowRef()`** for caching data.
- **`v-memo`** is used in lists to prevent redundant re-renders.
- **Favorites are stored in `localStorage`**, ensuring persistence across reloads.

⚠️ Note: Some functionalities may not work correctly on GitHub Pages, such as adding fruits to favorites, due to the limitations of a purely static environment.
