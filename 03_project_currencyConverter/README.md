# 💱 Currency Converter Application

A modern, responsive currency converter web application built with **React**, **Vite**, and **Tailwind CSS**. This project demonstrates the power of **custom React hooks** for data fetching and reusability.

---

## 🎯 Features

- ✅ Real-time currency conversion using live exchange rates
- ✅ Support for multiple currencies worldwide
- ✅ Swap currencies functionality
- ✅ Beautiful, responsive UI with Tailwind CSS
- ✅ Custom React hook for data fetching (`useCurrencyInfo`)
- ✅ Reusable components architecture
- ✅ Fast performance with Vite

---

## 📦 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **API**: [FawazAhmed Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api)
- **Node.js**: ESLint for code quality

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone/Navigate to the project:**
   ```bash
   cd 03_project_currencyConverter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
src/
├── App.jsx                 # Main application component
├── App.css                 # App-specific styles
├── main.jsx                # Entry point
├── index.css               # Global styles
├── components/
│   ├── InputBox.jsx        # Reusable input component
│   └── index.js            # Components export file
├── hooks/
│   └── useCurrencyInfo.js  # Custom hook for currency data
└── assets/
    └── bg.jpg              # Background image
```

---

## 🎨 Key Components

### 1. **App.jsx** - Main Component
The heart of the application that manages:
- State for amounts and currencies
- Currency conversion logic
- Swap functionality
- UI rendering with background image

**Key State Variables:**
```javascript
const [amount, setAmount] = useState(1)           // Input amount
const [from, setFrom] = useState("usd")           // Source currency
const [to, setTo] = useState("inr")               // Target currency
const [convertedAmount, setConvertedAmount] = useState(0) // Result
```

### 2. **InputBox.jsx** - Reusable Component
A modular component that handles:
- Amount input field
- Currency selection dropdown
- Labels and disabled states
- Props for flexibility

**Props:**
```javascript
{
  label,                    // "From" or "To" label
  amount,                   // Current amount value
  onAmountChange,          // Callback when amount changes
  onCurrencyChange,        // Callback when currency changes
  currencyOptions,         // Array of available currencies
  selectCurrency,          // Currently selected currency
  amountDisable,           // Disable amount input
  currencyDisable,         // Disable currency selection
  className                // Additional CSS classes
}
```

### 3. **useCurrencyInfo.js** - Custom Hook ⭐
A custom React hook that fetches real-time currency exchange rates.

---

## 🪝 Understanding Custom Hooks

### What is a Custom Hook?

A **custom hook** is a JavaScript function that:
- Starts with the word `use` (naming convention)
- Uses React hooks like `useState`, `useEffect`, etc.
- Encapsulates reusable logic
- Can be used in multiple components
- Promotes code reusability and cleaner components

### Why Custom Hooks?

✅ **Reusability**: Share logic across components without prop drilling  
✅ **Cleaner Code**: Extract complex logic from components  
✅ **Easier Testing**: Test logic independently  
✅ **State Management**: Manage complex state logic  
✅ **DRY Principle**: Don't Repeat Yourself  

---

## 🔧 The `useCurrencyInfo` Custom Hook - Explained

### Hook Code:

```javascript
import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    
    return data
}

export default useCurrencyInfo;
```

### How It Works:

1. **Initialize State**:
   - `data` holds the exchange rates object (initially empty `{}`)

2. **Fetch Data with useEffect**:
   - Runs whenever the `currency` parameter changes
   - Fetches exchange rates from the API
   - Parses the JSON response
   - Extracts the currency-specific data and updates state

3. **Return Data**:
   - Returns an object with exchange rates for all currencies
   - Example: `{ usd: 1, eur: 0.92, gbp: 0.79, inr: 83.45, ... }`

### Example API Response:

```json
{
  "usd": {
    "usd": 1,
    "eur": 0.92,
    "gbp": 0.79,
    "inr": 83.45,
    "jpy": 110.25,
    ...
  }
}
```

