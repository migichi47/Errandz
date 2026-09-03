import { CiLocationOn } from "react-icons/ci";
import { FaRegMessage, FaStar } from "react-icons/fa6";
import { Button } from "./Button";
import { GiSandsOfTime } from "react-icons/gi";

export function Profile() {
  return (
    <div className="space-y-5 my-5">
      <div>
        <h1 className="font-bold text-2xl ">Active Errands</h1>
        <p className="text-gray-500">Track the status of your posted tasks.</p>
      </div>
      <div className="tile px-5 py-3 space-y-2">
        <div className="flex justify-between">
          <span className="bg-secondary/20 px-2 rounded-full">In-Progress</span>
          <span className="text-secondary font-semibold">ksh. 90</span>
        </div>
        <h2 className="font-semibold text-xl">Pick up Library Books</h2>
        <div className="flex items-center gap-1">
          <CiLocationOn />
          <h3>Main Campus Library</h3>
        </div>
        <hr className="text-gray-300" />
        <div>
          <h4>Assigned Runner</h4>
          <div className="">
            <div className="py-3 px-5 flex gap-4 items-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN2kbTraXSkO-lj-Je5j1tmpUEDSPpotTJDSVzv3sz4lIfEH5e5NPVkeDKim2KHKqODmJyxm5GSArTGHTtMZs3gfMoyxwnhxN_3KzJwDAvL-CSjEv7retlYMPAG2ijxfpYuu-yLxZr6gmFQgz2i6dg2WHblByVZwbcHGwAjvmdXKokcxj0IeGrbIzaIDvGzb9LqNhqrvZHgFCZzxX_dIfoFmwKqR9fCd8orp8yO-o98Kp3sUthgr7U"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold">Alex M.</h3>
                <div className="flex justify-between gap-2 items-center">
                  <div className="text-primary/80 gap-1 flex items-center">
                    <FaStar className="text-xs" /> <span>4.9</span>
                  </div>
                  <span className="text-black/60 text-xs font-semibold">
                    (24 errands)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 px-4 items-center justify-center py-2">
              <Button className="bg-secondary/20 grow hover:bg-secondary/30 text-black text-sm px-6 py-3">
                <FaRegMessage />
                Message
              </Button>
              <Button className="text-sm px-6 py-3 grow">View Details</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="tile px-5 py-3 space-y-2 flex flex-col items-center">
        <div className="flex justify-between w-full">
          <span className="bg-primary/20 px-2 rounded-full text-primary/90">
            pending
          </span>
          <span className="text-secondary font-semibold">ksh. 90</span>
        </div>
        <h2 className="font-semibold text-xl w-full">Deliver Lab Report</h2>
        <div className="flex items-center gap-1 w-full">
          <CiLocationOn />
          <h3>Main Campus Library</h3>
        </div>
        <hr className="text-gray-300 w-full" />
        <h3 className="font-light text-sm w-full">STATUS</h3>
        <div className="bg-secondary/10 p-3 rounded-lg flex gap-4 items-center w-full">
          <div className="bg-secondary/20 rounded-full p-3 h-fit flex justify-between items-center">
            <GiSandsOfTime />
          </div>
          <div>
            <h4 className="font-semibold">Waiting for a Runner</h4>
            <p className="text-gray-500">Your errand is visible to the community.</p>
          </div>
        </div>
        <button className="border border-gray-400 py-2 w-fit font-semibold rounded-lg px-5">Edit Erand</button>
      </div>
    </div>
  );
}
