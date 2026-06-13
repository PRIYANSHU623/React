# Tailwind Props - Learning React

A beginner-friendly React project demonstrating the use of **Tailwind CSS** for styling and **Props** for passing data between components. This project is built with **Vite** and **React 19**.

## 📚 Learning Objectives

This project covers two fundamental React concepts:

1. **Tailwind CSS** - A utility-first CSS framework for rapid UI development
2. **Props** - The primary mechanism for passing data from parent to child components

---

## 🎯 Project Overview

The project demonstrates a simple card component system where:
- Parent component (`App.jsx`) creates data and passes it to child components using **props**
- Child component (`Card.jsx`) receives and displays the data with **Tailwind CSS** styling
- Responsive design using Tailwind's responsive utilities (like `md:flex-row`)

---

## 🔧 Tailwind CSS in React

### What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that helps you build modern designs without writing custom CSS. Instead of creating class definitions, you use pre-defined utility classes directly in your HTML/JSX.

### Key Benefits

- **Rapid Development**: Build layouts quickly with predefined utility classes
- **Consistency**: Ensures consistent spacing, colors, and design across your app
- **Customization**: Easily customize the default configuration
- **Small Bundle Size**: Only includes the CSS you actually use
- **Responsive Design**: Built-in responsive prefixes (`sm:`, `md:`, `lg:`, etc.)

### Tailwind Classes Used in This Project

#### Spacing & Layout
- `p-4` / `p-7` - Padding (1rem / 1.75rem)
- `gap-6` / `gap-8` - Gap between flex items
- `size-48` - Width and height (12rem)

#### Display & Flexbox
- `flex` - Enable flexbox layout
- `flex-col` - Flex direction column (stack vertically)
- `flex-row` - Flex direction row (arrange horizontally)
- `items-center` - Align items to center
- `items-start` - Align items to start

#### Responsive Design
- `md:flex-row` - On medium screens and up, change to row layout
- `md:gap-8` - On medium screens, increase gap
- `md:items-start` - On medium screens, align items to start

#### Colors & Text
- `bg-green-500` - Background color (green)
- `text-white` - Text color (white)
- `text-sky-500` - Text color (sky blue)
- `text-gray-600` - Text color (gray)
- `dark:text-gray-400` - Dark mode text color

#### Styling
- `rounded-lg` - Border radius (0.5rem)
- `rounded-2xl` - Border radius (1rem)
- `rounded-md` - Border radius (0.375rem)
- `font-medium` - Font weight (500)
- `text-2xl` - Font size (1.5rem)
- `shadow-xl` - Box shadow (extra large)

### Tailwind Setup in Vite

The project uses Tailwind CSS v4 with the Vite plugin for optimal performance:

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.3.1",
    "tailwindcss": "^4.3.1"
  }
}
```

The Vite configuration automatically processes Tailwind CSS classes.

---

## 📦 Props in React

### What are Props?

**Props** (short for "properties") are how React components communicate with each other. They are:
- **Read-only** - A child component cannot modify props received from its parent
- **Immutable** - Props flow one way: from parent to child
- **Objects** - Props can be strings, numbers, objects, arrays, or even functions

### How Props Work

```
Parent Component (App.jsx)
        ↓
   Passes Data via Props
        ↓
Child Component (Card.jsx)
   Receives & Uses Props
