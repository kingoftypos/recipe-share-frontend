import React, { useState } from "react";

const Steps = () => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState("");

  const handleAddStep = () => {
    if (currentStep.trim() !== "") {
      setSteps([...steps, currentStep.trim()]);
      setCurrentStep("");
    }
  };

  const handleRemoveStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log("Submitted Steps:", steps);
    alert("Steps submitted! Check the console for output.");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add Steps for Recipe</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter recipe step"
          value={currentStep}
          onChange={(e) => setCurrentStep(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleAddStep}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Add Step
        </button>
      </div>
      <ul className="list-disc pl-5 mb-4">
        {steps.map((step, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {step}
            <button
              onClick={() => handleRemoveStep(index)}
              className="ml-4 p-1 bg-red-500 text-white rounded-md"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="p-2 bg-green-500 text-white rounded-md"
      >
        Submit Steps
      </button>
    </div>
  );
};

export default Steps;
