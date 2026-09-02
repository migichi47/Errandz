import { CiCirclePlus } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { SiBuzzfeed } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  return (
    <div className="mt-2 absolute w-full bottom-2 flex justify-center gap-10 [&>button]:border [&>button]:border-black/20 [&>button]:rounded-full [&>button]:flex [&>button]:flex-col [&>button]:p-2 [&>button]:w-15 [&>button]:justify-center [&>button]:items-center">
      <button className="group" onClick={() => navigate("/")}>
        <SiBuzzfeed className="group-hover:" /> <span>Feed</span>
      </button>
      <button  onClick={() => navigate("/post")}>
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
