export default function ExerciseInfoSection(props) {
  const { title, description } = props;
  return (
    <div>
      <h2 className="text-3xl font-bold py-3 mt-5">{title}</h2>

      <h5 className="w-[45ch] text-lg mt-5 overflow-auto max-h-[200px]">
        {description
          ? description
          : "No information found for this exercise. We are working on it! Sorry for the inconvenience"}
      </h5>
    </div>
  );
}
