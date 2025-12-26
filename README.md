# 📚 Library Management System

A modern, React-based web application for managing a library's collection. Users can add, edit, delete, and borrow books, as well as view borrowing summaries — all built with TypeScript, Redux Toolkit, TailwindCSS, and Vite.

---

# Related  Links

* [Backend Repository](https://github.com/imtiaz-zihad/Library-Management-Api)
*  [Backend link](https://libary-management-system-ten.vercel.app)
*  [Live link](https://library-management-frontend-site.vercel.app)

---

## 📘 Introduction

This project allows for efficient tracking and management of books in a library or personal collection. It includes a user-friendly interface to handle books and borrowing operations with validation, availability checks, and real-time updates.

---

## ✨ Features

* **Book List Table**: View all books with key details like title, author, genre, and availability.
* **Add Book**: Create new book entries with validations.
* **Edit Book**: Update book details using a pre-filled form.
* **Delete Book**: Remove a book with confirmation.
* **Borrow Book**: Borrow books with due dates and quantity tracking.
* **Borrow Summary**: Aggregated view of borrowed books and their quantities.
* **Real-time Updates**: UI reflects state changes instantly after any CRUD operation.
* Built with Radix UI, Redux Toolkit, TailwindCSS, and TypeScript.

---

## 💾 Installation

```bash
# Clone the repository
git clone https://github.com/istiak19/Library-Management-frontend
cd Library-Management-frontend

# Install dependencies
npm install
```

---

## 🚀 Usage

```bash
# Start development server
npm run dev

# Build the project
npm run build

# Preview the production build
npm run preview

# Lint the code
npm run lint
```

---

## 🌐 Pages & Routes

| Route             | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| `/books`          | Main page showing all books in a table with edit/delete/borrow options |
| `/create-book`    | Form to add a new book                                                 |
| `/books/:id`      | Detailed view of a selected book                                       |
| `/edit-book/:id`  | Form to update book details                                            |
| `/borrow/:bookId` | Borrow form for the selected book                                      |
| `/borrow-summary` | Summary table of borrowed books                                        |

---

## ⚙️ Configuration

No special environment configuration is required for running the app locally. However, you may include `.env` files for API base URLs or keys if needed in production.

---

## 📦 Dependencies

### Runtime

* `react`, `react-dom` – UI framework
* `@reduxjs/toolkit`, `react-redux` – State management
* `@radix-ui/react-*` – UI primitives
* `react-hook-form` – Form handling
* `date-fns` – Date utilities
* `tailwindcss`, `daisyui` – Styling
* `sweetalert2` – Confirmation dialogs
* `react-router` – Routing

### Development

* `vite` – Fast dev/build tool
* `typescript` – Static typing
* `eslint` – Linting
* `@vitejs/plugin-react` – React support for Vite

---

## 🔁 Development Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

---

## 🧪 Examples

* **Adding a Book**:

  * Go to `/create-book`
  * Fill in: title, author, genre, ISBN, description, copies
  * Submit and view in the `/books` list

* **Borrowing a Book**:

  * Click *Borrow* next to a book
  * Enter quantity and due date
  * Submit and view in `/borrow-summary`

---

## 🐞 Troubleshooting

|
## 👥 Contributors


