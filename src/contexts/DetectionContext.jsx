import { createContext, useState } from "react";

export const DetectionContext = createContext();

export default function DetectionContextProvider({ children }) {
  const [isStartPose, setIsStartPose] = useState(false);

  return (
    <DetectionContext.Provider value={{ isStartPose, setIsStartPose }}>
      {children}
    </DetectionContext.Provider>
  );
}
