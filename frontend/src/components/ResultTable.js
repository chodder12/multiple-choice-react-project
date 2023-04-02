import React from 'react'

export default function ResultTable() {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>name</td>
                    <td>attempts</td>
                    <td>points earned</td>
                    <td>result</td>
                </tr>
               
            </thead>  
            <tbody>

                <tr className='table-body'>
                    <td>colin</td>
                    <td>03</td>
                    <td>20</td>
                    <td>passed</td>
                </tr>

            </tbody>
           
        </table>
    </div>
  )
}
