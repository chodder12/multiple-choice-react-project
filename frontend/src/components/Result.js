import React from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'

import '../styles/Result.css'

export default function Result() {


  function onRestart(){
    console.log('on restart')
  }


  return (
    <div className='container'>
      <h1 className='title text-light'> welcome to the quiz</h1>

      <div className='result flex-center'></div>
        <div className='flex'>
          <span>username</span>
          <span className='bold'>colin</span>
        </div>
        <div className='flex'>
          <span>total quiz points</span>
          <span className='bold'>50</span>
        </div>
        <div className='flex'>
          <span>total questions</span>
          <span className='bold'>05</span>
        </div>
        <div className='flex'>
          <span>total attempts</span>
          <span className='bold'>03</span>
        </div>
        <div className='flex'>
          <span>points earned</span>
          <span className='bold'>colin</span>
        </div>
        <div className='flex'>
          <span>quiz result</span>
          <span className='bold'>passed</span>
        </div>

          <div className='start'>
            <Link className='btn' to={'/'} onClick={onRestart}>play again</Link>
          </div>

          <div className='container'>
            <ResultTable></ResultTable>
          </div>  

    </div>
  )
}
