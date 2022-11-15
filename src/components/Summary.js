/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Summary = () => {
  const selectedAnswers = useSelector((store) => store.quiz.answers)
  const numberOfQuestions = useSelector((store) => store.quiz.questions)
  // this will be more accurate when we don't have to click the correct answer to go forward in the game
  const numberOfCorrectAnswers = selectedAnswers.filter((answer) => answer.isCorrect)

  return (
    <div>
      <StyledHeadtitle>Summary</StyledHeadtitle>
      {selectedAnswers.map((singleAnswer) => {
        if (singleAnswer.isCorrect) {
          return (
            <StyledSummaryQ>
              <h2>Question {singleAnswer.question.id}: {singleAnswer.question.questionText}</h2>
              <StyledCorrectAnswer>⭐️ {singleAnswer.answer}</StyledCorrectAnswer>
            </StyledSummaryQ>
          )
        } else {
          return (
            <StyledSummaryQ>
              <h2>Question {singleAnswer.question.id}: {singleAnswer.question.questionText}</h2>
              <p>❌ {singleAnswer.answer}</p>
              <StyledCorrectAnswer>The correct answer: {singleAnswer.question.options[singleAnswer.question.correctAnswerIndex]}</StyledCorrectAnswer>
            </StyledSummaryQ>
          )
        }
      })}
      <StyledScoreBoard>Your total score is {numberOfCorrectAnswers.length}/{numberOfQuestions.length}</StyledScoreBoard>
    </div>
  )
}

export default Summary;

const StyledCorrectAnswer = styled.p`
  font-weight: 700;
`
const StyledSummaryQ = styled.div`
  margin: 20px 0;

  p {
    margin: 5px 0;
  }
`

const StyledScoreBoard = styled.h2`
  margin: 20px 0;
  background-color: #f26a3c;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
`

const StyledHeadtitle = styled.h1`
  text-align:center;
`