import React from 'react'
import Progressbar from 'components/ProgressBar'
import { CurrentQuestion } from 'components/CurrentQuestion';
import Summary from 'components/Summary';
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import background from 'images/background.jpg';
import styled from 'styled-components/macro';
import { Button } from './Buttons';

const Main = () => {
  const dispatch = useDispatch()
  const quizOver = useSelector((store) => store.quiz.quizOver);
  const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex)
  console.log(quizOver)
  console.log(currentQuestion)

  const onRestart = () => {
    dispatch(quiz.actions.restart());
  }

  const onNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  }

  if (!quizOver) {
    return (
      <Background img src={background} alt="70s pattern">
        <InnerWrapper>
          <WhiteWrapper>
            <CurrentQuestion />
            <BtnContainer>
              {currentQuestion < 4 && (<Button
                handleClick={() => onNextQuestion()}
                buttonText="Next question" />
              )}
              {currentQuestion === 4 && (
                <Button
                  handleClick={() => onNextQuestion()}
                  buttonText="Show results" />
              )}

            </BtnContainer>
            <Progressbar />
          </WhiteWrapper>
        </InnerWrapper>
      </Background>
    )
  } else {
    return (
      <Background alt="70s pattern">
        <InnerWrapper>
          <WhiteWrapper>
            <Summary />
            <Button
              handleClick={() => onRestart()}
              buttonText="Start over" />
          </WhiteWrapper>
        </InnerWrapper>
      </Background>
    )
  }
}
export default Main;

const Background = styled.main`
  background-image: url(${background});
  background-size: cover;
  min-height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* @media (min-width: 1025px){ 
    min-height: 530px;
  } */
`

const InnerWrapper = styled.div`
  width: 95vw;

  @media (min-width: 668px) and (max-width: 1024px) {
    width: 70vw;
    min-width: 550px;
  }

  @media (min-width: 1025px){ 
    width: 60vw;
    min-width: 670px;
  }

`

const WhiteWrapper = styled.div`
  background-color: #eee8d2;
  opacity: 0.9;
  padding: 20px;
  border-radius: 20px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1025px){ 
    min-height: 520px;
  }
`

const BtnContainer = styled.div`
  display: flex;


@media (min-width: 668px) and (max-width: 1024px) {
  justify-content: flex-end;
  margin-right: 15px;
}
`

