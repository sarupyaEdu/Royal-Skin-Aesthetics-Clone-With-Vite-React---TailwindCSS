# Homework React Project

This project is a responsive React-based web application built using **Vite**, **Tailwind CSS**, and **React Router DOM**.  
It demonstrates routing, component modularity, and modal pop-ups for interactive user actions (such as calling, WhatsApp chat, and appointment booking).

---

## 🧩 Project Overview

The project includes:

- A fully functional **navigation bar** with dropdowns and routing links.
- **Hero section** (homepage) that serves as the main landing view.
- A dynamic **Services** section linking to multiple product/service detail pages.
- **Popup modals** for:
  - Making an appointment.
  - Call support interaction.
  - WhatsApp chat launch.
- **Fixed floating icons** for quick call and WhatsApp access.
- Global footer and smooth navigation across pages.
- Modern **animations** and **responsive layout**.

---

## 🗂️ Folder Structure

```
homework/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── component/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Herosection.jsx
│   │   ├── PopupModal.jsx
│   │   ├── Fixedicons.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Appointment.jsx
│   │   ├── Contact.jsx
│   │   ├── Scooty.jsx
│   │   ├── Ford_mustang.jsx
│   │   ├── Redpost.jsx
│   │   ├── Cocacola1.jsx
│   │   ├── Cocacola2.jsx
│   │   ├── Cocacola3.jsx
│   │   ├── Ferraribr.jsx
│   │   ├── Ferrariblue.jsx
│   │   ├── Ferrarired.jsx
│   │   ├── Leicastore.jsx
│   │   ├── Blackcoffee.jsx
│   │   └── Fliplighter.jsx
└── node_modules/
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Pratoshabera/homework.git
cd homework
```

### 2️⃣ Install Dependencies

Ensure you have **Node.js (>= 16)** and **npm** or **yarn** installed.

Then run:

```bash
npm install
```

### 3️⃣ Run the Project

```bash
npm run dev
```

This will start the Vite development server.  
You can view the project at:  
👉 **http://localhost:5173**

---

## 🧠 Core Technologies Used

| Technology | Purpose |
|-------------|----------|
| **React.js** | Frontend library for building the UI |
| **Vite** | Fast development build tool |
| **Tailwind CSS** | Utility-first styling framework |
| **React Router DOM** | Client-side routing and navigation |
| **React Icons** | For using vector icons (Call, WhatsApp, etc.) |
| **Framer Motion (optional)** | For entry and transition animations |

---

## 🚀 Key Components

### 🔹 `Navbar.jsx`
- Responsive navigation bar with dropdowns.
- Includes “Make an Appointment” button that triggers a popup modal.

### 🔹 `PopupModal.jsx`
- Reusable modal component used across different pages.
- Controlled via state (`useState`).
- Includes fade-in animation and backdrop blur.

### 🔹 `Fixedicons.jsx`
- Displays floating **Call** and **WhatsApp** icons at bottom-right.
- Opens contextual popups with action buttons (call link or WhatsApp chat).

### 🔹 `App.jsx`
- Defines all routes using `react-router-dom`.
- Integrates Navbar, Footer, and FixedIcons globally.

---

## 🎨 Animations

Basic entry animations are defined in **`index.css`**:
```css
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
```

These are applied to modals and sections for smooth fade-in effects.

---

## 🧪 Linting & Code Quality

The project includes ESLint configuration (`eslint.config.js`) for code consistency.  
Run:

```bash
npm run lint
```

to check for formatting or code issues.

---

## 💡 Recommended Improvements

- Add form handling and validation to the **Appointment** page.
- Use **Framer Motion** for more fluid animations (page transitions, hover effects).
- Convert hardcoded contact info to a config file or environment variables.
- Add a **404 Not Found** route.
- Optimize images and lazy-load large components.

---

## 🧾 License

This project is open source under the **MIT License**.  
You are free to use, modify, and distribute with attribution.

---

## 👤 Author

**Developed by:** Pratosha Bera
🔗 GitHub: [github.com/Pratoshabera](https://github.com/Pratoshabera)
