import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation, useSearchParams } from 'react-router-dom';
import ProblemDetails from '../components/ProblemDetails'

const DisplayPage = () => {
  const [problemData, setProblemData] = useState([])
  
  
  const location = useLocation();
  const category = location.pathname.slice(1);
  console.log(category)

  const handlesearch = async () => {
    const response = await axios.post("http://localhost:5000/api/category", { category: category })
    console.log(response)
    setProblemData(response.data)

  }


  useEffect(() => {

    handlesearch()
  }, [category]);


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

export default DisplayPage