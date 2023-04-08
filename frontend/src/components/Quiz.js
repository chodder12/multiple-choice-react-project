import React, { useEffect } from 'react'
import Questions from './Questions'

import { useSelector } from 'react-redux'

export default function Quiz() {

    const state = useSelector(state => state)


    useEffect(() => {
        console.log(state)
    })

    function onNextClick(){
        console.log('on next click')
    }

    function onBackClick(){
        console.log('on back click')
    }


  return (
    <div className='container'>
        <h1 className='title text-light'> welcome to the quiz</h1>

        {/*where the questions will go */}

        <Questions></Questions>

        <div className='grid'>
            <button className='btn-back' onClick={onBackClick}>back</button>
            <button className='btn-next' onClick={onNextClick}>Next</button>
        </div>

    
    </div>
  )
}
