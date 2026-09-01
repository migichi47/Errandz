import { CiBellOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
  return (
    <div className="absolute top-0 rounded-t-full backdrop-blur-xs shadow-sm border-b border-gray-200 h-15 flex items-center w-full px-3 justify-between">
      <span>
        <GiHamburgerMenu />
      </span>
      <span className="text-primary font-bold text-3xl">Erandzz</span>
      <span>
        <CiBellOn className="text-xl" />
      </span>
    </div>
  );
}
