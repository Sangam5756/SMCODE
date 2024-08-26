import React, { useState, useEffect, useRef } from 'react';

const ProblemDetails = ({ problem }) => {
  const [solutionType, setSolutionType] = useState('optimal');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const copy = (code) => {
    navigator.clipboard.writeText(code);
    alert("Solution is copied to clipboard");
  };

  const handleSolutionChange = (type) => {
    setSolutionType(type);
  };

  // Find the selected solution based on solutionType
  const selectedSolution = problem.solutions?.find(sol => sol.type === solutionType) || {};

  // Check for the availability of each solution type
  const hasBruteForce = problem.solutions?.some(sol => sol.type === 'brute_force');
  const hasBetter = problem.solutions?.some(sol => sol.type === 'better');
  const hasOptimal = problem.solutions?.some(sol => sol.type === 'optimal');


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is in view
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`p-4 border rounded-lg shadow-lg fade-in ${isVisible ? 'visible' : ''}`}>
      {/* title */}

      <h1 className="text-2xl font-bold mb-2 hover:text-blue-700">
        {problem?.id}. <a href={problem?.link} target='_blank' rel='noopener noreferrer'>{problem?.title}</a>
      </h1>


      <p className="text-gray-700 mb-2"><strong>Difficulty:</strong> {problem.difficulty}</p>
      <p className="text-gray-600 mb-4">{problem.problem_description}</p>

      {/* solution type selection */}
      <div className="mb-4">
        <div className='flex justify-between mx-2'>
          <h2 className="text-xl font-semibold mb-1">Solution:</h2>
          <p onClick={() => copy(selectedSolution.code || '')} className='bg-slate-200 cursor-pointer px-2 mb-1 rounded-md'>Copy</p>
        </div>

        <div className="mb-4">
          <div className="flex gap-2 mb-2">
            {hasBruteForce && (
              <button 
                onClick={() => handleSolutionChange('brute_force')} 
                className={`px-4 py-2 rounded ${solutionType === 'brute_force' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                Brute Force
              </button>
            )}
            {hasBetter && (
              <button 
                onClick={() => handleSolutionChange('better')} 
                className={`px-4 py-2 rounded ${solutionType === 'better' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                Better
              </button>
            )}
            {hasOptimal && (
              <button 
                onClick={() => handleSolutionChange('optimal')} 
                className={`px-4 py-2 rounded ${solutionType === 'optimal' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                Optimal
              </button>
            )}
          </div>

          <pre className="bg-black text-green-600 p-2 rounded-md overflow-x-auto">
            <code>{selectedSolution.code || ''}</code>
          </pre>
          <p className="text-gray-700 mb-2"><strong>Time Complexity:</strong> {selectedSolution.time_complexity || 'N/A'}</p>
          <p className="text-gray-700 mb-4"><strong>Space Complexity:</strong> {selectedSolution.space_complexity || 'N/A'}</p>
        </div>
      </div>
      

      {/* test cases */}
      <div>
        <h2 className="text-xl font-semibold mb-1">Test Cases:</h2>
        {(problem.test_cases || []).map((testCase, index) => (
          <div key={index} className="mb-4 p-2 border rounded-md bg-gray-50">
            <p className="mb-2"><strong>Input:</strong> {testCase.input}</p>
            <p className="mb-2"><strong>Expected Output:</strong> {testCase.expected_output}</p>
            <p><strong>Explanation:</strong> {testCase.explanation}</p>
          </div>
        ))}
      </div>

      {/* brief explanation */}
      <h2 className='text-xl font-semibold mb-1'>Brief Explanation</h2>
      <div>
        <p>{selectedSolution.brief_explanation || 'N/A'}</p>
      </div>
    </div>
  );
};

export default ProblemDetails;
