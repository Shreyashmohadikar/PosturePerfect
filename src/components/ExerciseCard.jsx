import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactCardFlip from "react-card-flip";

import useCurrentPoseContext from "../hooks/useCurrentPoseContext";

import DefaultImage from "../assets/default-exercise-image.jpg";

export default function ExerciseCard(props) {
  const { title, image, description } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const { setCurrentPose } = useCurrentPoseContext();

  return (
    <div
      onMouseEnter={() => setIsFlipped(!isFlipped)}
      onMouseLeave={() => setIsFlipped(!isFlipped)}
      className="mx-2 rounded-lg overflow-hidden bg-white active:scale-95 transition"
      onClick={() => {
        setCurrentPose(title);
        navigate(`/${title}`, { state: props });
      }}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardFront title={title} image={image} />
        <CardBack title={title} description={description} />
      </ReactCardFlip>
    </div>
  );
}

const CardFront = (props) => {
  const { title, image } = props;
  return (
    <div className="h-[250px] flex flex-col justify-between">
      <h4 className="text-center text-white bg-black text-xl p-2">{title}</h4>
      {/* <div className="overflow-hidden h-full w-full">
        <img
          className="w-full object-fill"
          src={image ? image : DefaultImage}
          alt={title}
        />
      </div> */}
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${image ? image : DefaultImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

const CardBack = (props) => {
  const { title, description } = props;
  return (
    <div className="h-[250px] bg-white p-2">
      <h4 className="text-center text-white bg-black text-xl p-2 mb-5">
        {title}
      </h4>

      {description ? (
        <h5 className="line-clamp-6">{description}</h5>
      ) : (
        <h5 className="text-center">No information found!</h5>
      )}
    </div>
  );
};
