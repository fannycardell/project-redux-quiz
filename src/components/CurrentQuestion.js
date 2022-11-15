import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';
import styled from 'styled-components/macro'

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore);
  console.log(question);

  /* A fetch of the answers to each question */
  const answer = useSelector(
    (store) => store.quiz.answers.find((a) => a.questionId === question.id)
  )

  const dispatch = useDispatch();
  const [hasAnswered, setHasAnswered] = useState(false)
  const [userAnswerIndex, setUserAnswerIndex] = useState('')

  /* A reset for each question */
  useEffect(() => {
    setHasAnswered(false)
    setUserAnswerIndex('')
  }, [question])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  // The line if (answer) return seems to make sure that it is only possible
  // to answer the question once.
  const onAnswerSubmit = (questionId, answerIndex) => {
    if (!answer) {
      setHasAnswered(true)
      setUserAnswerIndex(answerIndex)
      dispatch(quiz.actions.submitAnswer(
        { questionId, answerIndex }
      ));
    }
  }

  const classCheck = (index) => {
    if (!hasAnswered) {
      return 'default'
    }
    if (index === question.correctAnswerIndex) {
      return 'rightanswer'
    } else if (index === userAnswerIndex) {
      return 'wronganswer'
    } else {
      return 'default-disabled'
    }
  }

  return (
    <div>
      <QuestionHeader>Question: {question.questionText}</QuestionHeader>
      <ButtonContainer>
        {question.options.map((option, index) => {
          return (
            <button
              options
              onClick={() => onAnswerSubmit(question.id, index)}
              key={option}
              type="button"
              className={classCheck(index)}>
              {option}
            </button>
          )
        })}
      </ButtonContainer>
    </div>
  )
}

const QuestionHeader = styled.h1`
  font-size: 18px;
  padding: 20px;
  text-align: center;

  @media (min-width: 668px) and (max-width: 1024px) {
    text-align: left;
    font-size: 25px;
  }

  @media (min-width: 1025px){ 
    text-align: left;
    font-size: 30px;
    padding: 60px;
  }
`

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 200px);
  justify-content: center;
  margin: 15px;
  gap: 10px;

  @media (min-width: 668px){
    grid-template-columns: repeat(2, 250px);
  }
  @media (min-width: 1025px){
    grid-template-columns: repeat(2, 300px);
  }
  `