import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import ProductFilter from "../../components/shopping-view/ProductFilter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { ArrowUpDown, Check } from "lucide-react";
import { SortOptions } from "../../config";
import { Checkbox } from "../../components/ui/checkbox";
import { useState } from "react";

function ShoppingListing() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-6 p-4 sm:p-6">
      <ProductFilter />
      <div className="rounded-lg shadow-sm w-full bg-gradient-to-b from-black/90 via-gray-500/30 to-transparent">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="font-extrabold text-gray-400 text-lg">All Products</h2>
          <div className="flex items-center justify-center gap-5">
            <span className="text-muted-foreground">10 Products</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="cursor-pointer text-black/75 hover:text-black/95 hover:bg-gray-300"
                >
                  <ArrowUpDown className="h-8 w-8" />
                  <span className="font-semibold text-base">Sort</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 flex flex-col mt-2"
              >
                {SortOptions.map((options) => (
                  <DropdownMenuItem
                    key={options.id}
                    onClick={() => setSelected(options.label)}
                  >
                    <div className="flex items-center gap-2 p-0.5  cursor-pointer hover:bg-gray-500 rounded-md px-2">
                      <span>{options.label}</span>
                      {selected === options.label && (
                        <Check className=" border-black/65" />
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShoppingListing;
