import { createContext, useState } from "react";

export const CurrentPoseContext = createContext();

export default function CurrentPoseContextProvider({ children }) {
  const [currentPose, setCurrentPose] = useState("");

  return (
    <CurrentPoseContext.Provider value={{ currentPose, setCurrentPose }}>
      {children}
    </CurrentPoseContext.Provider>
  );
}
