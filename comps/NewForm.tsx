"use client";

import { useState } from "react";

const NewForm = () => {
  const [state, setState] = useState("");

  return (
    <div>
      <form>
        <h2>FORMA</h2>
        <input type="text" />
      </form>
    </div>
  );
};

export default NewForm;
