# Background Color Changer 🎨

A simple yet interactive React application that allows users to dynamically change the background color by clicking color buttons. This project demonstrates fundamental React concepts including **useState hook**, **Props**, **Event handling**, and **Tailwind CSS** styling.

## 📸 Project Overview

The application features:
- A full-screen canvas with a dynamic background color
- A color palette at the bottom with 10 different color options
- Smooth color transitions with CSS duration
- Responsive button layout
- Clean, modern UI with Tailwind CSS

**Technologies Used:**
- React 19
- Vite (Fast development server)
- Tailwind CSS 4
- JavaScript ES6+

---

## 🎯 Learning Concepts

This project demonstrates key React fundamentals:

### 1. **useState Hook**
```jsx
const [color, setColor] = useState('lavender')
```
- `useState` is a React Hook that lets you add state to functional components
- `color` is the current state value
- `setColor` is the function to update the state
- When state changes, the component re-renders with the new data

### 2. **Props & Event Handling**
```jsx
<Button color="red" onClick={() => setColor('red')}/>
```
- `color` prop: passes the button's color to the Button component
- `onClick` prop: passes an event handler function to update the background color
- When a button is clicked, it calls `setColor()` with the new color

### 3. **Component Reusability**
The `Button` component is reused 10 times with different props:
```jsx
<Button color="red" onClick={() => setColor('red')}/>
<Button color="skyblue" onClick={() => setColor('skyblue')}/>
<Button color="green" onClick={() => setColor('green')}/>
{/* ...and 7 more */}
```

### 4. **Inline Styles & Dynamic Styling**
```jsx
style={{backgroundColor: color}}
```
- Uses inline styles to dynamically set the background color
- The style updates whenever the `color` state changes

### 5. **Tailwind CSS Utilities**
- `w-full` - Full width
- `h-screen` - Full viewport height
- `duration-200` - CSS transition duration
- `fixed bottom-8` - Fixed positioning at the bottom
- `flex flex-wrap justify-around` - Flexible button layout
- `rounded-lg` - Rounded corners

---

## 🏗️ Project Structure

```
01_project_bgChanger/
├── src/
│   ├── components/
│   │   └── Button.jsx              # Reusable button component
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # React entry point
│   ├── App.css                     # Global styles
│   └── index.css                   # Global CSS imports
├── public/                         # Static assets
├── index.html                      # HTML entry point
├── package.json                    # Project dependencies
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint rules
├── README.md                       # This file
└── .gitignore                      # Git ignore rules
```

---

## 📁 File Breakdown

### **App.jsx** - Main Component

```jsx
import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState('lavender')  // State management

  return (
    <div className="w-full h-screen duration-200" 
         style={{backgroundColor: color}}>
      
      {/* Button container - fixed at bottom */}
      <div className="fixed bottom-8 flex flex-wrap justify-around mx-10 bg-black rounded-lg p-1">
        
        {/* 10 color buttons */}
        <Button color="red" onClick={() => setColor('red')}/>
        <Button color="skyblue" onClick={() => setColor('skyblue')}/>
        {/* ...more buttons... */}
      </div>
    </div>
  )
}

export default App
```

**Key Points:**
- `useState('lavender')` initializes the background color to lavender
- The main div's background color is set dynamically via inline style
- `duration-200` creates a smooth 200ms transition between colors
- `fixed bottom-8` keeps the button container fixed at the bottom while scrolling
- Each Button component receives a color and onClick handler

### **Button.jsx** - Reusable Button Component

```jsx
import React from "react";

function Button(props){
    return(
        <button 
            className="text-black px-3 mx-1 rounded-full text-lg font-bold gap-2" 
            style={{backgroundColor: props.color}}
            onClick={props.onClick}
        >
            {props.color.charAt(0).toUpperCase() + props.color.slice(1)}
        </button>
    )
}

export default Button;
```

**Key Points:**
- Receives two props: `color` and `onClick`
- `style={{backgroundColor: props.color}}` colors the button with the passed color
- `onClick={props.onClick}` handles the click event to change the main background
- Button text is the color name with first letter capitalized:
  - `'red'.charAt(0).toUpperCase() + 'red'.slice(1)` → `'Red'`
  - `'skyblue'.charAt(0).toUpperCase() + 'skyblue'.slice(1)` → `'Skyblue'`

---

## 🎨 Color Palette

The application includes 10 color options:

