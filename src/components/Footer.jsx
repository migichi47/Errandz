import { CiCirclePlus } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { SiBuzzfeed } from "react-icons/si";

export function Footer() {
  return (
    <div className="mt-2 flex justify-center gap-10 [&>button]:border [&>button]:border-black/20 [&>button]:rounded-full [&>button]:flex [&>button]:flex-col [&>button]:p-2 [&>button]:w-15 [&>button]:justify-center [&>button]:items-center">
      <button className="group">
        <SiBuzzfeed className="group-hover:" /> <span>Feed</span>
      </button>
      <button>
        <CiCirclePlus />
        <span>Post</span>
      </button>
      <button>
        <FaRegUser />
        <span>Profile</span>
      </button>
    </div>
  );
}
