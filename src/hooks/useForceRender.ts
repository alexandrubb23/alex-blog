import { useState } from "react";

const useForceRender = () => {
  const [resetKey, setResetKey] = useState(0);

  return {
    resetKey,
    setResetKey: () => setResetKey((prev) => prev + 1),
  };
};

export default useForceRender;