| Button | Color Code | Hex Value |
|--------|-----------|-----------|
| Red | red | #FF0000 |
| Sky Blue | skyblue | #87CEEB |
| Green | green | #008000 |
| Yellow | yellow | #FFFF00 |
| Olive | olive | #808000 |
| Magenta | magenta | #FF00FF |
| Orange | orange | #FFA500 |
| Purple | purple | #800080 |
| Teal | teal | #008080 |
| Pink | pink | #FFC0CB |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Navigate to the project directory**
   ```bash
   cd 01_project_bgChanger
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
   - Click on the color buttons to change the background color!

### Available Scripts

- `npm run dev` - Start Vite development server (hot reload enabled)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

---

## 💡 How It Works

### Step-by-Step Flow

1. **Initial Render**
   - App component renders with `color` state = `'lavender'`
   - Background is set to lavender color
   - 10 Button components are rendered with different colors

2. **User Clicks a Button**
   - Example: User clicks the "Red" button
   - Button's `onClick` handler is triggered
   - Calls `setColor('red')`

3. **State Update**
   - React updates the `color` state to `'red'`
   - Component re-renders with new state value

4. **UI Update**
   - Background color changes from lavender to red
   - CSS `duration-200` class creates a smooth 200ms transition
   - Appears as a smooth color fade, not an instant change

---

## 🔄 Component Communication Flow

```
App.jsx (Parent Component)
  ↓
  [color state: 'lavender']
  ↓
  onClick → setColor('red')
  ↓
  [color state: 'red']
  ↓
  Pass color & onClick to Button components
  ↓
Button.jsx (Child Components)
  ├─ Receives: color="red", onClick={setColor}
  ├─ Renders: <button style={{backgroundColor: 'red'}}>
  └─ On click: Calls onClick handler from parent
```

---

## 🎓 Key Takeaways

### What You Learn

1. **State Management** - How to use `useState` hook
2. **Props** - Passing data and functions to child components
3. **Event Handling** - Handling click events in React
4. **Component Reusability** - Creating reusable components with props
5. **Inline Styling** - Dynamically changing CSS with JavaScript
6. **Tailwind CSS** - Using utility classes for rapid UI development
7. **Re-rendering** - Understanding React's component lifecycle

### Common React Patterns

- **Parent-Child Communication** - Parent passes state and handlers as props
- **Event Binding** - Using arrow functions to pass arguments to handlers
- **Conditional Styling** - Changing styles based on state
- **Component Composition** - Building complex UIs from simple components

---

## 🎯 Practice Exercises

Try enhancing this project:

1. **Add a Reset Button** - Reset background to initial color
   ```jsx
   <button onClick={() => setColor('lavender')}>Reset</button>
   ```

2. **Add Color Display** - Show current color name
   ```jsx
   <p>Current Color: {color}</p>
   ```

3. **Add Random Color Button** - Generate random colors
   ```jsx
   const randomColor = () => {
     const colors = ['red', 'blue', 'green', ...];
     setColor(colors[Math.floor(Math.random() * colors.length)]);
   }
   ```

4. **Add Copy Color Code** - Copy color hex value to clipboard

5. **Dark Mode** - Add dark/light theme toggle

6. **Color History** - Track previously selected colors

---

## 📚 Related Concepts to Learn

1. **useEffect Hook** - Handle side effects in functional components
2. **useContext Hook** - Share state across components without prop drilling
3. **Custom Hooks** - Create reusable stateful logic
4. **Component Props Validation** - Use PropTypes or TypeScript
5. **Controlled Components** - Work with form inputs in React

---

## 🔗 Useful Resources

- [React Documentation - useState](https://react.dev/reference/react/useState)
- [React Documentation - Events](https://react.dev/learn/responding-to-events)
- [React Documentation - Props](https://react.dev/learn/passing-props-to-a-component)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

---

## 🛠️ Troubleshooting

### Issue: Background color not changing
**Solution:** Ensure the main div has the inline style:
```jsx
style={{backgroundColor: color}}
```

### Issue: Buttons not clickable
**Solution:** Check that the `onClick` prop is passed to Button component:
```jsx
<Button color="red" onClick={() => setColor('red')}/>
```

### Issue: Styling not applied
**Solution:** Make sure Tailwind CSS is properly imported in `index.css`:
```css
@import "tailwindcss";
```

---

## 📝 Notes

- The initial background color is set to `'lavender'` - you can change this by modifying the `useState` initial value
- The buttons are laid out using Tailwind's `flex` with `flex-wrap` to adapt to different screen sizes
- The `duration-200` class adds a smooth CSS transition between color changes
- All color names are CSS color keywords - you can also use hex codes like `'#FF0000'`

---

## 📄 License

This project is open source and available for educational purposes.

---

## 👨‍💻 Author

Created as a learning project for React fundamentals and Tailwind CSS.

**Happy Coding! 🚀**
