import React, { Dispatch, SetStateAction } from 'react';
import { Button } from "./ui/button";

interface NavbarProps {
  setAreaTab: Dispatch<SetStateAction<boolean>>;
}

function Navbar({ setAreaTab }: NavbarProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 w-full h-20 flex justify-center items-center gap-16 border-t-2 border-blue-200">
      <Button onClick={() => setAreaTab(true)}>A</Button>
      <Button onClick={() => setAreaTab(false)}>W</Button>
    </div>
  );
}

export default Navbar;
