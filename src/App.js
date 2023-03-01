import React,{useState} from 'react';
import Questionslist from './components/QuestionsList';
import {v4 as uuidv4} from "uuid";
import './App.css';

const App=()=>{
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[score,setScore]=useState(0);
  const [click,setClicked]=useState(false);
  const[showScore,setShowScore]=useState(false);
  const handleCorrectAnswer=(isCorrect)=>{
    if(isCorrect){
      setScore(score+1);
    }
    setClicked(true);
  };
  const handleNextQuestion=()=>{
    setClicked(false);
    if(currentQuestion<Questionslist.length-1){
      setCurrentQuestion(currentQuestion+1)
    }
    else{
      setShowScore(true);
    }
  }
  
  
  return (
    <div className="app-wrapper">
      {showScore?(
        <div>
          <div className='completed'> Completed!!! </div>
          <div className='score-section'>
            Your score:{setScore}/{Questionslist.length}
          </div>
        </div>
      ):(
      <div>
        <div className="question-section-wrapper">
          <div className="question-count">
            Question {currentQuestion + 1} of {Questionslist.length}
          </div>
          <div className='question'>
            {Questionslist[currentQuestion].Question}
          </div>
        </div>
        <div className='answer-section-wrapper'>
          {Questionslist[currentQuestion].answersList.map((answerOption)=>(
              <li className="answer-list" key={uuidv4()}>
              <button 
               disabled={click}
              className={`answer-button ${ click && answerOption.isCorrect? "correct":""}`}
              onClick={()=>handleCorrectAnswer(answerOption.isCorrect)}> {answerOption.answer} </button>
              </li>
          ))}
        </div>
          <div>
            <button className="next-button" 
            onClick={handleNextQuestion}
            //</div>disabled={!click}
            > Next </button> 
        </div>
        </div>
        )}
      </div>
  );
};

export default App;
