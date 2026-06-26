# ⚽ FIFA Player Cards – React Checkpoint 2

<div align="center">

# React Checkpoint 2

A modern React application that displays FIFA player cards using reusable components, props, dynamic rendering, and React Bootstrap.

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7952B3?style=for-the-badge&logo=bootstrap)
![React Bootstrap](https://img.shields.io/badge/React--Bootstrap-2.x-41E0FD?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</div>

---

# 📖 Overview

This project is a React checkpoint focused on building reusable UI components using **functional components**, **props**, and **React Bootstrap**.

The application displays a collection of famous football players as responsive cards. Player information is stored in a separate data file and rendered dynamically using the JavaScript `map()` method.

The project demonstrates good React practices by separating data from presentation and creating reusable components.

---

# ✨ Features

- ⚛️ Built with React Functional Components
- 📦 Reusable Player Card Component
- 📋 Dynamic rendering using `map()`
- 🧩 Props destructuring
- 🎨 Styled using React Bootstrap
- 📱 Responsive layout
- 📂 Organized project structure
- 🔄 Easy to extend with additional players

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|----------|
| React | Frontend Library |
| JavaScript ES6+ | Programming Language |
| React Bootstrap | UI Components |
| Bootstrap 5 | Responsive Styling |
| CSS3 | Custom Styling |

---

# 📁 Project Structure

```
React-checkpoint2-main/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   │
│   ├── components/
│   │   ├── Player.js
│   │   ├── PlayersList.js
│   │   └── players.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# 🧩 Component Architecture

```
App
│
└── PlayersList
      │
      ├── Player
      ├── Player
      ├── Player
      └── Player
```

---

# 📂 Components Description

## App Component

Acts as the root component.

Responsibilities:

- Displays the application title
- Loads Bootstrap styles
- Renders the Players List
- Displays the footer

---

## PlayersList Component

Responsible for:

- Importing player data
- Looping through the array using `map()`
- Rendering one `Player` component for every object

---

## Player Component

A reusable card component that displays:

- Player Image
- Player Name
- Team
- Nationality
- Jersey Number
- Age

Default values are provided for all props, making the component robust against missing data.

---

## players.js

Contains an array of player objects.

Each object includes:

```javascript
{
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageUrl
}
```

Separating the data from the UI keeps the project clean and scalable.

---

# ⚙️ Installation

## Clone the repository

```bash
git clone <repository-url>
```

---

## Navigate into the project

```bash
cd React-checkpoint2-main
```

---

## Install dependencies

```bash
npm install
```

---

## Start the development server

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

# 📦 Available Scripts

### Start development server

```bash
npm start
```

---

### Run tests

```bash
npm test
```

---

### Build for production

```bash
npm run build
```

---

### Eject configuration

```bash
npm run eject
```

---

# 🎯 React Concepts Demonstrated

- Functional Components
- Component Composition
- JSX
- Props
- Props Destructuring
- Default Props (via default parameter values)
- Dynamic Rendering
- Array Mapping
- Component Reusability
- External Data Management
- Responsive UI Design

---

# 💡 Application Workflow

```
Player Data
      │
      ▼
players.js
      │
      ▼
PlayersList Component
      │
      ▼
map()
      │
      ▼
Player Component
      │
      ▼
Bootstrap Card
      │
      ▼
Rendered UI
```

---

# 🎨 UI Features

- Modern Bootstrap cards
- Responsive Flexbox layout
- Player images
- Organized information display
- Clean typography
- Footer section
- Consistent spacing

---

# 🚀 Future Improvements

Some ideas to enhance the project:

- 🔍 Search players
- 🎯 Filter by nationality
- 🏆 Filter by club
- ⭐ Favorite players
- ❤️ Like button
- 📊 Player statistics
- 🌙 Dark mode
- 📱 Mobile optimization
- 🌍 Fetch player data from an API
- 🎞 Card animations
- 🔄 Sorting options
- Pagination for large datasets

---

# 📚 Learning Outcomes

By completing this project, you practice:

- Building reusable React components
- Passing data through props
- Organizing React applications
- Separating UI from data
- Rendering lists dynamically
- Working with React Bootstrap
- Creating maintainable component structures

---

# 👨‍💻 Author

**Yassine Kalthoum**

React Checkpoint 2 — FIFA Player Cards

Designed with ❤️ using React and React Bootstrap.

---

# 📄 License

This project was developed for educational purposes as part of a React learning checkpoint.

Feel free to use, modify, and extend it for learning and personal projects.

---

<div align="center">

**⭐ If you found this project helpful, consider giving it a star! ⭐**

</div>
