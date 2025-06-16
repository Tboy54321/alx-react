# ALX React

This repository contains my implementations of the React.js tasks from the ALX Frontend Specialization curriculum. Each solution explores React fundamentals, advancing toward Redux integration and state management.

---

## Table of Contents

- [About](#about)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [How to Use](#how-to-use)
- [Tasks & Solutions](#tasks--solutions)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## About

The ALX React project covers hands‑on React development—from setting up Webpack to creating functional and class components, managing props, state, inline styling, immutability, and integrating Redux for state management lessons.

---

## Project Structure

```
alx-react/
│
├── 0x00-Webpack/                              # Task 0: Webpack setup
│   ├── README.md
│   └── src/…
├── 0x01-react_intro/                          # Task 1: Introduction to React
│   ├── README.md
│   └── src/…
├── 0x02-react_props/                          # Task 2: Props usage
│   ├── README.md
│   └── src/…
├── 0x03-React_component/                      # Task 3: Building components
│   ├── README.md
│   └── src/…
├── 0x04-React_inline_styling/                 # Task 4: Inline styles in components
│   ├── README.md
│   └── src/…
├── 0x05-react_state/                          # Task 5: State management
│   ├── README.md
│   └── src/…
├── 0x06-React_Immutable/                      # Task 6: Immutability techniques
│   ├── README.md
│   └── src/…
├── 0x07-react_redux_action_creator_normalizr/ # Task 7: Redux + action creators + normalizr
│   ├── README.md
│   └── src/…
├── 0x08-react_redux_reducer_selector/         # Task 8: Redux reducers & selectors
│   ├── README.md
│   └── src/…
├── 0x09-react_redux_connectors_and_providers/ # Task 9: Connect & Provider integration
│   ├── README.md
│   └── src/…
├── .gitignore
└── README.md                                  # Main documentation (you're here!)
```

---

## Requirements

- Node.js & npm
- React 17+
- Webpack & Babel (for tasks 0–4)
- Redux and Normalizr (for tasks 7–9)

---

## How to Use

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Tboy54321/alx-react.git
   cd alx-react
   ```

2. **Navigate to a task folder & install dependencies:**
   ```sh
   cd 0x01-react_intro
   npm install
   ```

3. **Run the development server or build:**
   ```sh
   npm start
   # or
   npm build
   ```

Each task’s folder includes its own README.md with detailed setup and usage instructions.

---

## Tasks & Solutions

### 0x00‑Webpack: Webpack setup
- **Language:** JavaScript
- **Description:** Configured Webpack with loaders and dev‑server.
- **Approach:** Created `webpack.config.js`, added babel-loader, CSS & asset handling, and local dev environment.
- **Files:** `webpack.config.js`, `package.json`, etc.
- **Details:** See `0x00-Webpack/README.md`.

### 0x01‑react_intro: Introduction to React
- **Language:** JavaScript
- **Description:** Basic React app setup using create-react-app or Webpack.
- **Approach:** Created functional components and rendered them.
- **Files:** `src/App.js`, `README.md`.

### 0x02‑react_props: Props usage
- **Description:** Demonstrated how to pass and utilize props in components.
- **Approach:** Defined parent and child components exchanging data via props.

### 0x03‑React_component: Building components
- **Description:** Implemented reusable functional/class components.
- **Approach:** Showed lifecycle methods and component composition.

### 0x04‑React_inline_styling: Inline styles in components
- **Description:** Applied inline styling using JavaScript object syntax.
- **Approach:** Styled components with camel‑cased properties.

### 0x05‑react_state: State management
- **Description:** Local state handling in components.
- **Approach:** Used `useState` and `setState` to update UI on events.

### 0x06‑React_Immutable: Immutability
- **Description:** Managed component state immutably for better performance.
- **Approach:** Used spread operators and immutable update patterns.

### 0x07‑react_redux_action_creator_normalizr: Redux, Actions, Normalizr
- **Description:** Set up Redux store with actions and normalized payload.
- **Approach:** Created action creators, applied normalizr schema normalization.

### 0x08‑react_redux_reducer_selector: Reducers & Selectors
- **Description:** Defined Redux reducers and selectors for state access.
- **Approach:** Structured state slices and derived data accessors.

### 0x09‑react_redux_connectors_and_providers: Connect & Provider
- **Description:** Connected React to Redux store using react-redux.
- **Approach:** Implemented `<Provider>`, `connect()`, and `mapStateToProps`.

> Every task has its own folder documenting setup and usage.

---

## Testing

Testing approaches vary by task:

- Unit tests (e.g. Jest) available in tasks 7–9.
- All test instructions are included in each task’s README.md.

---

## Contributing

Contributions welcome!

- ✅ Fork the repo
- ✅ Add component or feature with tests
- ✅ Update relevant README.md
- ✅ Submit a PR

Please maintain structure, naming and documentation style.

---

## License

This project is licensed under the MIT License — see