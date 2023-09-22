import { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shrinker</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Enter your URL"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>shrink</button>
      </div>
    </div>
  );
};

export default InputShortener;
