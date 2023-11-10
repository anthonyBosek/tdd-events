import { useState } from "react";

const App = () => {
  const [pepCheck, setPepCheck] = useState(false);

  const togglePep = (e) => setPepCheck(e.target.checked);

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepCheck}
        aria-checked={pepCheck}
        onChange={togglePep}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepCheck ? <li>Pepperoni</li> : null}
      </ul>
    </div>
  );
};

export default App;
