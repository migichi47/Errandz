import { BsArrowRight, BsClock } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export function Errand({ name, price, description, destination, time }) {
  return (
    <div className="flex flex-col gap-3 mt-5 bg-gray-100 p-4">
      <div className="flex gap-3">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCizjI01qxHM2GVqNDZDZ7CVFFIJQnK2v97h_vT5sYun6ih7K57FhfT6sjEI9Z9oXNpO5jo5pgoB883hLJ0z7wEPYzdKd5OxYDV1LvtlBlwMJC3ISuXturWdVjRov2IqIwrgjE09G2Wjejn8RFNOGko6G33jbFmpKZBGx93i8OiUfyNerR7bnpuAkDL3yyLIjPE272qE585u1YxyzpEVWyOihZh4MbF-uKKfzL51hFpHX4E2ARCkDe6"
          alt="image"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h2 className="font-semibold text-xl">{name}</h2>
            <div className="text-lg text-tertiary font-semibold">
              <span>ksh.</span>
              <span>{price}</span>
            </div>
          </div>
          <p className="text-gray-600 text-xs">{description}</p>
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
      <button className="button py-2 cursor-pointer group hover:text-black/80 transition-colors text-white font-semibold text-xl hover:bg-primary/80 ">
        <span>View Details</span> <BsArrowRight className="group-hover:scale-x-120" />
      </button>
    </div>
  );
}
