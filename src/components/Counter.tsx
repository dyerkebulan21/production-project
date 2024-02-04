import React from "react";

import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1 className={classes.btn}>Counter</h1>
      <p>{count}</p>
      <button>+</button>
      <button>-</button>
    </div>
  );
};
