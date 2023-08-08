import { Dispatch, SetStateAction, useState } from "react";
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

interface cityProps {
  name: string;
  coordinates: number[];
}

interface citySelectorProps {
  city: cityProps;
  setCity: Dispatch<SetStateAction<cityProps>>;
}

function CitySelector({ city, setCity }: citySelectorProps) {
  const [open, setOpen] = useState(false);

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
                  (location) => location.city.toLowerCase() === city.name
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
                    setCity({
                      name: currentCity === city.name ? "" : currentCity,
                      coordinates: [
                        location.location.coordinates[1],
                        location.location.coordinates[0],
                      ],
                    });

                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      city.name === location.city.toLowerCase()
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
