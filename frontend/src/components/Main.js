import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId, setUserPass } from '../redux/result_reducer'
import '../styles/Main.css'
import { Form, FormControl, Button } from 'react-bootstrap';

export default function Main() {

    //creating pass and id ref
    const userIdRef = useRef(null)
    const userPassRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz(){
        const userId = userIdRef.current?.value;
        const userPass = userPassRef.current?.value;
      
        if(userId && userPass){
          dispatch(setUserId(userId));
          dispatch(setUserPass(userPass));
        }
      }

    
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <ol>
            <li>You will be asked 10 questions</li>
            <li>Each question has three options. only one is correct</li>
            <li>you get 10 points if you guess correct.</li>
            <li>You can review and change answers before you finish.</li>
            <li>The result will be declared at the end.</li>
        </ol>

        <form id="form">
            <input ref={userIdRef} className="userid" type="text" placeholder='Username*' />
            <input ref={userPassRef} className="password" type="text" placeholder='password*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
}
