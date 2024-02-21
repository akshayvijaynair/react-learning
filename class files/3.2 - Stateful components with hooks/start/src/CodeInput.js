import React, {useState} from "react";

const CodeInput = ({onSet}) => {
  const [code, setCode] = useState();
  const onSetCode = val => {
    setCode(val);
    onSet(val);
  };
  return (
    <div className="code-input">
      <input
        type="text"
        value={code}
        onChange={e => onSetCode(e.target.value)}
      />
      <button
        onClick={() =>
          onSetCode(parseInt(Math.random() * new Date().getTime()))
        }
      >
        Generate
      </button>
    </div>
  );
};

export default CodeInput;
