# 🧮 Vanilla JavaScript Calculator

A sleek, responsive calculator built with **React**, **TypeScript**, and **Tailwind CSS**, featuring a modern black UI with green accents. Designed for intuitive use across devices, this calculator handles full arithmetic operations with precision and style.

---

## 🚀 Features

- ✅ **Arithmetic Operations** — Addition, subtraction, multiplication, and division  
- 🔢 **Decimal Support** — Accurate floating-point calculations  
- 📱 **Responsive Design** — Optimized for desktop and mobile  
- 🎨 **Modern UI** — Black and green theme with intuitive layout  
- ⌨️ **Keyboard Support** — Smooth interactions and hover effects  
- 🛡️ **Error Handling** — Robust logic and state management

---

## 🎨 Design Highlights

| Element            | Style Description                          |
|--------------------|---------------------------------------------|
| Background         | Sleek black for a professional aesthetic    |
| Calculator Body    | Dark gray with subtle borders               |
| Number Buttons     | Medium gray with white text                 |
| Operator Buttons   | Vibrant green for clear visual distinction  |
| Display            | Dark background with bright white text      |

---

## 🧪 Examples of Calculations

Here are a few sample interactions to showcase the calculator’s capabilities:

| Input Sequence            | Expected Output | Description                          |
|---------------------------|------------------|--------------------------------------|
| `7 + 3 =`                 | `10`             | Basic addition                       |
| `9 - 4 =`                 | `5`              | Basic subtraction                    |
| `6 × 7 =`                 | `42`             | Multiplication                       |
| `8 ÷ 2 =`                 | `4`              | Division                             |
| `5 + 3 × 2 =`             | `11`             | Operator precedence (PEMDAS)         |
| `0.1 + 0.2 =`             | `0.3`            | Floating-point precision             |
| `12 ÷ 0 =`                | `Error`          | Division by zero handling            |
| `C`                       | `0`              | Clear/reset display                  |

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript  
- **Styling**: Tailwind CSS with custom tokens  
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)  
- **Framework**: Next.js (App Router)

---

## 📦 Getting Started

### Prerequisites

- Node.js v18+  
- npm or yarn

### Installation Steps

```bash
git clone <repository-url>
cd vanilla-javascript-calculator
npm install
npm run dev
Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage Guide

- Click number buttons (0–9) to input digits  
- Use operators (+, −, ×, ÷) for calculations  
- Press `=` to compute  
- Press `C` to reset  
- Use `.` for decimal input

---

## Project Structure

```bash
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── calculator.tsx       # Main calculator logic
│   └── ui/                  # shadcn/ui components
├── README.md
└── package.json

---
## Contributing
1. Fork the repo

2. Create a feature branch:
git checkout -b feature/amazing-feature

3. Commit your changes:
git commit -m 'Add amazing feature'

4. Push to GitHub:
git push origin feature/amazing-feature

5. Submit a Pull Request

---
## Contact
🌐 digitalhus.com

📧 hussein@digitalhus.com

💼 LinkedIn

🐦 Twitter

📍 Toronto, ON, Canada

License
This project is licensed under the MIT License — feel free to use, modify, and share.

Code
Let me know if you'd like help adding badges, deployment instructions, or a visual walkthrough to make this even more engaging.

Want me to help you add GitHub badges like `build status`, `license`, or `live demo` next? Or maybe a GIF preview of the calculator in action? Let's make this README pop!
