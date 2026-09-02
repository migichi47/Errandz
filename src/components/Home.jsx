import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { Errand } from "./Errand";
import { errands } from "../data/errands";

export function Home() {
  return (
    <div className="">
      <div className="bg-gray-200 flex items-center h-10 rounded-full">
        <BiSearch className="w-10" />
        <input
          type="text"
          className="w-full outline-0 bg-none"
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
      <div className="h-full">
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
