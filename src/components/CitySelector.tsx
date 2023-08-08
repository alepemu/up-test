import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../components/ui/command";

import locations from "../mocks/test_locations.json";

function CitySelector() {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("");

  return (
    <div id="location" className="flex flex-col gap-2">
      <h4 className="text-xl font-bold">City</h4>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            // variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {city
              ? locations.find(
                  (location) => location.city.toLowerCase() === city
                )?.city
              : "Select location..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0">
          <Command>
            <CommandInput placeholder="Search location..." />
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem
                  key={location.id}
                  onSelect={(currentCity) => {
                    setCity(currentCity === city ? "" : currentCity);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      city === location.city.toLowerCase()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {location.city}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default CitySelector;
