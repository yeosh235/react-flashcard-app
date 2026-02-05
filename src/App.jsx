import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const flashcards = [
    {id: 1, question : "what is a 'component' in React?" , answer : "it is a reusable piece of UI"},
    {id: 2, question : "what is state? ", answer : "it is an object that determines how a component renders and behaves"},
    {id: 3, question: "what hook is used to manage state?", answer: "useState"}
  ];

  const [currentIndex,setCurrentIndex] = useState(0);

  const [isFlipped,setIsFlipped] = useState(false);


  return (
    <div>
      <h1>My flashcard app</h1>
      
      <div className="progress">
        <p>Progress: {currentIndex + 1} / {flashcards.length}</p>
        <div style={{ 
          width: '100%', 
          backgroundColor: '#eee', 
          height: '10px', 
          borderRadius: '5px' 
        }}>
          <div style={{ 
            width: `${((currentIndex + 1) / flashcards.length) * 100}%`, 
            backgroundColor: '#4caf50', 
            height: '100%', 
            borderRadius: '5px',
            transition: 'width 0.3s ease'
          }}></div>
        </div>
      </div>

      <div className="card" onClick={()=> setIsFlipped(!isFlipped)}>
        {isFlipped ? flashcards[currentIndex].answer : flashcards[currentIndex].question}
      </div>

      <div className="card-controls" style={{ 
        marginTop: '20px', 
        textAlign: 'center',
        marginBottom: '15px'
      }}>
        <button 
          onClick={() => setIsFlipped(!isFlipped)}
          style={{
            padding: '10px 24px',
            backgroundColor: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1976d2'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2196f3'}
        >
          {isFlipped ? "Show Question" : "Show Answer"}
        </button>
      </div>

      {currentIndex === flashcards.length - 1 && (
        <div className="completion-message" style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#e8f5e9',
          borderRadius: '8px',
          textAlign: 'center',
          border: '1px solid #c8e6c9',
          marginBottom: '20px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#2e7d32' }}>Good job! You finished!</h3>
          <p style={{ margin: '0', color: '#388e3c' }}>You've completed all {flashcards.length} flashcards!</p>
        </div>
      )}

      <div className="navigation" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '10px'
      }}>
        <button 
          onClick={() => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
              setIsFlipped(false);
            }
          }}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f5f5f5',
            color: '#333',
            border: '1px solid #ddd',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#f5f5f5'}
        >
          Previous
        </button>

        <button 
          onClick={() => {
            if (currentIndex < flashcards.length - 1) {
              setCurrentIndex(currentIndex + 1);
              setIsFlipped(false);
            }
          }}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f5f5f5',
            color: '#333',
            border: '1px solid #ddd',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#f5f5f5'}
        >
          Next
        </button>

        <button 
          onClick={() => {
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          style={{
            padding: '8px 16px',
            backgroundColor: '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f57c00'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#ff9800'}
        >
          Restart
        </button>
      </div>
    </div>
  )
}

export default App
