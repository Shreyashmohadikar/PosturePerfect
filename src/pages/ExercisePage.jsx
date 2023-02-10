import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useDetectionContext from "../hooks/useDetectionContext";

import ExerciseInfoSection from "../components/ExerciseInfoSection";
import ExerciseImageSteps from "../components/ExerciseImageSteps";
import DetectionCanvas from "../components/DetectionCanvas";

export default function ExercisePage() {
  const location = useLocation();
  const { title, image, description } = location.state;
  const { isStartPose, setIsStartPose } = useDetectionContext();

  useEffect(() => {
    return () => {
      setIsStartPose(false);
    };
  }, []);

  return (
    <main className="text-white bg-opacity-50 m-10 flex justify-evenly">
      <section className="w-1/2 flex flex-col justify-between items-start gap-20">
        {isStartPose ? (
          <DetectionCanvas />
        ) : (
          <ExerciseInfoSection title={title} description={description[0]} />
        )}

        <button
          onClick={() => setIsStartPose(!isStartPose)}
          className="bg-white text-black font-bold p-4 px-10 rounded-2xl hover:bg-black hover:text-white hover:scale-110 transition active:scale-90"
        >
          {isStartPose ? "Stop" : "Start"}
        </button>
      </section>

      <ExerciseImageSteps title={title} image={image} steps={description[1]} />
    </main>
  );
}
