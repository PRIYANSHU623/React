# Learning React Hooks - Counter Project

This project demonstrates the use of React Hooks, particularly **useState**, which is fundamental to managing component state in functional components.

---

## 📚 Hooks Used in This Project

### 1. **useState** Hook

#### What is useState?
`useState` is a React Hook that allows you to add state to functional components. Before hooks, you had to use class components to manage state. Now, with hooks, you can use state in functional components.

#### Syntax:
```javascript
const [value, setValue] = useState(initialValue);
```

- **value**: The current state value
- **setValue**: A function to update the state value
- **initialValue**: The initial value of the state (optional)

#### How It Works:
When you call `useState`, React returns an array with two elements:
1. The **current state value** (initially set to `initialValue`)
2. A **function to update** that state value

#### Real Example from This Project:

```javascript
import { useState } from 'react';

function App() {
  // Declare state variable 'counter' with initial value of 15
  const [counter, setCounter] = useState(15);

  // Function to increase counter value
  const addValue = () => {
    console.log("clicked", counter); 
    if(counter >= 200) {
      alert("Counter value cannot be greater than 200");
      return;
    } 
    setCounter(counter + 1);  // Updates the counter state
  }

  // Function to decrease counter value
  const removeValue = () => {
    console.log("clicked", counter);
    if(counter <= 0) {
      alert("Counter value cannot be less than 0");
      return;
    }
    setCounter(counter - 1);  // Updates the counter state
  }

  return (
    <>
      <h1>Learning Hooks in React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}
```

#### Key Points to Remember:

✅ **State Updates**: When you call `setCounter(newValue)`, React re-renders the component with the new state.

✅ **Multiple States**: You can use `useState` multiple times in a single component:
```javascript
const [counter, setCounter] = useState(0);
const [name, setName] = useState('');
const [isActive, setIsActive] = useState(false);
```

✅ **Functional Updates**: You can also pass a function to the setter for more complex updates:
```javascript
setCounter(prevCounter => prevCounter + 1);
```

✅ **Immutability**: Always create a new value instead of modifying the existing state directly.

---

## 🚀 Other Common React Hooks (Not Used Here But Good to Know)

### **useEffect**
Used to perform side effects in functional components (like fetching data, setting up subscriptions, etc.)

### **useContext**
Used to consume context values without prop drilling

### **useReducer**
Used for more complex state logic (alternative to useState)

### **useRef**
Used to access DOM elements directly or keep mutable values that don't cause re-renders

### **useMemo**
Used to memoize expensive computations

### **useCallback**
Used to memoize function references

---

## 💡 Hooks Rules

1. **Call Hooks at the Top Level**: Don't call hooks inside loops, conditions, or nested functions.
2. **Call Hooks Only from React Functions**: Call hooks from functional components or custom hooks.
3. **Use the ESLint Plugin**: Install `eslint-plugin-react-hooks` to enforce these rules.

---

## 📖 Learning Objectives

- ✔️ Understand what `useState` is and why it's important
- ✔️ Learn how to declare and update state with `useState`
- ✔️ Understand how state updates trigger re-renders
- ✔️ Practice managing component-level state with hooks 