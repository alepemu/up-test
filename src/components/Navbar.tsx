import { Dispatch, SetStateAction } from "react";
import { CircleDot } from "lucide-react";
import { Cloud } from "lucide-react";

interface NavbarProps {
  areaTab: boolean;
  setAreaTab: Dispatch<SetStateAction<boolean>>;
}

function Navbar({ areaTab, setAreaTab }: NavbarProps) {
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 w-full h-20 flex justify-center items-center gap-24 border-t-2 border-sky-400/50">
        <CircleDot
          onClick={() => setAreaTab(true)}
          size={35}
          className={`cursor-pointer stroke-sky-400 ${
            areaTab ? "opacity-100" : "opacity-50"
          }`}
        />
        <Cloud
          onClick={() => setAreaTab(false)}
          size={35}
          className={`cursor-pointer stroke-sky-400 ${
            areaTab ? "opacity-50" : "opacity-100"
          }`}
        />
        <div
          id="dot"
          className={`absolute bottom-3 h-[5px] w-[5px] bg-sky-400 rounded-full ${
            areaTab ? "-translate-x-[65px]" : "translate-x-[65px]"
          } transition-all ease-in-out duration-200`}
        ></div>
      </div>
    </>
  );
}

export default Navbar;
