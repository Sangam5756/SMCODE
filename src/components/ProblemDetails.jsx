import React from 'react';

const ProblemDetails = ({ problem }) => {

  const copy = () => {
    navigator.clipboard.writeText(problem.solution);
    alert("Solution is copy to clipboard");

  }

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      {/* title */}

      <h1 className="text-2xl font-bold mb-2">{problem.id}.{problem.title}</h1>
      <p className="text-gray-700 mb-2"><strong>Difficulty:</strong> {problem.difficulty}</p>
      <p className="text-gray-600 mb-4">{problem.problem_description}</p>

      {/* solution  */}
      <div className="mb-4">
       <div className='flex justify-between mx-2'>
       <h2 className="text-xl font-semibold mb-1">Solution:</h2>
       <p onClick={copy} className='bg-slate-200 cursor-pointer px-2 mb-1 rounded-md'>copy</p>
       </div>
        <pre className="bg-black  text-green-600 p-2 rounded-md overflow-x-auto">
          <code>{problem.solution}</code>
        </pre>
      </div>
      {/* tc sc */}

      <p className="text-gray-700 mb-2"><strong>Time Complexity:</strong> {problem.time_complexity}</p>
      <p className="text-gray-700 mb-4"><strong>Space Complexity:</strong> {problem.space_complexity}</p>

      {/* test cases */}

      <div>
        <h2 className="text-xl font-semibold mb-1">Test Cases:</h2>
        {problem.test_cases.map((testCase, index) => (
          <div key={index} className="mb-4 p-2 border rounded-md bg-gray-50">
            <p className="mb-2"><strong>Input:</strong> {testCase.input}</p>
            <p className="mb-2"><strong>Expected Output:</strong> {testCase.expected_output}</p>
            <p><strong>Explanation:</strong> {testCase.explanation}</p>
          </div>
        ))}
      </div>

      <h2 className='text-xl font-semibold mb-1'>Brief Explaination</h2>
      <div>
        <p>{problem.brief_explanation}</p>
      </div>
    </div>
  );
};

export default ProblemDetails;
