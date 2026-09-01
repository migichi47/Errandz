import { BiSearch } from "react-icons/bi";
import { BsArrowRight, BsClock } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";

export function Home() {
  return (
    <div className="h-full">
      <div className="bg-gray-200 flex items-center h-10 rounded-full">
        <BiSearch className="w-10" />
        <input
          type="text"
          className="w-full outline-0"
          placeholder="Find an errand (e.g. coffee, laundry)"
        />
      </div>

      <div className="flex mt-5 justify-between items-center">
        <h1 className="font-bold text-2xl">Available Errands</h1>
        <div className="text-secondary flex items-center gap-0.5 font-semibold">
          <span>Sort</span>
          <FiFilter />
        </div>
      </div>

      <div className="flex flex-col mt-5 bg-gray-100 p-4">
        <div className="flex gap-3">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCizjI01qxHM2GVqNDZDZ7CVFFIJQnK2v97h_vT5sYun6ih7K57FhfT6sjEI9Z9oXNpO5jo5pgoB883hLJ0z7wEPYzdKd5OxYDV1LvtlBlwMJC3ISuXturWdVjRov2IqIwrgjE09G2Wjejn8RFNOGko6G33jbFmpKZBGx93i8OiUfyNerR7bnpuAkDL3yyLIjPE272qE585u1YxyzpEVWyOihZh4MbF-uKKfzL51hFpHX4E2ARCkDe6"
            alt="image"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h2 className="font-semibold text-xl">Get Laundry</h2>
              <div className="text-lg text-secondary font-semibold">
                <span>ksh.</span>
                <span>10</span>
              </div>
            </div>
            <p className="text-gray-600 text-xs">
              Need someone to pick up my clothes from main street. I have
              already paid for the laundry fee
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-1">
                <CiLocationOn className="text-lg" />
                <span className="text-xs">North Campus</span>
              </div>
              <div className="flex gap-1">
                <BsClock className="text-sm" />
                <span className="text-xs"> 2 hrs left</span>
              </div>
            </div>
          </div>
        </div>
        <button>
          View Details <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
