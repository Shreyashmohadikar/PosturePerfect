import { useState, useEffect } from "react";

// Components
import Divider from "../components/Divider";
import ExerciseSection from "../components/ExerciseSection";

import StillExercises from "../assets/still_exercises.json";
import MotionExercises from "../assets/motion_exercises.json";

export default function Home() {
  const [stillExerciseList, setStillExerciseList] = useState([]);
  const [motionExerciseList, setMotionExerciseList] = useState([]);
  useEffect(() => {
    setStillExerciseList(StillExercises);
    setMotionExerciseList(MotionExercises);
  }, []);

  return (
    <>
      <ExerciseSection title="Still Exercises" exercises={stillExerciseList} />
      <Divider />
      <ExerciseSection
        title="Motion Exercises"
        exercises={motionExerciseList}
      />
    </>
  );
}
