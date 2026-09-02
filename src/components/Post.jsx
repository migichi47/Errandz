import { CgDetailsMore } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaMoneyBills } from "react-icons/fa6";
import { Button } from "./Button";

export function Post() {
  return (
    <div className="space-y-6 my-5">
      <div>
        <h1 className="font-bold text-2xl">Post a New Errand</h1>
        <p className="text-gray-500 text-sm">
          Need something done? Fill out the details below.
        </p>
      </div>

      <div className="flex flex-col space-y-2 tile px-5 py-3">
        <div className="flex gap-2 items-center font-semibold text-primary">
          <CgDetailsMore />
          <h2>The Details</h2>
        </div>
        <div className="flex flex-col gap-1">
          <label>Errand Title</label>
          <input
            className="bg-secondary/10 py-3"
            type="text"
            placeholder="eg., Get Laundry"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Description</label>
          <input
            className="bg-secondary/10 h-20"
            type="text"
            placeholder="Take my laundry to Kimaa's Laundry store in cp"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2 tile px-5 py-3">
        <div className="text-secondary font-semibold flex gap-2 items-center">
          <CiLocationOn />
          <h2>Locations</h2>
        </div>
        <div className="flex flex-col">
          <label>Pickup Location</label>
          <select name="" id="">
            <option value="katoloni">Katoloni</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Dropoff Point</label>
          <select name="" id="">
            <option value="katoloni">CP</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col space-y-2 tile px-5 py-3">
        <div className="text-tertiary font-semibold flex gap-2 items-center">
          <FaMoneyBills />
          <h3>Compensation</h3>
        </div>
        <label>Price / Budget</label>
        <input className="bg-secondary/10 py-3" type="text" placeholder="ksh.90" />
      </div>

      <Button className="text-white text-lg font-bold w-full py-3">
        Post errand
      </Button>
    </div>
  );
}
