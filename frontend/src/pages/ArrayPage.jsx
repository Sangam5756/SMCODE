import React, { useEffect, useState } from 'react'
// import problemData from "../resources/Data/ArrayData"
import ProblemDetails from '../components/ProblemDetails'

const ArrayPage = () => {
  const [problemData, setProblemData] = useState([])
  const problemfetch = async () => {
    const response = await fetch("https://smcode-production.up.railway.app/api/questions");
    const data = await response.json();
    setProblemData(data)
    console.log(data);
  }

  useEffect(() => {
          
    problemfetch()
  }, []);

  return (
    <>
      <div className=''>
        {
          problemData.map(problem => {
            return (
              <div className='border  m-2'><ProblemDetails problem={problem} key={problem.id} /></div>
            )
          })
        }

      </div>

    </>
  )
}

export default ArrayPage