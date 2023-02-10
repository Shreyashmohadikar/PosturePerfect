import { Carousel } from "@trendyol-js/react-carousel";

import ExerciseCard from "./ExerciseCard";

export default function ExerciseSection(props) {
  const { title, exercises } = props;

  return (
    exercises && (
      <section className="mx-10 p-2 overflow-auto">
        <h3 className="text-center text-2xl text-white p-2">{title}</h3>

        {/* <Carousel
          show={4.2}
          dynamic
          responsive
          leftArrow={<LeftArrow />}
          rightArrow={<RightArrow />}
        >
          {exercises.map((exercise, index) => {
            return (
              <div key={index}>
                <ExerciseCard {...exercise} />
              </div>
            );
          })}
        </Carousel> */}

        <Carousel
          dynamic
          responsive
          show={4.2}
          swiping
          infinite
          children={exercises.map((exercise, index) => {
            return (
              <div key={index}>
                <ExerciseCard {...exercise} />
              </div>
            );
          })}
        ></Carousel>
      </section>
    )
  );
}

const LeftArrow = () => {
  return (
    <div className="h-full cursor-pointer grid place-items-center z-30">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="w-6 h-6 stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </div>
  );
};

const RightArrow = () => {
  return (
    <div className="h-full grid place-items-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="w-6 h-6 stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
  );
};
