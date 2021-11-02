import React, { useState } from "react";
import PropTypes from "prop-types";

Count.propTypes = {};

function Count(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((x) => x + 1)}>Incase</button>
    </div>
  );
}

export default Count;