```

### Defining and Using Props

#### 1. **Passing Props (Parent Component)**

In `App.jsx`, we create data and pass it to the `Card` component:

```jsx
function App() {
  let myObj = {
    username: "Priyanshu",
    age: 22, 
    email: "priyanshu@example.com"
  }

  let newArr = [1, 2, 3, 4];

  return (
    <>
      <Card 
        username="Learning React" 
        someObject={myObj} 
        someArr={newArr}
      />
    </>
  );
}
```

**Key Points:**
- Props are passed like HTML attributes
- You can pass strings, objects, arrays, numbers, booleans, etc.
- Use curly braces `{}` for JavaScript values
- Multiple props can be passed to a single component

#### 2. **Receiving Props (Child Component)**

In `Card.jsx`, we receive and use the props:

```jsx
function Card(props) {
  // Accessing props
  console.log(props.username)    // "Learning React"
  console.log(props.someObject)  // { username: "Priyanshu", ... }
  console.log(props.someArr)     // [1, 2, 3, 4]
  
  return (
    <span className="font-medium text-sky-500">
      {props.username}
    </span>
  );
}
```

### Destructuring Props

React allows you to destructure props for cleaner code:

#### Without Destructuring
```jsx
function Card(props) {
  return <span>{props.username}</span>;
}
```

#### With Destructuring (Recommended)
```jsx
function Card({ username, someObject, someArr }) {
  return <span>{username}</span>;
}
```

**Benefits of Destructuring:**
- Cleaner, more readable code
- Less repetition
- Immediately see what props the component expects
- Easier to refactor

### Types of Props

#### 1. String Props
```jsx
<Card username="Learning React" />
```

#### 2. Object Props
```jsx
const user = { name: "Priyanshu", age: 22 };
<Card user={user} />
```

#### 3. Array Props
```jsx
const items = [1, 2, 3, 4];
<Card items={items} />
```

#### 4. Boolean Props
```jsx
<Card isActive={true} />
<Card isActive />  {/* Shorthand for true */}
```

#### 5. Function Props
```jsx
<Card onClick={() => console.log('Clicked')} />
```

### Props Best Practices

✅ **Do:**
- Pass data needed by child components via props
- Destructure props in the function signature
- Keep props simple and focused
- Document prop types (consider using PropTypes or TypeScript)

❌ **Don't:**
- Try to modify props directly (they're immutable)
- Pass too many props (use composition or state management instead)
- Rely on props for complex state (use React Context or state management)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd tailwind_props
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit `http://localhost:5173` (or the URL shown in terminal)
   - You'll see the card components rendered with Tailwind styling

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code with ESLint

---

## 📁 Project Structure

```
tailwind_props/
├── src/
│   ├── components/
│   │   └── card.jsx          # Card component (receives props)
│   ├── App.jsx               # Main component (passes props)
│   ├── main.jsx              # React entry point
│   ├── App.css               # Global styles
│   └── index.css             # Global CSS (Tailwind imports)
├── public/                   # Static assets
├── index.html                # HTML entry point
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── README.md                 # Documentation
└── eslint.config.js          # ESLint configuration
```

---

## 💻 Code Examples

### Example 1: Basic Props Usage

**Parent (App.jsx):**
```jsx
<Card username="Learning React" />
```

**Child (Card.jsx):**
```jsx
function Card({ username }) {
  return <span>{username}</span>;
}
```

### Example 2: Multiple Props with Different Types

**Parent (App.jsx):**
```jsx
const user = { name: "Priyanshu", age: 22 };
const years = [2024, 2025];

<Card 
  username="Profile" 
  userData={user}
  years={years}
  isActive={true}
/>
```

**Child (Card.jsx):**
```jsx
function Card({ username, userData, years, isActive }) {
  return (
    <div>
      <h1>{username}</h1>
      <p>{userData.name}, {userData.age}</p>
      <p>Years: {years.join(', ')}</p>
      <p>Active: {isActive ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

### Example 3: Responsive Tailwind Design

```jsx
<div className="flex flex-col gap-6 p-7 md:flex-row md:gap-8">
  {/* On small screens: column layout, gap-6, padding-7 */}
  {/* On medium screens and up: row layout, gap-8 */}
</div>
```

---

## 🎨 Tailwind CSS Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Utility Reference](https://tailwindcss.com/docs/utility-first)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Dark Mode](https://tailwindcss.com/docs/dark-mode)

---

## 📖 React Props Resources

- [React Official Documentation - Props](https://react.dev/learn/passing-props-to-a-component)
- [React Props vs State](https://react.dev/learn/state-a-components-memory)

---

## 🔄 Next Steps to Learn

1. **State Management** - Learn how to use `useState` hook to manage component state
2. **Event Handling** - Pass functions as props and handle events
3. **Conditional Rendering** - Render components based on props
4. **Component Composition** - Build complex UIs by composing components
5. **Context API** - Share data between components without prop drilling
6. **Custom Hooks** - Create reusable logic with custom hooks

---

## 📝 Notes

- The Card component demonstrates both props usage and Tailwind styling
- Multiple instances of the Card component show how reusable components are
- The responsive classes (`md:flex-row`, `md:items-start`) adapt layout on different screen sizes
- Props make components flexible and reusable

---

## 📄 License

This project is open source and available for educational purposes.

---

## 👨‍💻 Author

Learning React - Created for educational purposes to understand Tailwind CSS and Props in React.

**Happy Learning! 🚀**
