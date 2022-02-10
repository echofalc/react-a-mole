import './App.css';
import { useState } from 'react';

// components
import MoleContainer from './components/MoleContainer';

function App() {
  // useState called to create 'score' variable and setScore function
  let [score, setScore] = useState(0)

  // created function to create mole hills using for-loop + empty 'hills' array
  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      // pushes a mole container with 3 props
      hills.push(
        <MoleContainer
        // elements should ALWAYS have unique identifier aka key={i}
        key={i}
        setScore={setScore}
        score={score} />
      )
    }
    // returning a div with new 'hills' array 
    return(
      <div>
        {hills}
      </div>
    )
  }
  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
