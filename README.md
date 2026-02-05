# React Flashcard App

## Live Demo

**[View Live Application](https://yeosh235.github.io/react-flashcard-app/)**

## Screenshot

*(Replace with actual screenshot after deployment)*

## Features

### Core Features
- **Interactive Flashcards**: Click cards to flip between questions and answers
- **Progress Tracking**: Visual progress bar showing current position
- **Smart Navigation**: Previous/Next buttons with bounds checking
- **Completion Screen**: Celebration message when finishing all cards
- **Restart Functionality**: Always-available restart button

### User Experience
- **Dual Interaction**: Click cards OR use "Show Answer" button
- **Visual Feedback**: Hover effects and smooth transitions
- **Responsive Design**: Works on desktop and mobile devices
- **Clean Interface**: Organized button layout with consistent styling
- **Progress Visualization**: Dynamic green progress bar

### Technical Features
- **React Hooks**: Uses `useState` for state management
- **Conditional Rendering**: Shows/hides elements based on state
- **Dynamic Styling**: Inline styles with JavaScript values
- **Event Handling**: Click events for all interactive elements

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Local Development
```bash
# 1. Clone the repository
git clone https://github.com/yeosh235/react-flashcard-app.git
cd react-flashcard-app

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# App will be available at http://localhost:5173/
```

### Build for Production
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## How to Use

### Basic Usage
1. **Start Learning**: The app opens with the first flashcard question
2. **Reveal Answer**: Click the card or press "Show Answer" button
3. **Navigate**: Use "Previous" and "Next" buttons to move between cards
4. **Track Progress**: Watch the progress bar fill as you advance
5. **Restart**: Use the "Restart" button to begin again at any time

### Flashcard Content
The app comes with sample React flashcards:
1. **What is a 'component' in React?** -> It is a reusable piece of UI
2. **What is state?** -> It is an object that determines how a component renders and behaves
3. **What hook is used to manage state?** -> useState

## Project Structure

```
react-flashcard-app/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Styles for the app
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── .github/workflows/   # GitHub Actions workflows
└── package.json         # Dependencies and scripts
```

## Learning Concepts Demonstrated

This project demonstrates key React concepts:

### 1. State Management with useState
```javascript
const [currentIndex, setCurrentIndex] = useState(0);
const [isFlipped, setIsFlipped] = useState(false);
```

### 2. Conditional Rendering
```jsx
{currentIndex === flashcards.length - 1 && (
  <div className="completion-message">
  </div>
)}
```

### 3. Event Handling
```jsx
  {isFlipped ? "Show Question" : "Show Answer"}
</button>
```

### 4. Dynamic Styling
```jsx
<div style={{ 
  width: `${((currentIndex + 1) / flashcards.length) * 100}%`,
  backgroundColor: '#4caf50'
}}></div>
```

## Deployment

This app is deployed using **GitHub Pages**. The deployment is automated through GitHub Actions.

### Deployment Workflow
1. Code pushed to `main` branch
2. GitHub Actions builds the project
3. Build output deployed to `gh-pages` branch
4. GitHub Pages serves from `gh-pages` branch

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to GitHub Pages (requires gh-pages package)
npm install --save-dev gh-pages
npm run deploy
```

## Future Enhancements

### Planned Features
- [ ] Card Management: Add/Edit/Delete flashcards
- [ ] Multiple Decks: Organize cards by category
- [ ] Study Modes: Shuffle, timed practice, test mode
- [ ] Progress Saving: Local storage for study progress
- [ ] Dark Mode: Toggle between light/dark themes

### Technical Improvements
- [ ] TypeScript Migration: Add type safety
- [ ] Unit Tests: Add Jest/React Testing Library tests
- [ ] Accessibility: Improve screen reader support
- [ ] Performance: Optimize re-renders and bundle size

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and structure
- Add comments for complex logic
- Update documentation as needed
- Test changes thoroughly

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Badges from [Shields.io](https://shields.io/)
- Deployment with [GitHub Pages](https://pages.github.com/)

## Contact

Project Link: [https://github.com/yeosh235/react-flashcard-app](https://github.com/yeosh235/react-flashcard-app)

---

**Happy Learningd:Coding folderflash cards app using javascript frameworks*

*If you find this project helpful, please give it a star on GitHubd:Coding folderflash cards app using javascript frameworks
