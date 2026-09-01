import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { Errand } from "./Errand";

const errands = [
  {
    name: "Get Laundry",
    price: 20,
    description:
      " Need someone to pick up my clothes from main street. I have already paid for the laundry fee",
    destination: "Katoloni",
    time: "2 hrs",
  },
  {
    name: "Coffee Run",
    price: 30,
    description:
      "Stuck in the library studying for finals. I desperately need a large iced latte from the cafeteria at Kathayoni",
    destination: "Kathayoni",
    time: "1 hr",
  },
  {
    name: "Print Notes",
    price: 50,
    description:
      "Printer is broken in my hall. Need 50 pages of notes printed in color and",
    destination: "Machakos University",
    time: "8 hrs",
  },
];

export function Home() {
  return (
    <div className="h-185 overflow-scroll">
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

      <div className="h-full">
        {errands.map((errand) => (
          <Errand
            name={errand.name}
            price={errand.price}
            description={errand.description}
            destination={errand.destination}
            time={errand.time}
          />
        ))}
      </div>
    </div>
  );
}
