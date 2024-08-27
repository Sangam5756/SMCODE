import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation, useSearchParams } from 'react-router-dom';
import ProblemDetails from '../components/ProblemDetails'
import Loader from '../components/Loader';

const DisplayPage = () => {
  const [problemData, setProblemData] = useState([])
  const [error, setError] = useState(false);
  const[loading,setLoading] = useState(true);

  const location = useLocation();
  const category = location.pathname.slice(1);


  const handlesearch = async () => {
    setLoading(true);
    // const response = await axios.post("http://localhost:5000/api/category", { category: category })
    const response = await axios.post("https://smcodebackend5756.onrender.com/api/category", { category: category })

    if (response.data.success) {
      setLoading(false)
      setProblemData(response.data.data)
      setError(false);

    }

    if (response.data.error) {
      setError(true);
      setLoading(false);
      setProblemData(null)
    }



  }





  useEffect(() => {

    handlesearch()
  }, [category]);


  return (
    <>
    {loading && <Loader/>}

    
      {error && <p className='mt-2 text-center bg-slate-500  text-xl'>Topic Not Found it will be  available soon</p>}
      <div className=''>
        {
          problemData?.map(problem => {
            return (
              <div key={problem.id} className='border  m-2'><ProblemDetails problem={problem} key={problem.id} /></div>
            )
          })
        }

      </div>

    </>
  )
}

export default DisplayPage