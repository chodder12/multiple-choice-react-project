import React from 'react'

export default function questions() {


    function onSelect(){
        console.log('radio button change')
    }




  return (
    <div className='questions'>
        <h2 className='text-light'>question 1</h2>

        <li>
            <input
                type = "radio"
                value = {true}
                name="options"
                id='q1-option'
                onChange={onSelect()}
            />
        </li>

    </div>
  )
}
