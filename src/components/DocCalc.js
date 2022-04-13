import { useState } from "react";

const DocCalc = () => {
  const [inputValue, setInputValue] = useState("");
  const [yearDog, setYearDog] = useState(0);
  const [yearCat, setYearCat] = useState(0);
  const [error, setError] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue <= 0) {
      setError("set correct year");
      return;
    }
    setError("");
    const localYearDog = inputValue * 4;
    setYearDog(localYearDog);
    const localYearCat = inputValue * 3;
    setYearCat(localYearCat);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button>Submit</button>
      </form>
      <p>{error}</p>
      {yearDog && error === "" ? <p>Your age in dog years: {yearDog}</p> : null}
      {yearCat && error === "" ? <p>Your age in cat years: {yearCat}</p> : null}
      ;
    </div>
  );
};

export default DocCalc;
