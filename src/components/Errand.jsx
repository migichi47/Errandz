import { useContext } from "react";
import { BsArrowRight, BsClock } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";

export function Errand({
  id,
  name,
  price,
  description,
  destination,
  time,
  from,
  status,
  ownerId,
}) {
  const { pickedErrandId, setPickedErrandId } = useContext(AppContext);
  const navigate = useNavigate();
  const owner = users.find((user) => user.id === ownerId);

  return (
    <div className="flex flex-col gap-3 mt-5 tile p-4">
      <div className="flex gap-3">
        <img src={owner.image} alt="image" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h2 className="font-semibold text-xl">{name}</h2>
            <div className="text-lg text-tertiary font-semibold">
              <span>ksh.</span>
              <span>{price}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="flex gap-4 items-center">
            <div className="flex gap-1">
              <CiLocationOn className="text-lg" />
              <span className="text-xs">{destination}</span>
            </div>
            <div className="flex gap-1">
              <BsClock className="text-sm" />
              <span className="text-xs"> {time} left</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setPickedErrandId(id);
          navigate("/details");
        }}
        className="button py-2 cursor-pointer group hover:text-black/80 transition-colors text-white font-semibold text-xl hover:bg-primary/80 "
      >
        <span>View Details</span>
        <BsArrowRight className="group-hover:scale-x-120" />
      </button>
    </div>
  );
}
