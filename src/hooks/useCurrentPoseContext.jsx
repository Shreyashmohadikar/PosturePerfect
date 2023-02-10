import { useContext } from "react";

import { CurrentPoseContext } from "../contexts/CurrentPoseContext";

export default function useCurrentPoseContext() {
  const { currentPose, setCurrentPose } = useContext(CurrentPoseContext);

  return { currentPose, setCurrentPose };
}
