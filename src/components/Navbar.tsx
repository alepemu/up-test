import { Dispatch, SetStateAction } from "react";
import { CircleDot } from "lucide-react";
import { Cloud } from "lucide-react";

interface NavbarProps {
  setAreaTab: Dispatch<SetStateAction<boolean>>;
}

function Navbar({ setAreaTab }: NavbarProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 w-full h-20 flex justify-center items-center gap-20 border-t-2 border-blue-200">
      <CircleDot
        onClick={() => setAreaTab(true)}
        size={35}
        className="cursor-pointer"
      />
      <Cloud
        onClick={() => setAreaTab(false)}
        size={35}
        className="cursor-pointer"
      />
    </div>
  );
}

export default Navbar;
