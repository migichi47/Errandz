import { CiCirclePlus } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { SiBuzzfeed } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="mt-2 absolute w-full bottom-2 flex justify-center gap-10 [&>button]:border [&>button]:border-black/20 [&>button]:rounded-full [&>button]:flex [&>button]:flex-col [&>button]:p-2 [&>button]:w-15 [&>button]:justify-center [&>button]:items-center">
      <button
        className={`${location.pathname === "/" ? "bg-primary" : "hover:bg-secondary/20 transition-colors"} group `}
        onClick={() => navigate("/")}
      >
        <SiBuzzfeed
          className={location.pathname !== "/" && "group-hover:scale-120 duration-75"}
        />
        <span>Feed</span>
      </button>
      <button
        onClick={() => navigate("/post")}
        className={`${location.pathname.startsWith("/post") ? "bg-primary" : "hover:bg-secondary/20 transition-colors"} group `}
      >
        <CiCirclePlus
          className={
            !location.pathname.startsWith("/post") && "group-hover:scale-120 duration-75"
          }
        />
        <span>Post</span>
      </button>
      <button
        className={`${location.pathname.startsWith("/profile") ? "bg-primary" : "hover:bg-secondary/20 transition-colors"} group `}
      >
        <FaRegUser
          className={
            !location.pathname.startsWith("/profile") && "group-hover:scale-120 duration-75"
          }
        />
        <span>Profile</span>
      </button>
    </div>
  );
}
