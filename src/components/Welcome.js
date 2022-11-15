import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from './reducers/quiz'
import { Button } from './components/Button'

const Welcome = () => {
  const dispatch = useDispatch()
  const onStartQuiz = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <div>
      <h1>Welcome</h1>
      <Button
        handleClick={() => onStartQuiz()}
        buttonText="Start the quiz here!" />
    </div>
  )
}

export default Welcome;