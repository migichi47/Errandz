import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { Errand } from "./Errand";
import { errands } from "../data/errands";

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-200 flex w-full items-center h-10 rounded-full max-w-100 sm:max-w-150 ">
        <BiSearch className="w-10" />
        <input
          type="text"
          className="w-full outline-0 bg-none"
          placeholder="Find an errand (e.g. coffee, laundry)"
        />
      </div>
      <div className="flex mt-5 justify-between items-center w-[90%]">
        <h1 className="font-bold text-2xl">Available Errands</h1>
        <div className="text-secondary flex items-center gap-0.5 font-semibold cursor-pointer hover:bg-secondary transition-colors px-2 py-1 hover:text-white rounded-full">
          <span>Sort</span>
          <FiFilter />
        </div>
      </div>
      <div className="h-full lg:grid lg:grid-cols-2 lg:gap-4">
        {errands.map((errand) => (
          <Errand
            key={errand.id}
            id={errand.id}
            name={errand.name}
            price={errand.price}
            description={errand.description}
            destination={errand.destination}
            time={errand.time}
            from={errand.from}
            status={errand.status}
            ownerId={errand.ownerId}
          />
        ))}
      </div>
    </div>
  );
}
