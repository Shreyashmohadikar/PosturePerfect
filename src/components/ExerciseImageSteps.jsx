import DefaultImage from "../assets/default-exercise-image.jpg";

export default function ExerciseImageSteps(props) {
  const { image, title, steps } = props;
  return (
    <section className="flex flex-col justify-around items-center">
      <div className="bg-red-200 w-full max-w-[300px] max-h-[300px] overflow-hidden mb-5">
        <img
          className="w-full object-cover"
          src={image ? image : DefaultImage}
          alt={title}
        />
      </div>

      <h5 className="w-[50ch] overflow-auto max-h-[120px]">{steps}</h5>
    </section>
  );
}
