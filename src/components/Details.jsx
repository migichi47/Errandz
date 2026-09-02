import { BsClock } from "react-icons/bs";
import { FaRunning, FaStar } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { MdPending } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { errands } from "./errands";
import { users } from "./users";

export function Details() {
  const { pickedErrandId, setPickedErrandId } = useContext(AppContext);
  const errand = errands.find((errand) => errand.id === pickedErrandId);
  const user = users.find((user) => user.id === errand?.ownerId);

  return (
    <div className="space-y-5">
      <div className="space-y-4 py-3 px-5 tile">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl w-55">{errand?.name}</h1>
          <div className="flex flex-col items-end">
            <span className="text-secondary font-semibold">
              ksh.{errand?.price}
            </span>
            <span className="text-sm font-light">Est. PAYOUT</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-primary/20 rounded-2xl flex w-fit gap-2 items-center px-3 py-1 text-xs">
            <MdPending />
            <span>
              {errand?.status === "pending"
                ? "Pending Acceptance"
                : "Completed"}
            </span>
          </div>
          <div className="bg-secondary/10 rounded-2xl flex w-fit gap-2 items-center px-3 py-1 text-xs">
            <BsClock />
            <span>Due Today, 6:00 PM</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold">Task Overview</h2>
        <div className="tile px-5 py-3">
          <p>{errand?.description}</p>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold">Requested By,</h2>
        <div className="tile py-3 px-5 flex justify-between items-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAygh0YqwnpPWGNmbJQfZcwzVsMYdQFUtbHUg1c5I7u0fiPujCpDXYoAKP4kTGIcQnVZEqSPrkzL5itbO-lZy_nvszGs2Tc_UGZajE45mEfMzNT8BDgGlor_uQms0v1hXi09cV3OfCRmZQ0ImKaKh2gz90Gpz4IIxgrZ0aRgsARNW9Ai_-UXMf2IowGxedjB9dbtbxLaiNReopvfpHueW3xEGB0y0f6TZcsjAxoBayQPeGSJmxfnQEu"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">{user.name}</h3>
            <div className="flex justify-between gap-2 items-center">
              <div className="text-primary/80 gap-1 flex items-center">
                <FaStar className="text-xs" /> <span>4.8</span>
              </div>
              <span className="text-black/60 text-xs font-semibold">
                (24 errands)
              </span>
            </div>
          </div>
          <div className="border border-secondary rounded-full text-secondary flex gap-2 px-4 items-center py-2">
            <FaRegMessage />
            <span className="font-semibold">Contact</span>
          </div>
        </div>
      </div>

      <button
        onClick={null}
        className="bg-primary/80 w-full cursor-pointer rounded-full flex justify-center items-center py-3 group gap-2 hover:gap-3 hover:bg-amber-600 transition-colors duration-75"
      >
        <FaRunning className="group-hover:scale-110" />
        <span className="group-hover:scale-110">Run Erand</span>
      </button>
    </div>
  );
}
