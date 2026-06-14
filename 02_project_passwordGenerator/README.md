# Password Generator

A modern, interactive password generator built with **React** and **Vite**. Generate secure passwords with customizable options including length, numbers, and special symbols. Perfect for creating strong passwords for any application.

## 🎯 Features

- **Customizable Password Length**: Generate passwords from 8 to 100 characters
- **Numbers Toggle**: Optionally include numeric characters (0-9)
- **Symbols Toggle**: Optionally include special symbols (!@#$%^&*()_+~`|}{[]:;?><,./-=)
- **Copy to Clipboard**: One-click copying with visual feedback
- **Real-time Generation**: Password updates instantly as you adjust settings
- **Responsive UI**: Clean and intuitive user interface with Tailwind CSS
- **Auto-generation**: Password generates automatically on component mount and when settings change

## 🛠️ Tech Stack

- **React** (v19.2.6) - UI library
- **Vite** (v8.0.12) - Build tool and dev server
- **Tailwind CSS** (v4.3.1) - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

## 📦 Project Structure

```
02_project_passwordGenerator/
├── src/
│   ├── App.jsx              # Main component with password generation logic
│   ├── App.css              # Component styles
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   └── assets/              # Static assets
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/learning_react.git
cd learning_react/02_project_passwordGenerator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 📖 Usage

1. **Generate Password**: The password is generated automatically when the page loads
2. **Adjust Length**: Use the slider to set password length (8-100 characters)
3. **Include Numbers**: Check the "Numbers" checkbox to include numeric digits
4. **Include Symbols**: Check the "Symbols" checkbox to include special characters
5. **Copy Password**: Click the "Copy" button to copy the generated password to clipboard

The password updates instantly as you modify any settings.

## 💻 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint to check code quality
npm run lint
```

## 🔧 How It Works

### Core Logic

The password generator uses the following approach:

1. **Character Pool**: Builds a character pool based on selected options:
   - Letters: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
   - Numbers: `0123456789` (if enabled)
   - Symbols: `!@#$%^&*()_+~`|}{[]:;?><,./-=` (if enabled)

2. **Random Selection**: Iterates through the desired length and randomly selects characters from the pool

3. **State Management**: Uses React hooks for state management:
   - `useState` for managing password, length, and checkbox states
   - `useCallback` for optimized function references
   - `useEffect` for automatic password generation
   - `useRef` for clipboard functionality

### Key React Hooks Used

- **useCallback**: Optimizes `generatePassword` and `copyPasswordToClipboard` functions
- **useState**: Manages password, length, and toggle states
- **useEffect**: Automatically generates password when settings change
- **useRef**: References the password input for selection and clipboard operations

## 🎨 UI Components

- **Input Field**: Displays the generated password (read-only)
- **Copy Button**: Copies password to clipboard with hover effect
- **Length Slider**: Range input from 8 to 100 characters
- **Number Checkbox**: Toggle numeric characters
- **Symbol Checkbox**: Toggle special characters

## 📝 Features in Detail

### Password Generation Algorithm

```javascript
const generatePassword = useCallback(() => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
  let characters = letters;
  
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;
  
  let generatedPassword = "";
  for (let i = 1; i <= length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    generatedPassword += characters[randomIndex];
  }
  
  setPassword(generatedPassword);
}, [includeNumbers, includeSymbols, length]);
```

### Clipboard Copy Feature

```javascript
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 90);
  window.navigator.clipboard.writeText(password);
}, [password]);
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling with:
- Responsive design
- Dark theme with gray-700 background
- Blue action buttons with hover effects
- Yellow labels for accessibility
- Smooth animations and transitions

## 🐛 Known Limitations

- Password length is capped at 100 characters
- Selection range is limited to 0-90 characters for visual feedback
- Password generation is purely random without checking for password strength

## 🔒 Security Notes

This is a client-side application. Passwords are generated locally in your browser and are not stored or sent to any server. Each generated password is unique based on the random selection algorithm.

## 📚 Learning Outcomes

This project demonstrates:
- React functional components and hooks
- State management with useState
- Performance optimization with useCallback and useEffect
- DOM manipulation with useRef
- Clipboard API usage
- Tailwind CSS styling
- Vite development workflow

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a learning project for mastering React fundamentals.

## 📞 Support

If you encounter any issues, please create an issue in the repository.

---

**Happy Password Generating! 🔐**