---

## 💡 How to Use the Custom Hook

### In App.jsx:

```javascript
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [from, setFrom] = useState("usd")
  
  // Call the custom hook with a currency parameter
  const currencyInfo = useCurrencyInfo(from)
  
  // Get available currencies as array
  const options = Object.keys(currencyInfo)
  
  // Use the data for conversion
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  
  return (
    // JSX here
  )
}
```

### Step-by-Step Flow:

1. **User enters currency**: `setFrom("eur")`
2. **Hook detects change**: `useEffect` dependency `[currency]` triggers
3. **Data fetched**: API call for EUR exchange rates
4. **State updated**: `currencyInfo` now contains EUR rates
5. **Component re-renders**: New options available
6. **User selects target**: `setTo("gbp")`
7. **User enters amount**: Conversion calculation ready
8. **Convert button clicked**: `amount * currencyInfo[to]` = result

---

## 🎯 Conversion Logic

```javascript
// Get the exchange rate for target currency
const rate = currencyInfo[to]

// Multiply input amount by the rate
const convertedAmount = amount * rate

// Example:
// amount = 100 USD, to = "inr", currencyInfo["inr"] = 83.45
// convertedAmount = 100 * 83.45 = 8345 INR
```

---

## 🔄 Swap Functionality

```javascript
const swap = () => {
  setFrom(to)              // Source becomes target
  setTo(from)              // Target becomes source
  setConvertedAmount(amount)    // Result becomes input
  setAmount(convertedAmount)    // Input becomes result
}
```

---

## 📚 Creating Your Own Custom Hooks

### Example: `useFetch` Hook

```javascript
import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}

export default useFetch
```

### Usage:

```javascript
function MyComponent() {
  const { data, loading, error } = useFetch('https://api.example.com/data')
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  
  return <div>{JSON.stringify(data)}</div>
}
```

---

## ✨ Best Practices for Custom Hooks

### 1. **Always Start with `use`**
```javascript
// ✅ Good
function useCounter() { }

// ❌ Bad
function counter() { }
```

### 2. **Keep It Focused**
Each hook should do one thing well.

### 3. **Handle Dependencies**
Always include all dependencies in `useEffect`:
```javascript
useEffect(() => {
  // code
}, [dependency1, dependency2])
```

### 4. **Return What's Needed**
```javascript
// ✅ Good - return array/object
return [data, setData]
return { data, loading, error }

// ❌ Bad - too much
return { data, setData, loading, error, refetch, cache, ... }
```

### 5. **Document Your Hooks**
```javascript
/**
 * Fetches currency exchange rates
 * @param {string} currency - The base currency code (e.g., 'usd')
 * @returns {object} Object with exchange rates for all currencies
 */
function useCurrencyInfo(currency) {
  // ...
}
```

---

## 🐛 Common Issues & Solutions

### Issue: Data not updating when currency changes?
**Solution**: Check the `useEffect` dependency array includes the parameter.

### Issue: Multiple API calls happening?
**Solution**: Ensure hooks are called at the top level, not conditionally.

### Issue: Stale data on component mount?
**Solution**: Initialize state with default values properly.

---

## 🚀 Future Enhancements

- [ ] Add offline currency rates caching
- [ ] Implement historical exchange rate charts
- [ ] Add more currency options
- [ ] Dark mode toggle
- [ ] Favorites/bookmarks feature
- [ ] LocalStorage for previous conversions
- [ ] Error boundary for API failures

---

## 📚 Learning Resources

- [React Hooks Documentation](https://react.dev/reference/react)
- [Custom Hooks Guide](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [API Used](https://github.com/fawazahmed0/currency-api)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 📝 Notes

- The API updates rates daily
- Exchange rates are approximate
- No API key required for this service
- Rate limiting may apply for high-volume requests

---

**Happy Converting! 💰✨**
