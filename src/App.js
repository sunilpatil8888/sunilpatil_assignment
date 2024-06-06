import React, { useState  } from "react";
import {QUESTIONS} from "./questions";

function App() {
  
  const [quesArr, setQuesArr] = useState(Object.entries(QUESTIONS).map(([qId, qText]) => ({
    qId,
    qText,
    qAnswer: null
  })));


  const [totScr, setTotScr] = useState(0);

  const handleScore = (quesId, answer) => {
    const updatedQuestions = quesArr.map(ques => {
      if (ques.qId === quesId) {
        return { ...ques, answer };
      }
      return ques;
    });
    const score = updatedQuestions.filter(ques => ques.answer === 'Yes').length;
    setTotScr((score/quesArr.length)*100);
    setQuesArr(updatedQuestions);
  };

  return (
    <div className="main__wrap">
      <main className="container">
        <div>
          <h1>Yes/No Quiz</h1>            
          <div>
            {quesArr.map(ques => (
              <div key={ques.qId}>
                <p>{ques.qText}</p>
                <button onClick={() => handleScore(ques.qId, 'Yes')}>Yes</button>
                <button onClick={() => handleScore(ques.qId, 'No')}>No</button>
              </div>
            ))}
            <p>Total Score: {totScr} %</p>
          </div>           
        </div>
      </main>
    </div>
  );
}
export default App;
