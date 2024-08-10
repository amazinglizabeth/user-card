import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";

const LikeCount = () => {
  const [Count, setCount] = useState(0);

  const Add = () => {
    setCount(Count + 1);
  };

  const Subtract = () => {
    setCount(Count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>{Count}</h2>
      <div>
        <button onClick={Add} className="like">
          <AiOutlineLike />
        </button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Subtract}>Subtract</button>
      </div>
    </div>
  );
};

export default LikeCount;
