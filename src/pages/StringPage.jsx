import React from 'react'
import problemData  from "../resources/String/Stringdata"
import ProblemDetails from '../components/ProblemDetails'

const StringPage = () => {
  console.log("consoolle in problemdata",problemData)
  return (
    <>
      <div className=''>
      {
        problemData.map(problem =>{
         return (
          <div className='border  m-2'><ProblemDetails problem={problem} key={problem.id} /></div>
         )
        })
      }

      </div>

    </>
  )
}

export default StringPage