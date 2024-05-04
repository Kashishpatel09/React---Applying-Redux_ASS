import React, { useState } from 'react';

const Checklist = () => {
  // Step 1: Create React state to track checkbox value
  const [checkedItems, setCheckedItems] = useState({});

  // Step 2: Function to update checkbox value based on event.target.checked
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked
    });
  };

  return (
    <div>
      <h2>Checklist</h2>
      <form>
        {/* Step 3: Add checkbox input element to JSX code with onChange function */}
        <label>
        Are you a Citizen ?
          <input
            type="checkbox"
            name="Are you a Citizen : Yes"
            checked={checkedItems.name || false}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        Are you over 21 ?
          <input
            type="checkbox"
            name="Are you over 21 : No"
            checked={checkedItems.name || false}
            onChange={handleChange}
          />
        </label>
        <br />
        
      </form>

      {/* Display selected options */}
      <div>
        <h3>Selected Options:</h3>
        <ul>
          {Object.entries(checkedItems).map(([key, value]) => (
            value && <li key={key}>{key}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Checklist;
