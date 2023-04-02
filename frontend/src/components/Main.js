import React, { useRef } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Quiz from './Quiz'
import Result from './Result'
import '../styles/Main.css'


export default function Main() {

    const inputRef = useRef(null)
  
    return (
      <div className='container'>
        <h1 className='title text-light'>Multiple choice quiz game</h1>

        <ol>
            <li>you will be asked several multiple choice question</li>
            <li>choose one answer per question</li>
            <li>you can go back at any time</li>
            <li>your score will be shown at the end of the game</li>


        </ol>

        <form id='form'>
            <input ref={inputRef} className="userid" type="text" placeholder='username*'/>

        </form>


        <div className='start'>
            <Link className='btn' to={'Quiz'}> start quiz</Link>
        </div>


      </div>
    )
  }


