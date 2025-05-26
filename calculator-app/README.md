# Pixel Calculator

A retro-styled pixel calculator built with React + Vite.  
Implements basic arithmetic (addition, subtraction, multiplication, division, modulo), decimal input, sign toggle, error handling and theming, fully covered by Jest tests and Storybook stories.

---

## 🔗 Demo & Repo

- **Live demo:** https://your-class-server/u/username/calculator-app  
- **Source code:** https://github.com/username/calculator-app  

---

## ✨ Features

- **Basic operations:** +, −, ×, ÷, %  
- **Decimal support:** single decimal point, counts as a character toward 9-digit limit  
- **Sign toggle:** +/− flips the current input  
- **Error handling:**  
  - Display limited to 9 characters  
  - Negative results show `ERROR`  
  - Results > 999 999 999 show `ERROR`  
- **Pixel-perfect UI:** pixelated borders, retro fonts, “vaporwave” theme toggle with shake animation  
- **Accessibility:** keyboard support for digits, operations, Enter, Escape, Backspace  

---

## 🏗️ Technologies

- **Framework:** React (JSX) + Vite  
- **Styling:** vanilla CSS + Google Fonts (“Press Start 2P”)  
- **Logic:** custom `useCalculator` hook  
- **Testing:** Jest + React Testing Library  
- **Storybook:** component explorer & interactions  
- **Linting:** ESLint (no semicolons rule)  

---

## 🚀 Getting Started

1. **Clone & install**  
   ```bash
   git clone https://github.com/username/calculator-app.git
   cd calculator-app
   npm install

2. **Development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**

   ```bash
   npm run build
   npm start
   ```

   > Serves `dist/` at [http://localhost:3000](http://localhost:3000) via built-in server.

---

## 📜 Available Scripts

| Command                   | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| `npm run dev`             | Start Vite development server                                     |
| `npm run build`           | Build for production                                              |
| `npm start`               | Serve production build                                            |
| `npm test`                | Run Jest unit tests & coverage report                             |
| `npm run lint`            | Run ESLint (no semicolons)                                        |
| `npm run storybook`       | Start Storybook at [http://localhost:6006](http://localhost:6006) |
| `npm run build-storybook` | Build Storybook static site                                       |

---

## ✅ Testing

All logic is encapsulated in `src/hooks/useCalculator.js`. Jest tests live in `src/hooks/useCalculator.test.js` and cover:

* Addition, subtraction, multiplication, division
* Decimal input
* 9-digit limit
* Negative and overflow error states

```bash
npm test
```

---

## 🎨 Storybook

Inspect and interact with each component:

```bash
npm run storybook
```

Visit [http://localhost:6006](http://localhost:6006) to see:

* Display: normal vs. error
* DigitButton, OpButton, DecimalButton, EqualButton, SignToggle
* Complete Keypad

---

## 📐 Project Structure

```
calculator-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Display/
│   │   │   ├── Display.jsx
│   │   │   └── Display.stories.jsx
│   │   └── Keypad/
│   │       ├── DigitButton.jsx
│   │       ├── OpButton.jsx
│   │       ├── DecimalButton.jsx
│   │       ├── EqualButton.jsx
│   │       ├── SignToggle.jsx
│   │       ├── Keypad.jsx
│   │       └── *.stories.jsx
│   ├── hooks/
│   │   ├── useCalculator.js
│   │   └── useCalculator.test.js
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.js
├── babel.config.cjs
├── jest.config.cjs
├── .storybook/
│   ├── main.js
│   └── preview.js
├── package.json
└── README.md
```

---

## 📜 Linting

ESLint is configured to:

* Enforce `no-semi` rule (no semicolons)
* Validate JSX and React best practices

```bash
npm run lint
```

---

## 🎯 Deployment

1. Build the app: `npm run build`
2. Serve with your preferred static host (Netlify, Vercel, Surge…)
3. Or run `npm start` to serve locally via Express/Vite preview

---

*Enjoy your pixelated calculations!*