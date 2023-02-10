import { useContext } from "react";

import { DetectionContext } from "../contexts/DetectionContext";

export default function useDetectionContext() {
  const { isStartPose, setIsStartPose } = useContext(DetectionContext);

  return { isStartPose, setIsStartPose };
}
